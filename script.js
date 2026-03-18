function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  // Toggle complete
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";

  delBtn.onclick = function (e) {
    e.stopPropagation(); // prevent complete toggle
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
