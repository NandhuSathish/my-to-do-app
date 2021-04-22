//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//event listners
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteMark);

//functions
function addtodo(event) {
  event.preventDefault();
  //   tododiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check button
  const checkButton = document.createElement("button");
  checkButton.classList.add("check-btn");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(checkButton);
  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(deleteButton);
  //adding the new todo element to todolist li
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteMark(event) {
  const item = event.target;
  //delete
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  //check
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
