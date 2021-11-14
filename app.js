const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-list");
  const li = document.createElement("li");
  li.innerText = todoInput.value;

  li.classList.add("todo-item");
  todoDiv.appendChild(li);
  todoInput.value = "";
  todoList.appendChild(todoDiv);
}

function getTodos() {
  let todos;
}

function saveTodos() {
  let todos;
}
