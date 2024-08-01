import {
  Subject,
  merge,
  fromEvent,
  throttleTime,
  debounceTime,
  filter,
  pluck,
} from 'rxjs';
import Render from '../ui/Render';
import Project from './Project.js';
import MovingItem from './MovingItems.js';
import VARIABLE from '../ui/VARIABLE.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.moving = new MovingItem();
    this.streams = {
      actions: {
        stream$: null,
        subscriptions: new Set(),
      },
      mouseDown: {
        stream$: null,
        subscriptions: new Set(),
      },
      mouseMove: {
        stream$: null,
        subscriptions: new Set(),
      },
      scroll: {
        stream$: null,
        subscriptions: new Set(),
      },
      mouseUp: {
        stream$: null,
        subscriptions: new Set(),
      },
      keyUpModalProject: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksDashboard: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksCreatePanel: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksModalConfirmButtons: {
        stream$: null,
        subscriptions: new Set(),
      },
      inputsModalProjectName: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksModalProjectButtons: {
        stream$: null,
        subscriptions: new Set(),
      },
      clicksModalOuterBody: {
        stream$: null,
        subscriptions: new Set(),
      },
    };

    this.movingTimerClick = null;
    this.movingTimerMove = null;
  }

  initialApp(container) {
    this.render.renderApp(container);
  }

  createStreams() {
    this.streams.actions.stream$ = new Subject();
    this.streams.mouseDown.stream$ = fromEvent(document, 'mousedown').pipe(
      throttleTime(100),
    );
    this.streams.mouseMove.stream$ = fromEvent(document, 'mousemove').pipe(
      throttleTime(50),
    );
    this.streams.scroll.stream$ = merge(
      fromEvent(document, 'scroll'),
      fromEvent(this.render.dashboard.projects, 'scroll'),
    ).pipe(throttleTime(100));
    this.streams.mouseUp.stream$ = fromEvent(document, 'mouseup').pipe(
      throttleTime(100),
    );

    this.streams.keyUpModalProject.stream$ = fromEvent(
      this.render.modal.project.container,
      'keyup',
    ).pipe(debounceTime(100));

    this.streams.inputsModalProjectName.stream$ = fromEvent(
      this.render.modal.project.name,
      'input',
    ).pipe(debounceTime(100));

    this.streams.clicksDashboard.stream$ = fromEvent(
      this.render.dashboard.projects,
      'click',
    ).pipe(
      throttleTime(100),
      pluck('target'),
      filter((event) => event.dataset.name),
    );

    this.streams.clicksCreatePanel.stream$ = fromEvent(
      this.render.dashboard.createPanel,
      'click',
    ).pipe(throttleTime(100), pluck('target'));

    this.streams.clicksModalConfirmButtons.stream$ = merge(
      fromEvent(this.render.modal.confirm.buttons.ok, 'click'),
      fromEvent(this.render.modal.confirm.buttons.cancel, 'click'),
    ).pipe(throttleTime(100), pluck('target'));

    this.streams.clicksModalProjectButtons.stream$ = merge(
      fromEvent(this.render.modal.project.buttons.save, 'click'),
      fromEvent(this.render.modal.project.buttons.cancel, 'click'),
    ).pipe(throttleTime(100), pluck('target'));

    this.streams.clicksModalOuterBody.stream$ = fromEvent(
      this.render.modal.container,
      'pointerdown',
    ).pipe(
      throttleTime(100),
      pluck('target'),
      filter((event) => event.dataset.outerBody),
    );
  }

  updateDashboard(state) {
    try {
      const { projects } = state;

      this.render.clearDashboard();
      this.render.updateDashboard(projects);
    } catch (err) {
      console.log(`Что-то пошло не так: ${err}`);
    }
  }

  subscribeToStream(stream, subscription) {
    try {
      const targetStream = this.streams[stream];
      const newSubscription = targetStream.stream$.subscribe({
        next: subscription,
      });

      targetStream.subscriptions.add(newSubscription);
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
    this.subscribeToStream('mouseDown', this.onMouseDown.bind(this));
    this.subscribeToStream('mouseUp', this.onMouseUp.bind(this));

    this.subscribeToStream(
      'clicksDashboard',
      this.onClickToDashboard.bind(this),
    );
    this.subscribeToStream(
      'clicksCreatePanel',
      this.onClickToCreatePanel.bind(this),
    );

    this.subscribeToStream(
      'keyUpModalProject',
      this.onKeyUpModalProject.bind(this),
    );
    this.subscribeToStream(
      'inputsModalProjectName',
      this.onInputModalProjectName.bind(this),
    );

    this.subscribeToStream(
      'clicksModalConfirmButtons',
      this.onClickToModalConfirm.bind(this),
    );
    this.subscribeToStream(
      'clicksModalProjectButtons',
      this.onClickToModalProject.bind(this),
    );
    this.subscribeToStream(
      'clicksModalOuterBody',
      this.onClicksModalOuterBody.bind(this),
    );
  }

  onMouseDown(event) {
    this.clearMovingStartTimer();
    const targetProject = event.target.closest(`li.project-li`);
    if (targetProject) {
      this.movingTimerClick = setTimeout(
        this.startMovingProject.bind(this, targetProject, event),
        250,
      );
    }
  }

  onMouseMove(event) {
    this.moving.updateLastPositionMouse(event.pageX, event.pageY);
    if (this.moving.activeMoving) {
      this.movingProject(event);
    }
  }

  onScroll(event) {
    if (this.moving.activeMoving) {
      this.movingProjectByScroll(event);
    }
  }

  onMouseUp() {
    this.clearMovingStartTimer();
    if (this.moving.activeMoving) {
      this.finishMovingProject();
    }
  }

  onKeyUpModalProject(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (this.chekAvailableData()) {
        this.createEventSaveNewProject();
        this.render.hideModalProject();
      }
    }
  }

  onInputModalProjectName() {
    this.chekAvailableData();
  }

  onClickToCreatePanel() {
    this.render.showModalProject();
  }

  onClickToDashboard(target) {
    if (target.dataset.name === 'archivation') {
      this.render.showModalConfirm(target.dataset.id);
    }

    if (target.dataset.name === 'name') {
      this.createEventActivationProject(target.dataset.id);
    }
  }

  onClickToModalConfirm(target) {
    if (target.dataset.name === VARIABLE.BUTTONS.CANCEL.name) {
      this.render.hideModalConfirm();
      return;
    }
    if (target.dataset.name === VARIABLE.BUTTONS.CONFIRM.name) {
      const projectId = target.dataset.id;
      this.createEventArchivationProject(projectId);
      return;
    }
  }

  onClickToModalProject(button) {
    if (button.dataset.name === VARIABLE.BUTTONS.CANCEL.name) {
      this.render.hideModalProject();
    }
    if (button.dataset.name === VARIABLE.BUTTONS.SAVE.name) {
      if (this.chekAvailableData()) {
        this.createEventSaveNewProject();
        this.render.hideModalProject();
      }
    }
  }

  onClicksModalOuterBody() {
    this.render.hideModalProject();
    this.render.hideModalConfirm();
  }

  clearMovingStartTimer() {
    if (this.movingTimerClick) {
      clearTimeout(this.movingTimerClick);
      this.movingTimerClick = null;
    }
  }

  chekAvailableData() {
    const projectName = this.render.getNameNewProject();

    if (projectName.length < 3) {
      this.render.showModalProjectError('Слишком короткое название проекта');
      return false;
    }

    this.render.hideModalProjectError();
    return true;
  }

  createEventActivationProject(id) {
    const event = {
      target: `dashboard`,
      action: `activation`,
      data: {
        projectId: Number(id),
      },
    };

    this.addEventToStream(`actions`, event);
  }

  createEventSortingProjects(projectId, newPosition) {
    const event = {
      target: `dashboard`,
      action: `sorting`,
      data: {
        projectId: Number(projectId),
        newPosition,
      },
    };
    this.addEventToStream(`actions`, event);
  }

  createEventArchivationProject(id) {
    const event = {
      target: 'dashboard',
      action: 'archivation',
      data: {
        projectId: Number(id),
      },
    };
    this.addEventToStream('actions', event);
    this.render.hideModalConfirm();
  }

  createEventSaveNewProject() {
    const nameProject = this.render.getNameNewProject();

    if (nameProject.length < 3) {
      return;
    }

    const project = new Project(nameProject);
    const event = {
      target: 'dashboard',
      action: 'add',
      data: {
        project,
      },
    };

    this.addEventToStream('actions', event);
  }

  startMovingProject(project, event) {
    this.subscribeToStream('mouseMove', this.onMouseMove.bind(this));
    // this.subscribeToStream('scroll', this.onScroll.bind(this));

    document.body.classList.add('blocked-for-moving');

    const projectCoords = project.getBoundingClientRect();
    const positionProject = this.render.getPositionProjectFromList(project);

    const item = {
      clientX: projectCoords.left,
      clientY: projectCoords.top,
      width: projectCoords.width,
      height: projectCoords.height,
      position: positionProject,
      scrollX: window.pageXOffset,
      scrollY: window.pageYOffset,
    };
    const mouse = {
      pageX: event.pageX,
      pageY: event.pageY,
    };

    this.moving.saveCoordsMoving(item, mouse);
    this.moving.createMovingItems(project);
    this.addMovingPpojectToPage();
    this.moving.activeMoving = true;
  }

  addMovingPpojectToPage() {
    this.addMovingItemToPage();
    this.addBlankItemToPage();
  }

  addMovingItemToPage() {
    const positionMouse = {
      pageX: this.moving.coordsMouse.startPageX,
      pageY: this.moving.coordsMouse.startPageY,
    };
    const scrollProject = this.getScrollProjects();

    this.moving.positioningMovingItem(positionMouse, scrollProject);
    document.body.append(this.moving.items.moving);
  }

  addBlankItemToPage() {
    this.moving.items.selected.replaceWith(this.moving.items.blank);
  }

  movingProject({ pageX, pageY }) {
    const position = {
      pageX,
      pageY,
    };
    const scrollItem = this.getScrollProjects();
    this.moving.positioningMovingItem(position, scrollItem);
    const underMouse = {
      x: pageX - scrollItem.scrollX,
      y: pageY - scrollItem.scrollY,
    };

    this.updateListProjectOnPage(underMouse);
  }

  finishMovingProject() {
    document.body.classList.remove('blocked-for-moving');
    this.clearSubscriptionsStream('mouseMove');

    const oldPositionProject = this.moving.startPositionItem;
    const newPosition = this.render.getProjectIndex(this.moving.items.blank);
    const projectId = this.moving.items.selected.dataset.id;
    const newPositionProject = newPosition > -1 ? newPosition : 0;

    if (oldPositionProject !== newPositionProject) {
      this.createEventSortingProjects(projectId, newPositionProject);
    }

    this.moving.addSelectedItemToPage();
    this.moving.clearItems();
    this.moving.clearCoordMoving();
  }

  getScrollProjects() {
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    const scrollItem = {
      scrollX,
      scrollY,
    };
    return scrollItem;
  }

  updateListProjectOnPage({ x, y }) {
    this.moving.hideMovingItem();
    const elementUnderCursor = document.elementFromPoint(x, y);

    if (elementUnderCursor) {
      const arrayProjects = this.render.getListProjectFromPage();
      const dashboardNameBlock = elementUnderCursor.closest(
        `[data-dashboard-name-block]`,
      );

      const blockUnderCursor = dashboardNameBlock
        ? dashboardNameBlock.dataset.dashboardNameBlock
        : null;

      switch (blockUnderCursor) {
        case 'header-block':
          this.updatePageByMouseOverHeaderBlock(arrayProjects);
          break;

        case 'projects-block':
          this.updatePageByMouseOverListProjects(
            arrayProjects,
            elementUnderCursor,
          );
          break;

        case 'create-block':
          this.updatePageByMouseOverCreatePanel(arrayProjects);
          break;
      }
    }
    this.moving.showMovingItem();
  }

  getScrollBottom(elem) {
    const scroll = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

    return scroll;
  }

  clearMovingTimerMove() {
    if (this.movingTimerMove) {
      clearTimeout(this.movingTimerMove);
      this.movingTimerMove = null;
    }
  }

  scrollProjectList(scrolling) {
    this.render.dashboard.projects.scrollBy({
      top: scrolling,
      behavior: 'smooth',
    });
    this.reMoveMouse();
  }

  reMoveMouse() {
    this.clearMovingTimerMove();
    this.movingTimerMove = setTimeout(
      () =>
        document.dispatchEvent(
          new MouseEvent('mousemove', {
            clientX: this.moving.coordsMouse.lastPageX - window.pageXOffset,
            clientY: this.moving.coordsMouse.lastPageY - window.pageYOffset,
          }),
        ),
      100,
    );
  }

  updatePageByMouseOverHeaderBlock(arrayProjects) {
    const scrollTop = this.render.dashboard.projects.scrollTop;
    const firstProject = arrayProjects[0];

    if (scrollTop > 0) {
      const scrolling = -this.moving.startCoordsItem.height;
      this.scrollProjectList(scrolling);
    } else if (firstProject && firstProject.dataset.item !== 'blank') {
      this.render.addProjectToStartList(this.moving.items.blank);
      this.reMoveMouse();
    }
  }

  updatePageByMouseOverListProjects(arrayProjects, elementUnderCursor) {
    const projectUnderCursor = elementUnderCursor.closest(`.project-li`);

    if (!projectUnderCursor) {
      this.render.addProjectToEndList(this.moving.items.blank);
      return;
    }

    if (projectUnderCursor.dataset.item === 'blank') {
      return;
    }

    const indexProject = this.render.getProjectIndex(projectUnderCursor);
    const indexBlankProject = this.render.getProjectIndex(
      this.moving.items.blank,
    );
    const nextElementIndex =
      indexProject > indexBlankProject ? indexProject + 1 : indexProject;
    const nextElement = arrayProjects[nextElementIndex];

    if (!nextElement) {
      this.render.addProjectToEndList(this.moving.items.blank);
      return;
    }

    this.render.addProjectBeforeElement(this.moving.items.blank, nextElement);
  }

  updatePageByMouseOverCreatePanel(arrayProjects) {
    const scrollBottom = this.getScrollBottom(this.render.dashboard.projects);
    const countProjectsToList = arrayProjects.length;
    const lastProject = arrayProjects[countProjectsToList - 1];

    if (scrollBottom > 0) {
      const scrolling = this.moving.startCoordsItem.height;
      this.scrollProjectList(scrolling);
    } else if (lastProject && lastProject.dataset.item !== `blank`) {
      this.render.addProjectToEndList(this.moving.items.blank);
      this.reMoveMouse();
    }
  }
}
