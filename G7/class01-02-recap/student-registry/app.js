console.log("student registry working");

/*
- Create an HTML page with student registry form with
  - First Name
  - Last Name
  - Age
  - Email
- Create a student generator class
- When the form is submitted, the input values should be compiled into a new object of type Student
- This student should be added to a list (array) called "students"
- After submitting the form the students array should be printed in the console
- The input fields should be cleared
*/

//1. Selectors
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const saveBtn = document.querySelector("#saveBtn");

console.log(firstNameInput, lastNameInput, ageInput, emailInput, saveBtn);

//2. Data variabes
const students = [];

//3. Functions/Classes
//Always try to use a function below its definition
class Student {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}

function addStudent(firstName, lastName, age, email) {
  //1. Create new student object
  const newStudent = new Student(firstName, lastName, age, email);

  //2. Add new student to the students array
  students.push(newStudent);
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

//4. Event Listeners
saveBtn.addEventListener("click", function () {
  console.log("save btn clicked");
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const ageValue = ageInput.value;
  const emailValue = emailInput.value;

  const areInputsValid = validateInputs([
    firstNameInput,
    lastNameInput,
    ageInput,
    emailInput,
  ]);

  if (!areInputsValid) return;

  addStudent(firstNameValue, lastNameValue, ageValue, emailValue);

  clearInputs(document.querySelectorAll("input"));

  console.log(students);
});
