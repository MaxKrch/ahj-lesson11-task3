import TaskElement from './TaskElement';
import VARIABLE from './VARIABLE.js';

export default class Render {
  constructor() {
    this.container = null;
    this.header = null;
    this.project = {
      container: null,
      header: {
        container: null,
        title: null,
        name: null,
      },
      tasks: null,
      error: null,
      createPanel: null,
    };
    this.modal = {
      container: null,
      task: {
        container: null,
        project: null,
        title: null,
        error: null,
        descr: null,
        buttons: {
          container: null,
          save: null,
          cancel: null,
        },
      },
    };
    this.top = null;
  }

  renderApp(container) {
    this.container = document.querySelector(container);
    this.header = this.createHeader();
    this.project.container = this.createProject();
    this.modal.container = this.createModal();

    this.container.append(
      this.header,
      this.project.container,
      this.modal.container,
    );
  }

  createHeader() {
    const header = document.createElement(`header`);
    header.classList.add(`widget-container`, `widget-header`);

    const headerTitle = this.createHeaderTitle();
    header.append(headerTitle);

    return header;
  }

  createProject() {
    const project = document.createElement(`section`);
    project.classList.add(`widget-container`, `widget-body`);

    this.project.header.container = this.createProjectHeader();
    this.project.tasks = this.createProjectListTasks();
    this.project.error = this.createProjectError();
    this.project.createPanel = this.createProjectCreatePanel();

    project.append(
      this.project.header.container,
      this.project.tasks,
      this.project.error,
      this.project.createPanel,
    );

    return project;
  }

  createModal() {
    const modal = document.createElement(`aside`);
    modal.classList.add(`widget-modal`, `hidden-item`);
    modal.dataset.outerBody = 'true';

    this.modal.task.container = this.createModalTask();

    modal.append(this.modal.task.container);

    return modal;
  }

  createHeaderTitle() {
    const title = document.createElement(`h2`);
    title.classList.add(`widget-title`);
    title.textContent = `Project`;

    return title;
  }

  createProjectHeader() {
    const header = document.createElement(`div`);
    header.classList.add(
      `widget-row`,
      `widget-body-title`,
      `project-body-header`,
    );

    this.project.header.title = this.createProjectHeaderTitle();
    this.project.header.name = this.createProjectHeaderName();

    header.append(this.project.header.title, this.project.header.name);

    return header;
  }

  createProjectListTasks() {
    const listTasks = document.createElement(`ul`);
    listTasks.classList.add(`widget-list`, `project-list-tasks`);

    return listTasks;
  }

  createProjectError() {
    const projectError = document.createElement('div');
    projectError.classList.add(
      `widget-error`,
      `widget-project-error`,
      `hidden-item`,
    );

    return projectError;
  }

  createProjectCreatePanel() {
    const createPanel = document.createElement(`div`);
    createPanel.classList.add(
      `widget-row`,
      `widget-panel-new`,
      `dashboard-new-task`,
    );
    createPanel.dataset.name = `create`;
    createPanel.dataset.id = null;
    createPanel.textContent = `NewTask`;

    return createPanel;
  }

  createModalTask() {
    const modalTask = document.createElement(`section`);
    modalTask.classList.add(
      `widget-modal-container`,
      `project-modal-task-container`,
      `hidden-item`,
    );

    this.modal.task.project = this.createModalTaskProject();
    this.modal.task.title = this.createModalTaskTitle();
    this.modal.task.error = this.createModalTaskError();
    this.modal.task.descr = this.createModalTaskDescr();
    this.modal.task.buttons.container = this.createModalTaskButtonBlock();

    modalTask.append(
      this.modal.task.project,
      this.modal.task.title,
      this.modal.task.error,
      this.modal.task.descr,
      this.modal.task.buttons.container,
    );

    return modalTask;
  }

  createProjectHeaderTitle() {
    const projectHeaderTitle = document.createElement(`div`);
    projectHeaderTitle.classList.add(`project-body-header-title`);
    projectHeaderTitle.textContent = `Project:`;

    return projectHeaderTitle;
  }

  createProjectHeaderName() {
    const projectHeaderName = document.createElement(`div`);
    projectHeaderName.classList.add(`project-body-header-name`);

    return projectHeaderName;
  }

  createModalTaskProject() {
    const taskProject = document.createElement('p');
    taskProject.classList.add(`widget-modal-task-project`);

    return taskProject;
  }

  createModalTaskTitle() {
    const taskTitle = document.createElement('input');
    taskTitle.classList.add(`widget-modal-input`, `widget-modal-task-title`);
    taskTitle.setAttribute(`placeholder`, `Title new Task`);

    return taskTitle;
  }

  createModalTaskError() {
    const modalTaskError = document.createElement('div');
    modalTaskError.classList.add(`widget-error`, `widget-modal-task-error`);

    return modalTaskError;
  }

