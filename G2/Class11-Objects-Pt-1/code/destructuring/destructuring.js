console.log("====================== DESTRUCTURING ======================");
// => breaking down a complex structure into simpler parts
// => cleaner syntax to get items from arrays, or property-values from objects, and put them into distinct variables

let userObj = {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 28,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
        "color": "Brown",
        "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
        },
        "country": "United States"
    }
}

console.log("");
console.log("============== Object Destructuring ==============");


// ===> Example: take id, firstName, lastName (WITHOUT DESTRUCTURING)
// const id = userObj.id;
// const firstName = userObj.firstName;
// const lastName = userObj.lastName;
// console.log(id, firstName, lastName);

// ===> Example: take id, firstName, lastName (WITH DESTRUCTURING)
let { id, firstName, lastName } = userObj;
// id = 10;
console.log(id, firstName, lastName);


// ===> Example: take firstName, lastName, age (WITH DESTRUCTURING)
const { userFirstName, userLastName, age } = userObj;
console.log(userFirstName, userLastName, age);
// NOTE: We must use the same key-names (property names) !!!  

// *However, there is workaround syntax even for that (BONUS)* 
// Syntax: { propertyName : ourCustomVariableName } = ourObject
const { firstName: userFirstNameCustom } = userObj;
console.log(userFirstNameCustom);


// ===> Example: take address latitude and longitude (WITHOUT DESTRUCTURING)
let latitude = userObj.address.coordinates.lat;
let longitude = userObj.address.coordinates.lng;
console.log(latitude, longitude);

// ===> Example: take address latitude and longitude (WITH DESTRUCTURING)
// const { lng, lat } = userObj.address.coordinates;
// console.log(lat, lng);

// ===> Example: take address city, latitude and longitude (WITH DESTRUCTURING)
const { city, coordinates: { lat, lng } } = userObj.address;
console.log(city, lat, lng);


console.log("");
console.log("============== Parameters Destructuring ==============");

// ===> Example: without destructuring
function getUserInfo(user) {
    return `${user.firstName} ${user.lastName}`;
}

console.log(getUserInfo(userObj));

// ===> Example: with parameters destructuring
function getUserInfoDest({ firstName, lastName, age }) {
    return `${firstName} ${lastName} ${age}`;
}
console.log(getUserInfoDest(userObj));


console.log("");
console.log("============== Array Destructuring ==============");

const testArray = [100, 300, 5_000, 400, 10_000];

// ===> Example: take first 3 items from the array (WITHOUT DESCTRUCTURING)
let firstNumber = testArray[0];
let secondNumber = testArray[1];
let thirdNumber = testArray[2];
console.log(firstNumber, secondNumber, thirdNumber);

// ===> Example: take first 3 items from the array (WITH DESCTRUCTURING)
let [itemOne, itemTwo, itemThree, itemFive] = testArray;
console.log(itemOne, itemTwo, itemThree, itemFive); //itemFive = 400

// ===> Example: take first and third div with class array-demo (WITH DESCTRUCTURING)
let [firstDiv, _, thirdDiv] = document.getElementsByClassName("array-demo");
console.log(firstDiv);
console.log(thirdDiv);


// ===> Example: Destructuring with default values 
const testArrayTwo = ["First string", "Second string"];
let [firstString, secondString, thirdString = "Third string :)"] = testArrayTwo;
console.log(firstString, secondString, thirdString);


// ===> Example: Swapping variables using array destructuring
// let a = 10;
// let b = 20;
let a = 10, b = 20; // same thing as above
// HOW TO SWAP THEIR VALUES ???
// => Without Destructuring
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// => With Destructuring
[a, b] = [b, a];
console.log(a, b);


console.clear();
console.log("");
console.log("============== Spread operator ==============");
// The spread operator (...) is used to expand iterable elements (arrays, objects, strings) into individual elements or properties 
// It is commonly used for copying, merging and passing elements as arguments to functions

// *** Spread in fucntion calls ***

const numbers = [-5, 10, 30, 123, 10_000];
console.log(Math.max(numbers));
// console.log(Math.max(-5, 10, 30, 123, 10_000));
console.log(Math.max(...numbers));

console.log(numbers);
console.log(...numbers);


// *** Spread with Arrays ***

const dogs = ["Bax", "Chapo", "Sharko"];
const cats = ["Zuza", "Mici"];

// ===> Example: merge 2 arrays into 1 (WITHOUT SPREAD)
let allPetsArr = []
for (const pet of dogs) {
    allPetsArr.push(pet)
}
for (const pet of cats) {
    allPetsArr.push(pet)
}

// ===> Example: merge 2 arrays into 1 (WITH SPREAD)
const allPets = [...dogs, ...cats];
console.log(allPets);

// ===> Example: create copy of dogs array
const dogsCopy = [...dogs];
dogsCopy.push("Pluto"); // won't change the original dogs array


// *** Spread with Objects ***

// ===> Example: merge 3 objects into 1 (WITH SPREAD)

let dog = {
    name: "Aks",
    breed: "Pug"
}

let description = {
    group: "Toy",
    color: "Appricot Fawn",
    origin: "China"
}

let owner = {
    firstName: "Bob"
}

const aksDogInfo = { ...dog, ...description, ...owner } //, isHappy: true } // can add extra properties if needed
console.log(aksDogInfo);


// *** Spread with Strings ***
// ===> Example: Converts a string into an array of characters
const word = "HELLO";
const letters = [...word]
console.log(letters);

console.log(...aksDogInfo.name);


console.log("");
console.log("============== Rest operator ==============");

// ===> Example: take first 2 elements from array. Assign the rest as an array to a variable.
const students = ["Bob", "Jill", "John", "Rob", "Jo"];

const [bobName, jillName, ...restStudents] = students;
console.log(bobName, jillName);
console.log(restStudents);

// ===> Example: function that sums random count of numbers passed as arguments

// function sum(num1, num2, num3) {
//     // console.log(arguments);
//     return num1 + num2 + num3;
// }
// console.log(sum(1, 2, 3, 4));

function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(10, 20, 30, 40, 50));
console.log(10, 20, 30, 40, 50);

