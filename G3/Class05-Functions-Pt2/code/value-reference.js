let myName = "Aneta";
let copiedName = myName;

copiedName = "Ivan";
console.log(myName);
console.log(copiedName);

// Shallow copy - only make a reference to the same memory location
const groceries = ["Bread", "Milk"];
const newGroceries = groceries;
newGroceries.push("Oranges");
console.log(groceries);
console.log(newGroceries);

// Deep copy - create a brand new variable that will point to a new memory location
const deepCopiedGroceries = groceries.slice();
deepCopiedGroceries.push("Chocolate");
console.log(deepCopiedGroceries);