  createModalTaskDescr() {
    const taskDescr = document.createElement(`textarea`);
    taskDescr.classList.add(`widget-modal-input`, `widget-modal-task-descr`);
    taskDescr.setAttribute(`placeholder`, `Description new Task`);

    return taskDescr;
  }

  createModalTaskButtonBlock() {
    const taskButtons = document.createElement('div');
    taskButtons.classList.add(
      `widget-modal-buttons`,
      `widget-modal-task-buttons`,
    );

    this.modal.task.buttons.save = this.createModalTaskButton(
      VARIABLE.BUTTONS.SAVE,
    );
    this.modal.task.buttons.cancel = this.createModalTaskButton(
      VARIABLE.BUTTONS.CANCEL,
    );

    taskButtons.append(
      this.modal.task.buttons.save,
      this.modal.task.buttons.cancel,
    );

    return taskButtons;
  }

  createModalTaskButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(
      `button`,
      `widget-modal-button`,
      `widget-modal-task-button-${button.name}`,
    );
    if (button.name === `save`) {
      buttonElement.classList.add(`disable-button`);
    }
    buttonElement.dataset.name = button.name;
    buttonElement.textContent = button.descr;

    return buttonElement;
  }

  set nameProject(value = '') {
    this.project.header.name.textContent = value;
  }

  set idProject(id) {
    this.project.container.dataset.id = id;
    this.project.createPanel.dataset.id = id;
    this.modal.task.buttons.save.dataset.id = id;
  }

  set modalNameProject(value = '') {
    this.modal.task.project.textContent = value;
  }

  activationModalButton(modal, button) {
    const targetModal = this.modal[modal];
    const targetButton = targetModal.buttons[button];

    targetButton.classList.remove('disable-button');
  }

  disActivationModalButton(modal, button) {
    const targetModal = this.modal[modal];
    const targetButton = targetModal.buttons[button];

    targetButton.classList.add('disable-button');
  }

  get modalTaskTitle() {
    const value = this.modal.task.title.value.trim();

    return value;
  }

  set modalTaskTitle(value) {
    this.modal.task.title.value = value;
  }

  get modalTaskDescr() {
    const value = this.modal.task.descr.value.trim();

    return value;
  }

  set modalTaskDescr(value) {
    this.modal.task.descr.value = value;
  }

  showProjectError(text) {
    this.project.container.classList.add(`show-widget-body-error`);
    this.project.error.textContent = text;
    this.project.error.classList.remove('hidden-item');
  }

  hideProjectError() {
    this.project.container.classList.remove(`show-widget-body-error`);
    this.project.error.textContent = '';
    this.project.error.classList.add('hidden-item');
  }

  showModalErrorTitleTask(error) {
    this.modalTaskError = error;
  }

  hideModalErrorTitleTask() {
    this.modalTaskError = '';
  }

  set modalTaskError(error) {
    this.modal.task.error.textContent = error;
  }

  showModalTask({ id, title }) {
    this.showModal();
    this.idProject = id;
    this.modalNameProject = title;

    this.modal.task.container.classList.remove('hidden-item');
  }

  showModal() {
    this.top = window.scrollY;
    this.modal.container.classList.remove('hidden-item');
    this.scrollTop();
  }

  hideModalTask() {
    this.hideModal();

    this.clearModalTask();
    this.modal.task.container.classList.add('hidden-item');
  }

  hideModal() {
    this.modal.container.classList.add('hidden-item');
    this.scrollTop(this.top);
    this.top = null;
  }

  clearModalTask() {
    this.modalNameProject = '';
    this.modalTaskTitle = '';
    this.modalTaskDescr = '';
    this.modalTaskError = '';
    this.disActivationModalButton('task', VARIABLE.BUTTONS.SAVE.name);
  }

  addTaskToPage(data) {
    if (!data || typeof data !== 'object') {
      return;
    }
    const task = this.createTaskElement(data);
    this.project.tasks.append(task);
  }

  createTaskElement(data) {
    return new TaskElement(data);
  }

  clearProject() {
    this.project.tasks.innerHTML = null;
  }

  updateProject(project) {
    if (!project) {
      this.idProject = null;
      this.nameProject = '';
      return;
    }

    const { id, name, tasks } = project;

    this.idProject = id;
    this.nameProject = name;
    this.hideProjectError();

    const tasksElements = [];
    tasks.forEach((task) => {
      const taskElement = this.createTaskElement(task);
      tasksElements.push(taskElement);
    });
    this.clearListTasks();
    this.project.tasks.append(...tasksElements);
  }

  clearListTasks() {
    this.project.tasks.innerHTML = '';
  }

  scrollTop(value) {
    const top = value || 0;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
