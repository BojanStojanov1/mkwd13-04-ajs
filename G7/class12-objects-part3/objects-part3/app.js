console.log("part 3 is online");

const original = {
  fullName: "Borche Borisovski",
  age: 32,
  job: "Software Engineer",
  address: {
    city: "Skopje",
    zipCode: 1000,
    country: "Macedonia",
  },
};

const shallowCopy = { ...original };

// shallowCopy.address = original.address

console.log(shallowCopy);

shallowCopy.fullName = "John Doe";

console.log("Original", original);
console.log("Copy", shallowCopy);

//Updating nested objects in shallow copies will also change the parent nested object
//This can be very tricky to catch and can cause some bugs that will take a lot of digging to debug
shallowCopy.address.city = "Amsterdam";

console.log("Copy City:", shallowCopy.address.city);
console.log("Original City:", original.address.city);

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "New York";

console.log(original.address.city);
console.log(deepCopy.address.city);

//Objects in arrays

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 45,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
  },
];

const shallowStudentsCopy = [...students];

const deepStudentsCopy = JSON.parse(JSON.stringify(students));

const deepMapCopy = students.map(student => ({ ...student }));

shallowStudentsCopy[0].age = 99;

console.log("original students", students);
console.log("shallow copy students", shallowStudentsCopy);
console.log("deep copy students", deepStudentsCopy);
console.log("deep map copy students", deepMapCopy);
