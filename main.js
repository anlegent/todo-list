const taskInput = document.querySelector("#taskinput");
const addBtn = document.querySelector("#addbtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
  const name = taskInput.value;

  const createDiv = document.createElement("div");
  createDiv.setAttribute("class", "taskdiv");
  list.appendChild(createDiv);

  const createCheck = document.createElement("input");
  createCheck.setAttribute("type", "checkbox");
  createDiv.appendChild(createCheck);

  const createTask = document.createElement("h2");
  createTask.textContent = name;
  createDiv.appendChild(createTask);

  const createCloseBtn = document.createElement("button");
  createCloseBtn.textContent = "X";
  createDiv.appendChild(createCloseBtn);
});
