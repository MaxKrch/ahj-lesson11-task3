import OPTIONS from '../state/INIT_OPTIONS.js';

const saveStorage = (data) => {
  try {
    const dataForSave = transformSetToArray(data);
    const dataJSON = JSON.stringify(dataForSave);
    localStorage.setItem(OPTIONS.STORAGE.name, dataJSON);

    return true;
  } catch (err) {
    console.log(`Что-то пошло не так: ${err}`);

    return false;
  }
};

const loadStorage = () => {
  if (chekStorage() === false) {
    return false;
  }

  const stateJSON = localStorage.getItem(OPTIONS.STORAGE.name);
  const state = JSON.parse(stateJSON);
  const stateWithSets = transformArrayToSet(state);

  return stateWithSets;
};

const chekStorage = () => {
  const state = localStorage.getItem(OPTIONS.STORAGE.name);
  if (state === null) {
    return false;
  }

  return true;
};

const transformSetToArray = (state) => {
  const dataTemp = state || OPTIONS.STATE;
  const newState = {};
  newState.nextId = dataTemp.nextId;
  const arrayProjects = [...dataTemp.projects].map((project) => {
    const newProject = {};
    for (let key in project) {
      if (project[key] instanceof Set) {
        newProject[key] = [...project[key]];
        continue;
      }
      newProject[key] = project[key];
    }

    return newProject;
  });
  newState.projects = arrayProjects;

  return newState;
};

const transformArrayToSet = (state) => {
  const newState = {};
  newState.nextId = state.nextId;

  const projects = state.projects.map((project) => {
    const newProject = {};

    for (let key in project) {
      if (Array.isArray(project[key])) {
        newProject[key] = new Set(project[key]);
        continue;
      }
      newProject[key] = project[key];
    }
    return newProject;
  });
  newState.projects = new Set(projects);

  return newState;
};

export { saveStorage, loadStorage };
