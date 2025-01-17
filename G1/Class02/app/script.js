// Construtor functions (models)
function Todo(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isComplete = false;
}

// GLOBAL VARIABLES
let todoInMemory = {
    todos: [],
    todoIdCounter: 1
};

let form = document.getElementById('add-todo-form');
let content = document.getElementById('content');

// Functions
function createTodo(title, description) {
    let todo = new Todo(todoInMemory.todoIdCounter, title, description);
    todoInMemory.todoIdCounter += 1;
    return todo;
}

function resetInputs(parentElement) {
    let inputs = parentElement.getElementsByTagName('input');
    for (let input of inputs) {
        input.value = '';
    }
}

function getValuesFromInputs(parentElement) {
    let inputs = parentElement.getElementsByTagName('input');
    let inputValues = {};
    for (let input of inputs) {
        inputValues[input.name] = input.value;
    }
    return inputValues;
}

function showHideElement(element, isHiden) {
    // if(isHiden) {
    //     element.style.display = 'none';
    // } else {
    //     element.style.display = 'block';
    // }
    element.style.display = isHiden ? 'none' : 'block';
}

function showTodos(element) {
    let html = '<ol>';
    for (let todo of todoInMemory.todos) {
        let completeBtn = '';
        if (!todo.isComplete) {
            completeBtn = `<button type="button" name="complete" value="${todo.id}">Complete</button>`;
        }

        let li = `
            <li ${todo.isComplete ? 'style="background-color: yellow;"' : ''}>
                <span>${todo.title}</span>
                <span>${todo.description}</span>
                ${completeBtn}
                <button type="button" name="remove" value="${todo.id}">Remove</button>
            </li>
            `;
        html += li;
    }
    html += '</ol>';
    element.innerHTML = html;
}

function completeTodo(id) {
    for (let todo of todoInMemory.todos) {
        if (todo.id === id) {
            todo.isComplete = true;
            break;
        }
    }
}

// EVENTS
document.querySelector('#add-todo')
    .addEventListener('click', function () {
        showHideElement(form, false);
    });

document.getElementById('reset-todo')
    .addEventListener('click', function () {
        resetInputs(form);
    });

document.getElementById('save-todo')
    .addEventListener('click', function () {
        let inputValues = getValuesFromInputs(form);
        let todo = createTodo(inputValues.title, inputValues.description);
        todoInMemory.todos.push(todo);
        resetInputs(form);
        console.log(todoInMemory.todos);
        showHideElement(form, true);
    });

document.getElementById('show-todo')
    .addEventListener('click', function () {
        showTodos(content);
    });

content.addEventListener('click', function (event) {
    event.stopPropagation();
    let action = event.target.name; // could be complete or remove
    let id = event.target.value;
    if (action === 'complete') {
        completeTodo(Number(id));
        showTodos(content);
    }
    console.log(event.target.name);
    console.log(event.target.value);
});