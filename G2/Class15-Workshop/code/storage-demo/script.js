console.log("============== Local Storage ==============");


let user = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 34
}

// ===> Storing Data
localStorage.setItem("john", "John Doe");
localStorage.setItem("currentUser", JSON.stringify(user));

// ===> Retrieving Data
const johnName = localStorage.getItem("john")
console.log(johnName);

const currentUserJSON = localStorage.getItem("currentUser");
console.log(currentUserJSON);
const currentUserObj = JSON.parse(currentUserJSON)
console.log(currentUserObj);
console.log(currentUserObj.firstName);

// ===> Removing data
localStorage.removeItem("john");

// ===> Clear Data from Local Storage
// localStorage.clear();


console.log("============== Optional Chaining Operator '?.' ==============");

let userObj;
// console.log(userObj.name); // ERROR
console.log(userObj?.name);

