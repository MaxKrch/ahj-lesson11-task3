export default class ProjectElement {
  constructor(project) {
    try {
      const projectElement = this.createProjectElement(project);

      return projectElement;
    } catch (err) {
      console.log(err);

      return false;
    }
  }

  createProjectElement({ id, name, tasks, actived }) {
    const taskArray = [...tasks];
    const tasksAll = taskArray.length;
    const tasksOpen = this.getCountOpenTasks(taskArray);

    const projectElement = this.createWrapElement(id, actived);
    const nameElement = this.createNameElement(id, name);
    const countTasksBlock = this.createCountTasksBlock(tasksAll, tasksOpen);
    const archiveElement = this.createArchiveElement(id);

    projectElement.append(nameElement, countTasksBlock, archiveElement);

    return projectElement;
  }

  createWrapElement(id, actived) {
    const wrapElement = document.createElement('li');
    wrapElement.classList.add(
      `widget-row`,
      `dashboard-row`,
      `widget-list-item`,
      `project-li`,
    );
    if (actived) {
      wrapElement.classList.add(`active-project`);
    }
    wrapElement.dataset.id = id;
    wrapElement.dataset.moving = true;

    return wrapElement;
  }

  createNameElement(id, name) {
    const nameElement = document.createElement('p');
    nameElement.classList.add(`project-name`);
    nameElement.textContent = name;
    nameElement.dataset.name = `name`;
    nameElement.dataset.id = id;

    return nameElement;
  }

  createCountTasksBlock(countAll, countOpen) {
    const countTasksBlock = document.createElement('div');
    countTasksBlock.classList.add(`project-count-task`);
    countTasksBlock.dataset.moving = true;

    const countTasksOpen = this.createCountTasksElement('open', countOpen);
    const countTasksAll = this.createCountTasksElement('all', countAll);

    countTasksBlock.append(countTasksOpen, countTasksAll);

    return countTasksBlock;
  }

  createArchiveElement(id) {
    const archiveElement = document.createElement('p');
    archiveElement.classList.add(`project-archive`);
    archiveElement.innerHTML = `&#10006`;
    archiveElement.dataset.id = id;
    archiveElement.dataset.name = `archivation`;

    return archiveElement;
  }

  createCountTasksElement(type, count) {
    const countTasksElement = document.createElement('span');
    countTasksElement.classList.add(
      `project-count-task-span`,
      `project-count-task-${type}`,
    );

    countTasksElement.textContent = type === 'all' ? ` / ${count}` : count;
    countTasksElement.dataset.moving = true;

    return countTasksElement;
  }

  getCountOpenTasks(tasks) {
    const tasksOpen = tasks.reduce((acc, cur) => {
      if (cur.done === false) {
        acc += 1;
      }
      return acc;
    }, 0);

    return tasksOpen;
  }
}
