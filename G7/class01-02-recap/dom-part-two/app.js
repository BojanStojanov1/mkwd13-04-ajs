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
