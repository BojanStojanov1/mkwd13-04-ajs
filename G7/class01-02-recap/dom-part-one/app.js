// - Create an HTML page
// - On every refresh the page should pick a random color and change the background of the page
// - The RGB values of the color should be shown in the center of the page on every restart

console.log(Math.random());

const colorDisplayEl = document.querySelector(".color-display");
console.log(colorDisplayEl);

function changeBodyColor() {
  console.log("change color func called");

  //1. Generate 3 random numbers between 0-255
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  //We are changing the oclor of the display el here to make invert work and get the negative or inverted color
  colorDisplayEl.style.color = `rgb(${red}, ${green}, ${blue})`;
  colorDisplayEl.textContent = `rgb(${red}, ${green}, ${blue})`;

  console.log(red, green, blue);
}

// setInterval(function () {
//   changeBodyColor();
// }, 200);

changeBodyColor();
