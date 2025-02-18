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
  let todos = [];

  let editTodoId = "";

  console.log(todos);

  //Functions
  const renderTodos = element => {
    console.log(todos);

    element.innerHTML = "";

    todos.forEach(todo => {
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

      todoEl.addEventListener("click", event => {
        console.log(event.target.id);

        if (event.target.id.includes("finish")) todo.finishTodo();

        if (event.target.id.includes("delete")) {
          todos = todos.filter(t => t.id !== todo.id);
          console.log(todos);
        }

        if (event.target.id.includes("edit")) {
          onEditTodo(todo);
        }

        renderTodos(todos, todoListEl);
      });

      addListener(todo, todoEl);

      element.appendChild(todoEl);
    });
  };

  const addListener = (todo, todoEl) => {
    todoEl.addEventListener("click", event => {
      console.log(event.target.id);

      if (event.target.id.includes("finish")) todo.finishTodo();

      if (event.target.id.includes("delete")) {
        todos = todos.filter(t => t.id !== todo.id);
        console.log(todos);
      }

      if (event.target.id.includes("edit")) {
        onEditTodo(todo);
      }

      renderTodos(todos, todoListEl);
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
      todos.push(newTodo);
    } else {
      //Update the todo that we are editing in the todo list
      todos.forEach(todo => {
        if (todo.id === editTodoId) {
          todo.updateTodo(todoText, todoPriority);
        }
      });

      editTodoId = "";
      submitBtn.innerText = "Add";
    }

    console.log(todos);

    renderTodos(todoListEl);

    todoFormEl.reset();
  });

  renderTodos(todoListEl);
};

app();
