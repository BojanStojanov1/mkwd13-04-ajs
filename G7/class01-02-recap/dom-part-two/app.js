console.log("this is the dom part two working");
/*
- Create 3 inputs:
  - Color
  - FontSize
  - Text
- Create a button for generating titles
- When the button is clicked generate a new `h1` or `h2` element with the color, font size, and text from the inputs
*/

//Selectors
const colorInput = document.querySelector("#colorInput");
const fontSizeInput = document.querySelector("#fontSizeInput");
const textInput = document.querySelector("#textInput");
const createBtn = document.querySelector("#createBtn");
const headingContainerEl = document.querySelector(".headings-container");

console.log(
  colorInput,
  fontSizeInput,
  textInput,
  createBtn,
  headingContainerEl
);

//Function for generating headings
function generateHeading(color, fontSize, text) {
  console.log(color, fontSize, text);

  //   headingContainerEl.innerHTML += `<h1 style="color: ${color}; font-size: ${fontSize}px" >${text}</h1>`;

  const newHeadingEl = document.createElement("H1");

  newHeadingEl.style.color = color;
  newHeadingEl.style.fontSize = `${fontSize}px`;
  newHeadingEl.innerText = text;

  headingContainerEl.appendChild(newHeadingEl);
}

function clearInputs(inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

//Listener for clicking on the create btn
createBtn.addEventListener("click", function () {
  console.log("the create btn is clicked");

  if (!colorInput.value || !fontSizeInput.value || !textInput.value) return;

  generateHeading(colorInput.value, fontSizeInput.value, textInput.value);

  //   clearInputs([colorInput, fontSizeInput, textInput]);

  clearInputs(document.querySelectorAll("input"));
});

// Create a class for Student objects with:
//   - Properties:
//     - firstName
//     - lastName
//     - birthYear
//     - academy
//     - grades - array of numbers
//   - Methods:
//     - getAge() - returns age of student
//     - getInfo() - returns "This is student firstName* lastName* from the academy academy\*!"
//     - getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

// function Student(firstName, lastName, birthYear, academy, grades) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
//   this.academy = academy;
//   this.grades = grades;

//   this.getAge = function () {
//     const currentYear = new Date().getFullYear();

//     return currentYear - this.birthYear;
//   };

//   this.getInfo = function () {
//     return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
//   };

//   this.getGradesAverage = function () {
//     let sum = 0;

//     for (const grade of this.grades) {
//       sum += grade;
//     }

//     return sum / this.grades.length;
//   };
// }

class Student {
  constructor(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
  }

  getAge() {
    const currentYear = new Date().getFullYear();

    return currentYear - this.birthYear;
  }

  getInfo() {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  }

  getGradesAverage() {
    let sum = 0;

    for (const grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  }
}

const students = [
  new Student("John", "Doe", 1988, "Programming", [1, 2, 3, 4, 5]),
  new Student("Jane", "Doe", 1993, "Programming", [5, 5, 5, 5, 5]),
  new Student("Bob", "Bobsky", 2003, "Design", [1, 1, 1, 1, 1]),
];

console.log(students[0].getInfo());
console.log(students[1].getInfo());

console.log(students[0].getAge());
console.log(students[1].getAge());

console.log(students[0].getGradesAverage());
console.log(students[1].getGradesAverage());

//  List generator from an array
// - Create an array of 5 names
// - Create an HTML page with:
//   - A header
//   - An empty unordered list
//   - A button
// - When the button is clicked it should fill in the empty unordered list with the names of the array

const genNameArrayBtn = document.querySelector("#genNameArrayBtn");
const nameArrayEl = document.querySelector(".name-arr-list");

console.log(genNameArrayBtn, nameArrayEl);

const nameArr = ["John", "Jane", "Risto", "Blazho", "Tosho"];

function renderNameArray(array, listEl) {
  //1. inerHTML approach
  // let liHTML = "";
  // for (let name of array) {
  //   liHTML += `<li>${name}</li>`;
  // }
  // listEl.innerHTML = liHTML;
  // console.log(liHTML);
  //2. createElement approach
  for (let name of array) {
    const newLi = document.createElement("li");

    newLi.textContent = name;

    listEl.appendChild(newLi);
  }
}

genNameArrayBtn.addEventListener("click", function () {
  console.log("gen name btn");
  renderNameArray(nameArr, nameArrayEl);
});

// List Generator dynamically from inputs

// - Create 3 inputs:
//   - Color
//   - FontSize
//   - Items
// - Create a button for generating unordered lists
// - When the button is clicked generate a new ul element with the color, font size, and items from the inputs

const colorListInput = document.querySelector("#colorListInput");
const fontSizeListInput = document.querySelector("#fontSizeListInput");
const itemsListInput = document.querySelector("#itemsListInput");
const createListBtn = document.querySelector("#createListBtn");
const listsContainerEl = document.querySelector(".lists-container");

// console.log(
//   colorListInput,
//   fontSizeListInput,
//   itemsListInput,
//   createListBtn,
//   listsContainerEl
// );

function generateDynamicList(color, fontSize, items) {
  console.log(color, fontSize, items);

  //1. create a new ul element
  const ulEl = document.createElement("ul");
  //2. apply styles to list
  ulEl.style.color = color;
  ulEl.style.fontSize = `${fontSize}px`;
  //3. Create array from items string and create <li> HTML
  const itemsArr = items.split(",");

  let liHTML = "";

  for (let item of itemsArr) {
    liHTML += `<li>${item.trim()}</li>`;
  }

  ulEl.innerHTML = liHTML;

  //Return the newly created and configured list
  return ulEl;
}

createListBtn.addEventListener("click", function () {
  console.log("create list btn clicked");
  const newUlEl = generateDynamicList(
    colorListInput.value,
    fontSizeListInput.value,
    itemsListInput.value
  );

  listsContainerEl.append(newUlEl);

  clearInputs([colorListInput, fontSizeListInput, itemsListInput]);
});
