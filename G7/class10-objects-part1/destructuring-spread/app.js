console.log("It is online");

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  grades: {
    basicHTML: 5,
    basicJS: 3,
    advJS: 2,
    basicNode: 99,
    comment: {
      trainer: "Decent Student",
      assisstent: "Really Good Student",
      //   mananger: "The manager has spoken",
    },
  },
};

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
};

console.log(student);

console.log(student.grades.basicHTML);
console.log(student.grades.comment.trainer);

//Destructuring creates new variables easily from the object that is on the right side of the = operator
const { firstName, lastName, age, city } = student;

console.log(firstName, lastName, age, city);

//Destructuring a nested object from another object
// const { basicHTML, basicJS, advJS } = student.grades;
// console.log(basicHTML, basicJS, advJS);

// const { trainer, assisstent } = student.grades.comment;
// console.log(trainer, assisstent);

//Add custom names to destructred properties
const { firstName: personFirstName, lastName: personLastName } = person;

console.log(personFirstName, personLastName);

const {
  grades: {
    basicHTML,
    basicJS,
    advJS,
    basicNode = 0,
    comment: {
      trainer: trainerComment,
      assisstent: assisstentComment,
      mananger: managerComment = "No Comment Added",
    },
  },
} = student;

console.log(
  basicHTML,
  basicJS,
  advJS,
  trainerComment,
  assisstentComment,
  basicNode,
  managerComment
);

//Function without destructuring

// const printStudentInfo = student => {
//   console.log(
//     `Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`
//   );
//   console.log("Grades:");
//   console.log(`Basic HTML: ${student.grades.basicHTML}`);
//   console.log(`Basic JS: ${student.grades.basicJS}`);
//   console.log(`Adv JS: ${student.grades.advJS}`);
// };

// printStudentInfo(student);

//Function with destructred

const printStudentInfo = ({
  firstName,
  lastName,
  age,
  grades: { basicHTML, basicJS, advJS },
}) => {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  console.log("Grades:");
  console.log(`Basic HTML: ${basicHTML}`);
  console.log(`Basic JS: ${basicJS}`);
  console.log(`Adv JS: ${advJS}`);
};

printStudentInfo(student);

//Destructuring arrays

const colors = ["red", "green", "yellow", "white", "black", ["pink", "orange"]];

console.log(colors);

const [redColor, greenColor, , , blackColor] = colors;

console.log(redColor, greenColor, blackColor);

const [, , yellowColor, whiteColor, , [pinkColor, orangeColor]] = colors;

console.log(yellowColor, whiteColor, pinkColor, orangeColor);

const storyArr = ["Risto", "happy", "reading books"];

const tellStory = ([name, mood, activity]) => {
  console.log(`${name} is in a ${mood} mood, and is ${activity}`);
};

tellStory(storyArr);

//Spread operator

const nums = [1, 2, 3, 4]; //[1,2,3,4,5,6,7,8,9,10]

const numsTwo = [5, 6, 7, 8, 9, 10];

// numsTwo.forEach(num => {
//   nums.push(num);
// });

///[...nums] === num[0], num[1], num[2], num[3]
const combinedNums = [...nums, ...numsTwo, 11, 12, 13];

// console.log(combinedNums);

//Copying arrays using the spread operator ( shallow copy )

const orignalNums = [2, 3, 4123, 23, 2, 1, 4, 561, 23, 2, 3, 2, 123, 23, 2];

const copyNums = [...orignalNums];

//Sort mutates the original array by changing the order so we need a copy
copyNums.sort((a, b) => a - b);

console.log(orignalNums);
console.log(copyNums);

//Combining objects with spread

const bodyInfo = {
  doors: 5,
  paint: "Metallic Gray",
  wheelSize: 19,
};

const engineInfo = {
  topSpeed: 240,
  topRpm: 7500,
  hasTurbo: true,
  cc: 3500,
};

const carInfo = {
  ...bodyInfo,
  ...engineInfo,
};

//Copying objects with spread

//!ABSOLUTELY FORBIDDEN TO DO THIS WHEN COPYING OBJECTS
//! const carInfoCopy = carInfo

const carInfoCopy = { ...carInfo };

carInfoCopy.doors = 10000;
carInfoCopy.cc = 0;

console.log("CAR INFO", carInfo);
console.log("ORIGINAL", carInfoCopy);

//Object methods

//Object.assign is used to combine objects

const personInfo = {
  firstName: "Borche",
  lastName: "Borisovski",
};

const personAddress = {
  city: "Skopje",
  country: "Macedonia",
};

Object.assign(personInfo, personAddress, { firstName: "Blazho" });

console.log(personInfo);

const carInfoAssignCopy = Object.assign({}, bodyInfo, engineInfo);

console.log(carInfoAssignCopy);

//Object.create is used to create a copy of another object

const carInfoCreateCopy = Object.create(carInfo);

console.log(carInfoCreateCopy);

console.log(carInfoCreateCopy.paint);
