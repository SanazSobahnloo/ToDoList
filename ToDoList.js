//Variables
const newTask = document.querySelector("#new-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const removeCompleteBtn = document.querySelector(".remove-complete-btn");
const taskList = document.querySelector(".task-list");
const taskTemplate = document.querySelector("#task-template");
let id = 1;
//On Enter
newTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && inputValid()) {
    addTask();
  }
});
//On Clicking the button
addTaskBtn.addEventListener("click", () => {
  if (inputValid()) {
    addTask();
  }
});
//Removing the completed items from the list
removeCompleteBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) {
      task.remove();
    }
  });
});
//Adding tasks to the listtttt
function addTask() {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = id;
  const label = taskElement.querySelector("label");
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = "";
  id++;
}
//tried to write a complex authentication :(((
function inputValid() {
  return newTask.value !== "";
}
