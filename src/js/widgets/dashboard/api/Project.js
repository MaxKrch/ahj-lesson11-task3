export default class Project {
  constructor(name, id = null) {
    this.id = id;
    this.name = name;
    this.archived = false;
    this.actived = false;
    this.tasks = new Set();
  }
}
