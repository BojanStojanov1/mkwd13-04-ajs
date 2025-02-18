// Object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "Skopje",
};

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// Nested Object destructuring
const pet = {
  name: "Sharko",
  type: "Dog",
  age: 5,
  info: {
    breed: "Golder Retriever",
    color: "Golden",
    characteristics: ["playful", "friendly", "loyal"],
  },
  caretakers: [
    { name: "Alice", phone: "123456" },
    { name: "Bob", phone: "654321" },
  ],
};

const {
  name: petName,
  type,
  info: {
    breed,
    characteristics: [trait1, trait2],
  },
  caretakers: [{}, { name: caretaker1name, phone: caretaker1phone }],
} = pet;

console.log(petName);
console.log(type);
console.log(trait1);
console.log(petName);
console.log(caretaker1phone);

// Array destructuring
const numbers = [1, 2, 3, 4, 5, 6];
// Destructuring assignment
const [firstNumber, secondNumber, , fourthNumber, ...rest] = numbers;
console.log(firstNumber, secondNumber, fourthNumber, ...rest);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);
// this makes a new copy that does not point to the newArr
const copiedArr1 = [...newArr];
// this makes a new copy that does not point to the newArr
const copiedArr2 = JSON.parse(JSON.stringify(newArr)); // should be avoided
