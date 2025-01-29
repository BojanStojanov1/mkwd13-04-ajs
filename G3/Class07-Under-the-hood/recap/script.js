console.log("RECAP");
const users = [
  {
    id: 1,
    name: "Eva",
    age: 28,
    occupation: "Software Engineer",
    gender: "female",
  },
  { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
  {
    id: 3,
    name: "David",
    age: 22,
    occupation: "Graphic Designer",
    gender: "male",
  },
  {
    id: 4,
    name: "Charlie",
    age: 42,
    occupation: "Marketing Manager",
    gender: "male",
  },
  {
    id: 5,
    name: "Alice",
    age: 31,
    occupation: "Product Manager",
    gender: "female",
  },
];

// let copiedUsers = [...users];
let copiedUsers = users.slice();

// SORT
// Ascending order
const sortedUsersAsc = users.sort((a, b) => a.name.localeCompare(b.name));
// Descending order
const sortedUsersDesc = copiedUsers.sort((a, b) =>
  b.name.localeCompare(a.name)
);
console.log(sortedUsersAsc);
console.log(sortedUsersDesc);

// EVERY
const areAllUsersAdult = users.every((user) => user.age >= 18);
console.log(areAllUsersAdult);

// SOME
const areThereProgrammers = users.some(
  (user) => user.occupation === "Software Engineer"
);
console.log(areThereProgrammers);

// FIND
const foundUser = users.find((user) => user.age === 22);
console.log(foundUser);
