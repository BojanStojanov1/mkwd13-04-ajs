console.log("*** DESTRUCTURING OBJECTS ***");


const person = {
    firstName: "Bob",
    lastName: "Bobski",
    age: 35,
    hasDrivingLicense: true
};

console.log(person.firstName, person.lastName, person.age, person.hasDrivingLicense);

/**
 * Destructuring is the proccess of breaking the down the complex
 * structure of an object
 * 
 * We can access only those properties that we need
 */
console.log('USING DESTRUCTURING');
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hasDrivingLicense = person.hasDrivingLicense


// SAME AS ABOVE BUT SHORTER USING DESTRUCTURING

const { lastName, firstName, age, hasDrivingLicense } = person;
console.log(firstName, lastName, age, hasDrivingLicense)

console.log(person.firstName)


// EXAMPLE 2

const color = "blue";

const car = {
    model: "Lada Niva",
    color: "white",
    engine: "1600",
    gas: "gasoline" 
}

// IF THERE ARE VARIABLES WITH SAME NAME AS THE PROPERTY THAT WE DESCTRUCTURE
// WE CAN "rename" THE DESTRUCUTRED PROPERTY
const {model, color: carColor} = car;

console.log(`I have a ${carColor} ${model}.`);

car.color = "Red";

console.log(car);

console.log("*** DESTRUCTURING IN ARRAYS ***");

const fruits = ["Pineapple", "Apple", "Strawberry"];
console.log(fruits[0]);

// Usefull when we know how many elements are in the array
const [firstElement, secondElement, thirdElement, forthElement] = fruits;

console.log(firstElement, secondElement, thirdElement, forthElement); // forthElement will be undefined, since the fruits array has only 3 elements;

console.log("*** SPREAD OPERATOR ***");

// Usecase #1 => Copy objects
const vehicle = {
    model: "Volvo",
    fuel: 'Diesel'
};
// copy of the vehicle object (it is new in memory)
const secondVehicle = {
    ...vehicle
};

secondVehicle.color = "light grey"
console.log(vehicle)
console.log(secondVehicle)

// Usecase #2 => Copy array
const movies = ['Before the rain', 'Shawshenk redemption'];

// copy of the movies array (it is new in memory)
const moviesTwo = [...movies];

moviesTwo.push('Batman');

console.log(movies);
console.log(moviesTwo);

// Usecase #3 => Exapanding objects
const first = {
    name: "Bob",
    age: 25,
    hasDrivingLicense: true
}

const second = {
    name: 'John',
    isAdult: true
}

/**
 * we can "expand" the objects, with this syntax 
 * the object third will have the properties from both first and second
 * 
 * IMPORTANT:
 * - If there are properties with same name, the property from the last spreaded object
 * will be taken into account ( it will overwrite the previous one)
 */
const third = {
    ...first,
    ...second,
    hasDrivingLicense: false,
}

console.log(third);


// Usecase #4 => Expanding arrays;

const basket = ['Milk', 'Bread'];
const secondBasket = ['Juice', 'Bread', 'Eggs'];

// Using spread operator we expanded the thirdBasket array with the values of 
// basket and secondBasket
const thirdBasket = [...basket, ...secondBasket, 'Fish', 'Cookies'];
console.log(thirdBasket);

console.log('*** METHODS OF OBJECTS ***')

const academy = {
    name: "Qinshift",
    academy: 'Programming',
    subjects: ['HTML & CSS', 'BASIC JS', 'ADVANCED JS']
}

console.log(academy);

// Object.keys(objectName) => will return array of all the keys(properties)that the objects has
const keys = Object.keys(academy)
console.log(keys);

// Object.values(objectName) => will return array of all the values that the object has
const values = Object.values(academy)
console.log(values);

// Object.entries(objectName) => will return array of arrays where each array has two element, the first element is the key and the second is the value
const entries = Object.entries(academy);
console.log(entries);

academy.duration = '1 year';
console.log(academy);

// Object.seal(academy);

Object.seal(academy); // Will seal the object, meaning we can change existing properties but we cannot add new
academy.hasRemoteClasses = true; // won't be added
academy.name = 'Qinshift Academy'; // will be changed
delete academy.subjects // won't be deleted
console.log(academy);

Object.freeze(academy); // Will freeze object, meaning, we cannot change the existing properties and we cannot add new properties;

academy.name = 'Qinshift Academy Company';
console.log(academy)
academy.isLocated = "Skopje"
console.log(academy)
