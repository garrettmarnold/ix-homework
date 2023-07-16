document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-task");
    const taskNameInput = document.getElementById("task-name");
    const taskDescriptionInput =
      document.getElementById("task-description");
    const taskListDiv = document.getElementById("task-list");

    const data = [];

    addTaskButton.addEventListener("click", function () {
      const taskName = taskNameInput.value;
      const taskDescription = taskDescriptionInput.value;

      const task = {
        taskName: taskName,
        taskDescription: taskDescription,
      };

      data.push(task);

      let taskListHTML = "";
      data.forEach(function (task) {
        taskListHTML += `<p>${task.taskName}: ${task.taskDescription}</p>`;
      });

      taskListDiv.innerHTML = taskListHTML;
    });
  });