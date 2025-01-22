// A pure function is a function that, given the same input, will always return the same output and has no side effects.
// That is, the function's result is solely determined by its input parameters, and it doesn't modify any external state or have any observable interactions with the outside world.
// Pure function: no side effects, same output for the same input
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));
console.log(add(3, 5));

// An impure function is a function that may produce different results for the same input and/or have side effects, meaning it can modify external state or have interactions with the outside world beyond its return value.
// Impure function: relies on external state and has side effects
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(7));
console.log(addToTotal(15));
console.log(addToTotal(10));

// Pure version
function addToTotalPure(value) {
  let total = 10;
  total += value;
  return total;
}

let array = [1, 2, 3];

// Impure function
function addToArray(element) {
  array.push(element);
}
addToArray(4);

// Still impure
function addToArray1(arr, element) {
  arr.push(element);
  return arr;
}

// pure function
function addToArrayPure(arr, element) {
  let newArray = [];
  for (const e of arr) {
    newArray.push(e);
  }
  newArray.push(element);
  return newArray;
}

addToArrayPure(array, 4);

// Impure function: relies on Math.random for unpredictability
function getRandomNumber() {
  return Math.random();
}
console.log(getRandomNumber());

// Impure function - changes the DOM
function changeHeading() {
  document.getElementById("sample").innerHTML = "We changed the text";
}
changeHeading();

function changeHeadingBetter(element) {
  element.innerHTML = "We changed the text";
}
let heading = document.getElementById("sample");
changeHeadingBetter(heading);
