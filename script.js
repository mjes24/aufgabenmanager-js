let tasks = [];

function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const task = { text: taskText, done: false };
  tasks.push(task);
  taskInput.value = "";
  displayTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.done ? `✅ ${task.text}` : task.text;
    li.style.cursor = "pointer";
    li.onclick = () => toggleTask(index);
    list.appendChild(li);
  });
}
