export default class TaskElement {
  constructor(task) {
    try {
      const taskElement = this.createTaskElement(task);

      return taskElement;
    } catch (err) {
      console.log(err);

      return false;
    }
  }

  createTaskElement({ id, project, title, descr, visibleDescr, done }) {
    const taskElement = this.createTaskWrap(id, project, visibleDescr, done);
    const statusElement = this.createTaskStatus(done, id, project);
    const titleElement = this.createTaskTitle(title, id, project);
    const descrElement = this.createTaskDescr(descr, visibleDescr, id, project);

    taskElement.append(statusElement, titleElement, descrElement);

    return taskElement;
  }

  createTaskWrap(id, project, visibleDescr, done) {
    const taskWrapElement = document.createElement(`li`);
    taskWrapElement.classList.add(`widget-row`, `widget-list-item`, `task`);
    taskWrapElement.dataset.id = id;
    taskWrapElement.dataset.project = project;
    taskWrapElement.dataset.done = done;
    taskWrapElement.dataset.visibleDescr = visibleDescr;
    taskWrapElement.dataset.name = `task-element`;

    return taskWrapElement;
  }

  createTaskStatus(done) {
    const statusElement = document.createElement(`label`);
    statusElement.classList.add(`task-status`);
    statusElement.dataset.name = `status`;

    const statusIcon = this.createTaskStatusIcon();
    const statusCheck = this.createTaskStatusCheck(done);

    statusElement.append(statusIcon, statusCheck);

    return statusElement;
  }

  createTaskTitle(title, id, project) {
    const titleElement = document.createElement('p');
    titleElement.classList.add(`task-name`);
    titleElement.dataset.id = id;
    titleElement.dataset.project = project;
    titleElement.dataset.name = `title`;
    titleElement.textContent = title;

    return titleElement;
  }

  createTaskDescr(descr, visibleDescr) {
    const descrElement = document.createElement('div');
    descrElement.classList.add(`task-descr`);

    if (!visibleDescr) {
      descrElement.classList.add(`hidden-item`);
    }

    descrElement.textContent = descr;

    return descrElement;
  }

  createTaskStatusIcon() {
    const statusIcon = document.createElement(`p`);
    statusIcon.classList.add(`task-status-icon`);
    statusIcon.innerHTML = `&#10004;`;
    statusIcon.dataset.name = `status-icon`;

    return statusIcon;
  }

  createTaskStatusCheck(done) {
    const statusCheck = document.createElement(`input`);
    statusCheck.classList.add(`task-status-check`, `hidden-item`);
    statusCheck.setAttribute(`type`, `checkbox`);

    if (done) {
      statusCheck.setAttribute(`checked`, `checked`);
    }

    return statusCheck;
  }
}
