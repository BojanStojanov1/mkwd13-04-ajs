import { Todo } from "./src/todo.model.js";

console.log("todo main script");

const app = () => {
  //Selectors
  const todoListEl = document.querySelector(".todo-list");
  const todoTextInput = document.querySelector("#todoText");
  const todoPriorityInput = document.querySelector("#todoPriority");
  const todoFormEl = document.querySelector(".todo-form");
  const submitBtn = document.querySelector("#submitBtn");

  //Data Variables
  let todoList = [
    new Todo("First One", "low"),
    new Todo("Second One", "medium"),
  ];

  let editTodoId = "";

  //Functions
  const renderTodos = element => {
    element.innerHTML = "";

    todoList.forEach(todo => {
      //1. Create an html element
      const todoEl = document.createElement("li");
      todoEl.classList.add("todo", todo.priority);

      if (todo.isFinished) todoEl.classList.add("finished");
      //2. Update the innerHTML of that element
      todoEl.innerHTML = `
          <span class="todo-priority">
             <strong>${todo.priority[0].toUpperCase()}</strong>
             ${todo.text}
          </span>
          <span>
             <button id="edit-${todo.id}">
                <i class="fa-solid fa-pen-to-square"></i>
             </button>
             <button id="${todo.isFinished ? "delete" : "finish"}-${todo.id}">
                <i class="fa-solid ${
                  todo.isFinished ? "fa-trash" : "fa-check"
                }"></i>
             </button>
           </span>`;
      //3. Append that element to the parent element

      addTodoListener(todo, todoEl);

      element.appendChild(todoEl);
    });
  };

  const addTodoListener = (todo, todoEl) => {
    todoEl.addEventListener("click", event => {
      if (event.target.id.includes("finish")) todo.finishTodo();

      if (event.target.id.includes("delete"))
        todoList = todoList.filter(t => t.id !== todo.id);

      if (event.target.id.includes("edit")) onEditTodo(todo);

      renderTodos(todoListEl);
    });
  };

  const onEditTodo = todo => {
    todoTextInput.value = todo.text;
    todoPriorityInput.value = todo.priority;
    submitBtn.innerText = "Update";
    editTodoId = todo.id;
  };

  //Listeners
  todoFormEl.addEventListener("submit", event => {
    // Prevents default behavior of a specific event
    // Here on submit it prevents a refresh when the event fire
    event.preventDefault();

    //Get values from the inputs
    const todoText = todoTextInput.value;
    const todoPriority = todoPriorityInput.value;

    if (!editTodoId) {
      const newTodo = new Todo(todoText, todoPriority);
      todoList.push(newTodo);
    } else {
      //Update the todo that we are editing in the todo list
      todoList.forEach(todo => {
        if (todo.id === editTodoId) {
          todo.updateTodo(todoText, todoPriority);
        }
      });

      editTodoId = "";
      submitBtn.innerText = "Add";
    }

    renderTodos(todoListEl);

    todoFormEl.reset();
  });

  renderTodos(todoListEl);
};

app();
