// TaskTable.js
import React from 'react';

export default function TaskTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task) => {
            return (
              <tr key={task.date}>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => props.onTaskDelete(task)}
                  >
                    Complete Task
                  </button>
                  <button
                    className="btn btn-warning btn-sm ms-1"
                    onClick={() => props.onTaskEdit(task)}
                  >
                    Edit Task
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
