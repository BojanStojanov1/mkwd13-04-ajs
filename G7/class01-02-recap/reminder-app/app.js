/*
## Reminder App

- Create a reminder app
- There should be:
  - An input for entering the title
  - An input for entering priority
  - An input for color
  - A textarea for adding a description
  - A button for adding the reminder
  - A button for showing all reminders
- When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
- The object should then be added to an array of reminders
- When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
- The title should be the color of the "color" property
- Don't forget to reset the inputs after adding a reminder
*/
console.log("it is alive");

//Selectors
const titleInput = document.querySelector("#titleInput");
const priorityInput = document.querySelector("#priorityInput");
const colorInput = document.querySelector("#colorInput");
const descriptionInput = document.querySelector("#descriptionInput");
const addBtn = document.querySelector("#addBtn");
const showBtn = document.querySelector("#showBtn");
const tableContainerEl = document.querySelector(".table-container");

console.log(
  titleInput,
  priorityInput,
  colorInput,
  descriptionInput,
  addBtn,
  showBtn,
  tableContainerEl
);

//Data
const reminders = [];

//Functions/Classes
class Reminder {
  constructor(title, color, priority, description) {
    this.title = title;
    this.color = color;
    this.priority = priority;
    this.description = description;
  }
}

function clearInputs(inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

function validateInputs(inputs) {
  for (let input of inputs) {
    if (!input.value) return false;
  }

  return true;
}

function renderReminderTable(reminders, containerEl) {
  let remindersHTML = "";

  for (let reminder of reminders) {
    remindersHTML += `
    <tr>
        <td style="color: ${reminder.color}">${reminder.title}</td>
        <td>${reminder.priority}</td>
        <td>${reminder.description}</td>
    </tr>`;
  }

  containerEl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Priority</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${remindersHTML}
      </tbody>
    </table>
  `;
}

//Event Listeners
addBtn.addEventListener("click", function () {
  console.log("add btn clicked");

  //Validate the inputs in case one or more of them are empty
  if (
    !validateInputs([titleInput, colorInput, priorityInput, descriptionInput])
  ) {
    console.log("INPUTS ARE INVALID");
    return;
  }

  const newReminder = new Reminder(
    titleInput.value,
    colorInput.value,
    priorityInput.value,
    descriptionInput.value
  );

  reminders.push(newReminder);

  console.log(reminders);

  renderReminderTable(reminders, tableContainerEl);

  clearInputs([titleInput, colorInput, priorityInput, descriptionInput]);
});

showBtn.addEventListener("click", function () {
  renderReminderTable(reminders, tableContainerEl);
});
