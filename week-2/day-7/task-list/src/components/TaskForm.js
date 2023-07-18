import React, { useState, useEffect } from 'react';
import { Task } from '../models/task';

export default function TaskForm(props) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (props.taskToEdit) {
      setTask(props.taskToEdit.task);
      setDescription(props.taskToEdit.description);
      setDate(props.taskToEdit.date);
    }
  }, [props.taskToEdit]);

  function onTaskFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let newTask = new Task(task, description, date);
    props.onTaskCreated(newTask);

    clearInputs();
  }

  function isValid() {
    return task !== '' && description !== '' && date !== '';
  }

  function clearInputs() {
    setTask('');
    setDescription('');
    setDate('');
  }

  return (
    <div>
      <h1>To Do List</h1>

      <form id="form" onSubmit={onTaskFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            id="task-input"
            type="text"
            className="form-control"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            id="description-input"
            type="text"
            className="form-control"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            id="date-input"
            type="text"
            className="form-control"
            placeholder="Enter Due Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.taskToEdit ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>
    </div>
  );
}
