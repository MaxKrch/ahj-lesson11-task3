const OPTIONS = {
  CONTAINERS: {
    app: '#app',
    dashboard: '#dashboard',
    project: '#project',
  },
  STATE: {
    nextId: 0,
    projects: new Set(),
  },
  STORAGE: {
    name: 'stateManager',
  },
};

export default OPTIONS;
