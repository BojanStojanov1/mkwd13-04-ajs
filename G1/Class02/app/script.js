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
    todoIdCounter: 1,
    isShowTodosActive: false
};

let actions = {
    complete: 'complete',
    remove: 'remove'
}

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
            completeBtn = `<button type="button" name="${actions.complete}" value="${todo.id}">Complete</button>`;
        }

        let li = `
            <li ${todo.isComplete ? 'style="background-color: yellow;"' : ''}>
                <span>${todo.title}</span>
                <span>${todo.description}</span>
                ${completeBtn}
                <button type="button" name="${actions.remove}" value="${todo.id}">Remove</button>
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

function removeTodo(id) {
    // set todo to null
    for(let i = 0; i < todoInMemory.todos.length; i++) {
        let todo = todoInMemory.todos[i];
        if (todo.id === id) {
            todoInMemory.todos[i] = null;
            break;
        }
    }
    // clean array from nulls
    let todos = [];
    for(let todo of todoInMemory.todos) {
        if (todo) {
            todos.push(todo);
        }
    }
    todoInMemory.todos = todos;
}

function isValidTodoInput(title) {
    let validationResult = {
        isValid: true,
        validationMessage: ''
    };
    // required 
    if (!title) {
        validationResult.isValid = false;
        validationResult.validationMessage = 'Title is required';
    } else if (title.length > 30) {
        validationResult.isValid = false;
        validationResult.validationMessage = 'Title length is exceding 30 characters';
    }

    return validationResult;
}

function showErrorMessage(message) {
    // let html = `<span style="color: red;"><i>${message}</i></span>`;
    let element = document.createElement('span');
    element.innerHTML = `<i>${message}</i>`;
    element.style.color = 'red';
    form.appendChild(element);
}

function removeErrorMessage() {
    form.lastElementChild.innerHTML = '';
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
        let errorMessageSpan = form.lastElementChild;
        if (errorMessageSpan.tagName === 'SPAN') {
            removeErrorMessage();
        }

        let inputValues = getValuesFromInputs(form);
        let validation = isValidTodoInput(inputValues.title);

        if (validation.isValid) {
            let todo = createTodo(inputValues.title, inputValues.description);
            todoInMemory.todos.push(todo);
            resetInputs(form);
            console.log(todoInMemory.todos);
            showHideElement(form, true);
    
            if (todoInMemory.isShowTodosActive) {
                showTodos(content);
            }
        } else {
            showErrorMessage(validation.validationMessage);
        }

    });

document.getElementById('show-todo')
    .addEventListener('click', function () {
        showTodos(content);
        todoInMemory.isShowTodosActive = true;
    });

content.addEventListener('click', function (event) {
    event.stopPropagation();
    let action = event.target.name; // could be complete or remove
    let id = event.target.value;

    switch (action) {
        case actions.complete:
            completeTodo(Number(id));
            showTodos(content);
            break;
        case actions.remove:
            removeTodo(Number(id));
            showTodos(content);
            break;
    }
});