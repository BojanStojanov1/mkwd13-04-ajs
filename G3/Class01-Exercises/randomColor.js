/* Random color page
Create an HTML page
On every refresh the page should pick a random color and change the background of the page
The RGB values of the color should be shown in the center of the page on every restart */

let body = document.getElementById("body");
window.addEventListener("load", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  //body.style["backgroundColor"] = `rgb(${red}, ${green}, ${blue})`
  document.body.style["backgroundColor"] = `rgb(${red}, ${green}, ${blue})`;
  console.log(red, green, blue);
});
