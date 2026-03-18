let taskList = document.getElementById("taskList");

// Load tasks when page opens
window.onload = function () {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => createTask(task.text, task.completed));
};

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  createTask(task, false);
  saveTasks();

  input.value = "";
}

function createTask(text, completed) {
  let li = document.createElement("li");
  li.textContent = text;

  if (completed) li.classList.add("completed");

  // Toggle complete
  li.onclick = function () {
    li.classList.toggle("completed");
    saveTasks();
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";

  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
    saveTasks();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
