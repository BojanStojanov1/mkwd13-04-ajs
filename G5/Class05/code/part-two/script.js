
function consoleDivider(title) {
    console.log(`--**${title}**--`)
};


consoleDivider('HIGH ORDER FUNCTION forEach');

const students = [
    { firstName: "Bob", lastName: "Bobski", age: 18, grade: 5 },
    { firstName: "Mel", lastName: "Mells", age: 24, grade: 4 },
    { firstName: "Jill", lastName: "Jilson", age: 22, grade: 3 },
];

function fullName(student) {
    console.log(`Fullname: ${student.firstName} ${student.lastName}`)
};

// For loop solution
for (let i = 0; i < students.length; i++) {
    fullName(students[i]);
};

console.log('-- solution with forEach --')
// forEach - solution #1
students.forEach((student) => { fullName(student) })

// forEach - solution #2
students.forEach(fullName)

// when we need and have multi line expression
const resultForEach = students.forEach((student) => {
    if (student.age > 18) {
        fullName(student)
    }
});

console.log(resultForEach) // undefined ! => forEach DOES NOT RETURN ANY VALUE;

consoleDivider('HIGH ORDER FUNCTION filter');

// For loop solution
const filteredStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age > 18) {
        filteredStudents.push(students[i])
    }
};
console.log('For loop:', filteredStudents)

// Filter solution;
// students.filter(function(){})
const filtered = students.filter((element) => {
    if (element.age > 18) {
        return element
    }
});

const filteredShorter = students.filter((element) => element.age > 18);

console.log(filteredShorter);
console.log(students); // filter WON'T CHANGE/MUTATE THE ORIGINAL ARRAY 
console.log(filtered); // filter RETURNS NEW ARRAY WITH THE FILTERED VALUES

consoleDivider('HIGH ORDER FUNCTION map');
const players = [
    { name: "John", points: 20 },
    { name: "Bob", points: 50 }
];

// For loop solution
const playersWithBonuses = [];
for (let i = 0; i < players.length; i++) {
    const player = { name: players[i].name, points: players[i].points + 20 };

    playersWithBonuses.push(player);
};

console.log(playersWithBonuses);

// Map solution
// players.map(function(){})
const playersWithBonusMap = players.map((element) => {
    const player = {
        name: element.name,
        points: element.points + 20,
    }
    return player
});

console.log(playersWithBonusMap); // NEW ARRAY IN MEMORY

console.log(players) // map WON'T MUTATE THE ORIGINAL ARRAY

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliedNumbers = numbers.map((number) => {
    if (number % 2 === 0) {
        // IT WILL RETURN THE MODIFIED NUMBER THAT FULLFILLS THE CONDITION
        return number * 10
    }

    // IF THE ELEMENT OF THE CURRENT ITERATION DOES NOT FULLFILL THE IF STATEMENT WE ARE JUST GOING TO RETURN IT
    return number
})
console.log(multipliedNumbers)


// WE CAN COMBINE MAP + FILTER
const combination = numbers.map((number) => {
    if (number % 2 === 0) {
        return number * 10
    }
}).filter((number) => {
    if (number !== undefined) {
        return number
    }
});

consoleDivider('HIGH ORDER FUNCTION sort');

let digits = [2, 5, 1, 10, 3, 8];
console.log(digits);

digits.sort((a, b) => {
    // console.log("a", a); // a is the element of the current iteration
    // console.log("b", b) // b is the next element next to the current iteration (index + 1)
    return a - b
}) // Ascending
console.log(digits);

digits.sort((a, b) => b - a) // Descending
console.log(digits);

let words = ["Pineapple", "Starwberry", "Apple", "Fig"];
words.sort();
console.log(words);

words.sort((a, b) => a.length - b.length);
console.log(words);

words.sort((a, b) => a.localeCompare(b)) // The default sorting is alphabetically
console.log(words);

consoleDivider('PASS BY REFERENCE / PASS BY VALUE');

const products = [
    {name: "Lenovo Ideapad", price: 750},
    {name: "Asus Vivobook", price: 400},
    {name: "Mac", price: 1400},
    {name: "Lenovo Thinkpad", price: 1200}
];

// THE PROBLEM
// const productsToBeSorted = products;

// productsToBeSorted.sort((productA, produbctB) => {
//     return productA.price - produbctB.price
// });

// console.log(productsToBeSorted);
// console.log('------------');
// console.log(products);

// THE SOLUTION

// WILL RETURN NEW ARRAY IN MEMORY
function copyArray(array){
    let copyOfOriginal = [];

    array.forEach((element) => copyOfOriginal.push(element));

    return copyOfOriginal;
};

// PASS BY VALUE
// Copying version #1
// const productsToBeSorted = copyArray(products); // working
// Copying version #2
// ... => SPREAD OPERATOR
const productsToBeSorted = [...products]; // WILL CREATE NEW COPY OF THE ARRAY
productsToBeSorted.sort((productA, produbctB) => {
    return productA.price - produbctB.price
});

console.log('SORTED:', productsToBeSorted);
console.log('ORIGINAL:', products);


// OBJECTS

let person = {
    name: "Bob",
    age: 22
}

// PROBLEM
// let personTwo = person;
// personTwo.name = "Alice";

// console.log(person, personTwo)

// SOLUTION

let personTwo = {...person}; // WILL CREATE A NEW COPY IN MEMORY FROM THE person OBJECT;

personTwo.name = "Alice";
console.log(person, personTwo)