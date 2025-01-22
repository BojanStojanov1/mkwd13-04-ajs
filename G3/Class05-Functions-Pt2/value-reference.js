let myName = "Aneta";
let copiedName = myName;

copiedName = "Ivan";
console.log(myName);
console.log(copiedName);

const groceries = ["Bread", "Milk"];
const newGroceries = groceries;
newGroceries.push("Oranges");
console.log(groceries);
console.log(newGroceries);

// Deep copy
const deepCopiedGroceries = groceries.slice();
deepCopiedGroceries.push("Chocolate");
console.log(deepCopiedGroceries);
