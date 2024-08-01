import { saveStorage, loadStorage } from './RESTStorage';
import OPTIONS from '../state/INIT_OPTIONS.js';

export default function updatingState(oldState, newData) {
  const { target, action, data } = newData;
  if (!target) {
    return oldState;
  }

  switch (target) {
    case 'state':
      return changeState(action, oldState);

    case 'dashboard':
      return changeDashboard(action, oldState, data);

    case 'project':
      return changeProject(action, oldState, data);

    default:
      return oldState;
  }
}

const changeState = (action, oldState) => {
  switch (action) {
    case 'save':
      saveStorage(oldState);
      return oldState;

    case 'load':
      return loadStorage();

    case 'clear':
      return OPTIONS.STATE;

    default:
      return oldState;
  }
};

const changeDashboard = (action, oldState, data) => {
  switch (action) {
    case 'add':
      return addNewProject(oldState, data);

    case 'sorting':
      return sortingProjects(oldState, data);

    case 'activation':
      return activationProject(oldState, data);

    case 'archivation':
      return archivationProject(oldState, data);

    default:
      return oldState;
  }
};

const changeProject = (action, oldState, data) => {
  switch (action) {
    case 'add':
      return addNewTask(oldState, data);

    case 'changeStatus':
      return updatingStatusTask(oldState, data);

    case 'changeVisibleDescription':
      return updatingVisibleDescr(oldState, data);

    default:
      return oldState;
  }
};

const addNewProject = (state, { project }) => {
  if (!project) {
    return state;
  }

  const newState = cloningState(state);
  project.id = newState.nextId;
  newState.nextId += 1;
  newState.projects.add(project);

  return newState;
};

const sortingProjects = (state, { projectId, newPosition }) => {
  if (Number.isNaN(newPosition)) {
    return state;
  }

  const clonedState = cloningState(state);
  const nextId = clonedState.nextId;
  const arrayProjects = [...clonedState.projects];

  const project = arrayProjects.find((item) => {
    return item.id === projectId;
  });
  const oldIndex = arrayProjects.indexOf(project);

  arrayProjects.splice(oldIndex, 1);
  arrayProjects.splice(newPosition, 0, project);

  const newState = {
    nextId,
    projects: new Set(arrayProjects),
  };

  return newState;
};

const activationProject = (state, { projectId }) => {
  const newState = cloningState(state);
  const arrayProjects = [...newState.projects];

  arrayProjects.forEach((item) => {
    if (item.id === projectId) {
      item.actived = true;
      return;
    }
    item.actived = false;
  });
  newState.projects = new Set(arrayProjects);

  return newState;
};

const archivationProject = (state, { projectId }) => {
  const newState = cloningState(state);
  const arrayProjects = [...newState.projects];

  arrayProjects.forEach((item) => {
    if (item.id === projectId) {
      item.archived = true;
      item.actived = false;
    }
  });
  newState.projects = new Set(arrayProjects);

  return newState;
};

const addNewTask = (state, { projectId, task }) => {
  if (!task) {
    return state;
  }

  const newState = cloningState(state);
  const newTask = {
    id: newState.nextId,
    project: projectId,
    done: false,
    visibleDescr: false,
    title: task.title,
    descr: task.descr,
  };

  newState.nextId += 1;
  newState.projects.forEach((project) => {
    if (Number(project.id) === Number(projectId)) {
      project.tasks.add(newTask);
    }
  });

  return newState;
};

const updatingStatusTask = (state, { projectId, id, done }) => {
  let newDone = false;
  if (done === false || done === 'false') {
    newDone = true;
  }

  const newState = cloningState(state);
  newState.projects.forEach((project) => {
    if (project.id === Number(projectId)) {
      project.tasks.forEach((task) => {
        if (task.id === Number(id)) {
          task.done = newDone;
        }
      });

      const sortedTasks = sortingTasks(project.tasks);
      project.tasks = sortedTasks;
    }
  });

  return newState;
};

const updatingVisibleDescr = (state, { projectId, id, visibleDescr }) => {
  let newVisibleDescr = false;
  if (visibleDescr === false || visibleDescr === 'false') {
    newVisibleDescr = true;
  }

  const newState = cloningState(state);
  newState.projects.forEach((project) => {
    if (project.id === Number(projectId)) {
      project.tasks.forEach((task) => {
        task.visibleDescr = task.id === Number(id) ? newVisibleDescr : false;
      });
    }
  });

  return newState;
};

const cloningState = (state) => {
  try {
    const clonedState = {};
    const arrayProjects = [...state.projects];
    const clonedStateProjects = arrayProjects.map((project) => {
      return {
        name: project.name,
        id: project.id,
        archived: project.archived,
        actived: project.actived,
        tasks: new Set([...project.tasks]),
      };
    });

    clonedState.nextId =
      state.nextId || getNextId(clonedStateProjects) || OPTIONS.STATE.nextId;
    clonedState.projects = new Set(clonedStateProjects);

    return clonedState;
  } catch (err) {
    console.log(`Не смог клонировтаь state: ${err}`);

    return state;
  }
};

const cloningData = (data) => {
  const arrayTasks = Array.from(data);
  const clonedData = JSON.parse(JSON.stringify(arrayTasks));

  return clonedData;
};

const sortingTasks = (tasks) => {
  const clonedTasks = cloningData(tasks);

  const arrayTasks = [...clonedTasks];

  const doneTasks = [];
  const activeTasks = [];

  arrayTasks.forEach((task) => {
    if (task.done === true) {
      doneTasks.push(task);
      return;
    }

    activeTasks.unshift(task);
  });

  const sortedTaskArray = [...activeTasks, ...doneTasks];
  const sortedTasks = new Set(sortedTaskArray);

  return sortedTasks;
};

const getNextId = (projects) => {
  const maxProjectId = projects.reduce((maxId, project) => {
    if (Number(project.id) > maxId) {
      maxId = Number(project.id);
    }
    return maxId;
  }, 0);

  const maxTaskIds = projects.map((project) => {
    const arrayTasks = Array.from(project.tasks);
    const maxTaskId = arrayTasks.reduce((maxId, task) => {
      if (Number(task.id) > maxId) {
        maxId = Number(task.id);
      }
      return maxId;
    }, 0);
    return maxTaskId;
  });

  const maxId = Math.max(maxProjectId, ...maxTaskIds);
  const nextId = maxId + 1;

  return nextId;
};
