import {
  Subject,
  fromEvent,
  merge,
  throttleTime,
  distinctUntilChanged,
  pluck,
  filter,
} from 'rxjs';
import Render from '../ui/Render';
import VARIABLE from '../ui/VARIABLE.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.project = {
      id: null,
      title: null,
    };
    this.streams = {
      actions: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksProject: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksCreatePanel: {
        stream$: null,
        subscriptions: new Set(),
      },
      keyupModalTask: {
        stream$: null,
        subscriptions: new Set(),
      },
      inputModalTaskTitle: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksModalTaskButtons: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksModalOuterBody: {
        stream$: null,
        subscriptions: new Set(),
      },
    };
  }

  initialApp(container) {
    this.render.renderApp(container);
    this.createStreams();
  }

  createStreams() {
    this.streams.actions.stream$ = new Subject();

    this.streams.clicksProject.stream$ = fromEvent(
      this.render.project.tasks,
      'click',
    ).pipe(
      throttleTime(100),
      pluck('target'),
      filter((event) => event.dataset.name),
    );

    this.streams.clicksCreatePanel.stream$ = fromEvent(
      this.render.project.createPanel,
      'click',
    ).pipe(throttleTime(100), pluck('target'));

    this.streams.clicksModalTaskButtons.stream$ = merge(
      fromEvent(this.render.modal.task.buttons.save, 'click'),
      fromEvent(this.render.modal.task.buttons.cancel, 'click'),
    ).pipe(
      throttleTime(100),
      pluck('target'),
      filter((event) => event.dataset.name),
    );

    this.streams.keyupModalTask.stream$ = fromEvent(
      this.render.modal.task.container,
      'keyup',
    ).pipe(throttleTime(100));

    this.streams.inputModalTaskTitle.stream$ = fromEvent(
      this.render.modal.task.title,
      'input',
    ).pipe(throttleTime(100), distinctUntilChanged());

    this.streams.clicksModalOuterBody.stream$ = fromEvent(
      this.render.modal.container,
      'mousedown',
    ).pipe(
      throttleTime(100),
      pluck('target'),
      filter((event) => event.dataset.outerBody),
    );
  }

  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      targetStream.stream$.subscribe({
        next: subscription,
      });
      targetStream.subscriptions.add(subscription);
    } catch (err) {
      console.log(`Не смог подписаться на поток: ${err}`);
    }
  }

  unSubscribeFromStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      subscription.unsubscribe();
      targetStream.subscriptions.delete(subscription);
    } catch (err) {
      console.log(`Не смог отписаться от потока: ${err}`);
    }
  }

  clearSubscriptionsStream(stream) {
    try {
      const targetStream = this.streams[stream];
      targetStream.subscriptions.forEach((subscription) => {
        this.unSubscribeFromStream(stream, subscription);
      });
    } catch (err) {
      console.log(`Не смог очистить подписки на поток: ${err}`);
    }
  }

  addEventToStream(stream, event) {
    try {
      const targetStream = this.streams[stream];

      targetStream.stream$.next(event);
    } catch (err) {
      console.log(`Не смог добавить событие в поток: ${err}`);
    }
  }

  createInnerSubscriptions() {
    this.subscribeToStream(
      'clicksCreatePanel',
      this.onClickToCreatePanel.bind(this),
    );
    this.subscribeToStream('clicksProject', this.onClickToProject.bind(this));

    this.subscribeToStream(
      'clicksModalTaskButtons',
      this.onClickToModalTaskButtons.bind(this),
    );
    this.subscribeToStream(
      'inputModalTaskTitle',
      this.onInputModalTaskTitle.bind(this),
    );
    this.subscribeToStream('keyupModalTask', this.onKeyupModalTask.bind(this));
    this.subscribeToStream(
      'clicksModalOuterBody',
      this.onClickToModalOuterBody.bind(this),
    );
  }

  onClickToCreatePanel() {
    if (this.project.id === null) {
      this.render.showProjectError(`Не выбран активный проект`);
      return;
    }
    this.render.showModalTask(this.project);
  }

  onClickToProject(target) {
    const taskElement = target.closest('[data-name="task-element"]');

    if (target.dataset.name === 'title') {
      this.createEventToggleVisibleDescr(taskElement);
    }

    if (
      target.dataset.name === 'status' ||
      target.dataset.name === 'status-icon'
    ) {
      this.createEventToggleDoneTasks(taskElement);
    }
  }

  onClickToModalTaskButtons(target) {
    if (target.dataset.name === 'cancel') {
      this.render.hideModalTask();
    }

    if (target.dataset.name === 'save') {
      const chek = this.chekAvailableNewTask();

      if (chek.success === false) {
        this.render.showModalErrorTitleTask(chek.error);
        return;
      }

      if (chek.success === true) {
        this.createEventCreateNewTask();
        this.render.hideModalTask();
        return;
      }
    }
  }

  onInputModalTaskTitle() {
    const chek = this.chekAvailableNewTask();

    if (chek.success === false) {
      this.render.showModalErrorTitleTask(chek.error);
      this.render.disActivationModalButton('task', VARIABLE.BUTTONS.SAVE.name);
      return;
    }

    this.render.hideModalErrorTitleTask();
    this.render.activationModalButton('task', VARIABLE.BUTTONS.SAVE.name);
  }

  onKeyupModalTask(target) {
    if (target.key === 'Enter' && !target.shiftKey) {
      const chek = this.chekAvailableNewTask();

      if (chek.success === false) {
        this.render.showModalErrorTitleTask(chek.error);
        return;
      }

      if (chek.success === true) {
        this.createEventCreateNewTask();
        this.render.hideModalTask();
      }
    }
  }

  onClickToModalOuterBody() {
    this.render.hideModalTask();
  }

  createEventToggleVisibleDescr(taskElement) {
    const event = {
      target: 'project',
      action: 'changeVisibleDescription',
      data: {
        id: taskElement.dataset.id,
        projectId: taskElement.dataset.project,
        visibleDescr: taskElement.dataset.visibleDescr,
      },
    };

    this.addEventToStream(`actions`, event);
  }

  createEventToggleDoneTasks(taskElement) {
    const event = {
      target: 'project',
      action: 'changeStatus',
      data: {
        id: taskElement.dataset.id,
        projectId: taskElement.dataset.project,
        done: taskElement.dataset.done,
      },
    };

    this.addEventToStream(`actions`, event);
  }

  createEventCreateNewTask() {
    const chek = this.chekAvailableNewTask();

    if (chek.success === false) {
      return;
    }

    const newTask = {
      title: this.render.modalTaskTitle,
      descr: this.render.modalTaskDescr,
    };

    const event = {
      target: 'project',
      action: 'add',
      data: {
        projectId: this.project.id,
        task: newTask,
      },
    };

    this.addEventToStream('actions', event);
  }

  chekAvailableNewTask() {
    const titleTask = this.render.modalTaskTitle;

    if (titleTask.length < 3) {
      this.render.showProjectError();
      return {
        success: false,
        error: 'Слишком короткое названеи задачи',
      };
    }

    return {
      success: true,
    };
  }

  updateProject(state) {
    try {
      const activeProject = this.getActiveProject(state.projects) || null;
      this.project.id = activeProject ? activeProject.id : null;
      this.project.title = activeProject ? activeProject.name : null;
      this.render.updateProject(activeProject);
    } catch (err) {
      console.log(`Что-то пошло не так: ${err}`);
    }
  }

  getActiveProject(projects) {
    const arrayProjects = [...projects];
    const activeProject = arrayProjects.find((project) => {
      if (project.actived && !project.archived) {
        return project;
      }
    });

    return activeProject;
  }
}
