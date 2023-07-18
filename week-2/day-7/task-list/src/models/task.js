export class Task {
    constructor(task, description, date) {
      this.task = task;
      this.description = description;
      this.date = date;
    }
  
    static fromJSON(json) {
      return new Task(json.task, json.description, json.date);
    }
  }
  