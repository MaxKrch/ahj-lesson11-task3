import ProjectElement from './ProjectElement';
import VARIABLE from './VARIABLE.js';

export default class Render {
  constructor() {
    this.container = null;
    this.header = null;
    this.dashboard = {
      container: null,
      header: null,
      projects: null,
      createPanel: null,
    };
    this.modal = {
      container: null,
      confirm: {
        container: null,
        title: null,
        main: {
          container: null,
          descr: null,
          question: null,
        },
        buttons: {
          container: null,
          ok: null,
          cancel: null,
        },
      },
      project: {
        container: null,
        name: null,
        error: null,
        buttons: {
          container: null,
          save: null,
          cancel: null,
        },
      },
    };
    this.movingItem = {
      selected: null,
      moving: null,
      blank: null,
    };
    this.top = null;
  }

  renderApp(container) {
    this.container = document.querySelector(container);

    this.header = this.createHeader();
    this.dashboard.container = this.createDashboard();
    this.modal.container = this.createModal();

    this.container.append(
      this.header,
      this.dashboard.container,
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

  createDashboard() {
    const dashboard = document.createElement(`section`);
    dashboard.classList.add(`widget-container`, `widget-body`);

    this.dashboard.header = this.createDashboardHeader();
    this.dashboard.projects = this.createDashboardListProjects();
    this.dashboard.createPanel = this.createDashboardCreatePanel();

    dashboard.append(
      this.dashboard.header,
      this.dashboard.projects,
      this.dashboard.createPanel,
    );

    return dashboard;
  }

  createModal() {
    const modal = document.createElement(`aside`);
    modal.classList.add(`widget-modal`, `hidden-item`);
    modal.dataset.outerBody = true;

    this.modal.confirm.container = this.createModalConfirm();
    this.modal.project.container = this.createModalProject();

    modal.append(this.modal.confirm.container, this.modal.project.container);

    return modal;
  }

  createHeaderTitle() {
    const title = document.createElement('h2');
    title.classList.add(`widget-title`, `dashboard-title`);
    title.textContent = 'Dashboard';

    return title;
  }

  createDashboardHeader() {
    const dashboardHeader = document.createElement('div');
    dashboardHeader.classList.add(
      `widget-row`,
      `dashboard-row`,
      `widget-body-title`,
      `dashboard-body-header`,
    );
    dashboardHeader.dataset.dashboardNameBlock = `header-block`;

    const title = this.createDashboardHeaderElement('title', 'Project');
    const status = this.createDashboardHeaderElement('status', 'Open');
    const action = this.createDashboardHeaderElement('action', 'Archive');

    dashboardHeader.append(title, status, action);

    return dashboardHeader;
  }

  createDashboardListProjects() {
    const listProjects = document.createElement(`ul`);
    listProjects.classList.add(`widget-list`, `dashboard-projects`);
    listProjects.dataset.dashboardNameBlock = `projects-block`;

    return listProjects;
  }

  createDashboardCreatePanel() {
    const createPanel = document.createElement('div');
    createPanel.classList.add(
      `widget-row`,
      `widget-panel-new`,
      `dashboard-new-project`,
    );
    createPanel.dataset.dashboardNameBlock = 'create-block';
    createPanel.textContent = 'New Project';

    return createPanel;
  }

  createModalConfirm() {
    const modalConfirm = document.createElement(`section`);
    modalConfirm.classList.add(`widget-modal-container`, `hidden-item`);

    this.modal.confirm.title = this.createModalConfirmTitle();
    this.modal.confirm.main.container = this.createModalConfirmMainBlock();
    this.modal.confirm.buttons.container = this.createModalConfirmButtonBlock();

    modalConfirm.append(
      this.modal.confirm.title,
      this.modal.confirm.main.container,
      this.modal.confirm.buttons.container,
    );

    return modalConfirm;
  }

  createModalProject() {
    const modalProject = document.createElement(`section`);
    modalProject.classList.add(`widget-modal-container`, `hidden-item`);

    this.modal.project.name = this.createModalProjectName();
    this.modal.project.error = this.createModalProjectError();
    this.modal.project.buttons.container = this.createModalProjectButtonBlock();

    modalProject.append(
      this.modal.project.name,
      this.modal.project.error,
      this.modal.project.buttons.container,
    );

    return modalProject;
  }

  createModalConfirmTitle() {
    const title = document.createElement('header');
    title.classList.add(`widget-modal-confirm-header`);

    return title;
  }

  createModalConfirmMainBlock() {
    const modalMain = document.createElement(`main`);
    modalMain.classList.add(`widget-modal-confirm-main`);

    this.modal.confirm.descr = this.createModalConfirmMainElement(`descr`);
    this.modal.confirm.question =
      this.createModalConfirmMainElement(`question`);

    modalMain.append(this.modal.confirm.descr, this.modal.confirm.question);

    return modalMain;
  }

  createModalConfirmButtonBlock() {
    const confirmButtons = document.createElement(`div`);
    confirmButtons.classList.add(
      `widget-modal-buttons`,
      `widget-modal-confirm-buttons`,
    );

    this.modal.confirm.buttons.ok = this.createModalConfirmButton(
      VARIABLE.BUTTONS.CONFIRM,
    );
    this.modal.confirm.buttons.cancel = this.createModalConfirmButton(
      VARIABLE.BUTTONS.CANCEL,
    );

    confirmButtons.append(
      this.modal.confirm.buttons.ok,
      this.modal.confirm.buttons.cancel,
    );

    return confirmButtons;
  }

  createModalProjectName() {
    const projectName = document.createElement('input');
    projectName.classList.add(
      `widget-modal-input`,
      `widget-modal-project-name`,
    );
    projectName.setAttribute(`placeholder`, `Name New Project`);

    return projectName;
  }

  createModalProjectError() {
    const projectError = document.createElement('div');
    projectError.classList.add(`widget-error`, `widget-modal-project-error`);

    return projectError;
  }

  createModalProjectButtonBlock() {
    const projectButtons = document.createElement(`div`);
    projectButtons.classList.add(
      `widget-modal-buttons`,
      `widget-modal-project-buttons`,
    );

    this.modal.project.buttons.save = this.createModalProjectButton(
      VARIABLE.BUTTONS.SAVE,
    );
    this.modal.project.buttons.cancel = this.createModalProjectButton(
      VARIABLE.BUTTONS.CANCEL,
    );

    projectButtons.append(
      this.modal.project.buttons.save,
      this.modal.project.buttons.cancel,
    );

    return projectButtons;
  }

  createModalConfirmMainElement(name) {
    const element = document.createElement(`div`);
    element.classList.add(`widget-modal-confirm-${name}`);

    return element;
  }

  createModalConfirmButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(
      `button`,
      `widget-modal-button`,
      `widget-modal-confirm-button-${button.name}`,
    );
    buttonElement.dataset.name = button.name;
    buttonElement.textContent = button.descr;

    return buttonElement;
  }

  createModalProjectButton(button) {
    const buttonElement = document.createElement(`button`);
    buttonElement.classList.add(
      `button`,
      `widget-modal-button`,
      `widget-modal-project-button-${button.name}`,
    );
    if (button.name === 'save') {
      buttonElement.classList.add(`disable-button`);
    }
    buttonElement.textContent = button.descr;
    buttonElement.dataset.name = button.name;

    return buttonElement;
  }

  createDashboardHeaderElement(type, descr) {
    const elementHeader = document.createElement('div');
    elementHeader.classList.add(`dashboard-body-header-${type}`);
    elementHeader.textContent = descr;

    return elementHeader;
  }

  addProjectToStartList(project) {
    this.dashboard.projects.prepend(project);
  }

  addProjectToEndList(project) {
    this.dashboard.projects.append(project);
  }

  addProjectBeforeElement(project, nextElement) {
    this.dashboard.projects.insertBefore(project, nextElement);
  }

  createProjectElement(project) {
    return new ProjectElement(project);
  }

  clearDashboard() {
    this.dashboard.projects.innerHTML = null;
  }

  updateDashboard(projects) {
    const projectElements = [];

    projects.forEach((project) => {
      if (project.archived === true) {
        return;
      }
      const projectElement = this.createProjectElement(project);
      projectElements.push(projectElement);
    });

    this.dashboard.projects.append(...projectElements);
  }

  setModalProjectName(text = '') {
    this.modal.project.name.value = text;
  }

  getModalConfirmField(field) {
    const targetField = this.modal.confirm[field];

    if (!targetField) {
      return;
    }

    return targetField.textContent;
  }

  setModalConfirmField(field, value) {
    const targetField = this.modal.confirm[field];

    if (!targetField) {
      return;
    }

    targetField.textContent = value;
  }

  setIdProjectToModalConfirm(id) {
    this.modal.confirm.container.dataset.id = id;
    this.modal.confirm.buttons.ok.dataset.id = id;
  }

  getProjectNameById(id) {
    const project = this.dashboard.projects.querySelector(
      `.project-name[data-id="${id}"]`,
    );
    return project.textContent;
  }

  getProjectIndex(project) {
    const projectsArray = this.getListProjectFromPage();
    const index = projectsArray.indexOf(project);

    return index;
  }

  getNameNewProject() {
    const nameNewProject = this.modal.project.name.value.trim();
    return nameNewProject;
  }

  getPositionProjectFromList(project) {
    const projectsEl = this.dashboard.projects.querySelectorAll(`li[data-id]`);
    const projectsArray = Array.from(projectsEl);
    const position = projectsArray.indexOf(project);
    return position;
  }

  getListProjectFromPage() {
    const projectList = this.dashboard.projects.querySelectorAll(`.project-li`);
    const projectArray = Array.from(projectList);

    return projectArray;
  }

  showModalProject() {
    this.hideModalConfirm();
    this.hideModalProject();
    this.clearModalProject();

    this.showModalSection();
    this.disActivationModalProjectSaveButton();

    this.modal.project.container.classList.remove('hidden-item');
  }

  showModalConfirm(projectId) {
    this.hideModalProject();
    this.hideModalConfirm();
    this.clearModalConfirm();

    this.setIdProjectToModalConfirm(projectId);

    const projectName = this.getProjectNameById(projectId);
    this.setModalConfirmField('title', `${projectName}`);
    this.setModalConfirmField(
      'descr',
      'После архивации проект станет недоступен',
    );
    this.setModalConfirmField('question', 'Продолжить?');

    this.showModalSection();
    this.modal.confirm.container.classList.remove('hidden-item');
  }

  showModalSection() {
    this.top = window.scrollY;
    this.modal.container.classList.remove('hidden-item');
    this.scrollTop();
  }

  hideModalProject() {
    this.hideModalSection();
    this.clearModalProject();
    this.hideModalProjectError();
    this.modal.project.container.classList.add('hidden-item');
  }

  hideModalConfirm() {
    this.hideModalSection();
    this.clearModalConfirm();
    this.setIdProjectToModalConfirm(null);
    this.modal.confirm.container.classList.add('hidden-item');
  }

  hideModalSection() {
    this.modal.container.classList.add('hidden-item');
    this.scrollTop(this.top);
  }

  clearModalProject() {
    this.setModalProjectName();
  }

  clearModalConfirm() {
    this.setModalConfirmField('title', '');
    this.setModalConfirmField('descr', '');
    this.setModalConfirmField('question', '');
  }

  showModalProjectError(error) {
    this.modal.project.error.textContent = error;
    this.disActivationModalProjectSaveButton();
  }

  hideModalProjectError() {
    this.modal.project.error.textContent = '';
    this.activationModalProjectSaveButton();
  }

  activationModalProjectSaveButton() {
    this.modal.project.buttons.save.classList.remove('disable-button');
  }

  disActivationModalProjectSaveButton() {
    this.modal.project.buttons.save.classList.add('disable-button');
  }

  scrollTop(value) {
    const top = value || 0;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
