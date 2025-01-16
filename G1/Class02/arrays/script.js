let arr = [];

let arr1 = [1, 'Trajan', [1, 2, 3], { firstName: 'Trajan' }];

let result = ['Trajan', 'Stevkovski', 23];
let firstName = result[0];
let lastName = result[1];
let age = result[2];

let arrayOfNumbers = [1, 2, 3, 4, 5, 7, 9];

let arrayOfStudentGrades = [
    {
        name: 'Trajan',
        grades: [1, 2, 3, 4, 5, 6]
    },
    {
        name: 'Trajan2',
        grades: [1, 2, 3, 4, 5]
    },
    {
        name: 'Trajan',
        grades: [1, 2, 3, 4, 5, 6]
    },
    {
        name: 'Trajan',
        grades: [1, 2, 3, 4, 5, 6]
    },
    {
        name: 'Trajan',
        grades: [1, 2, 3, 4, 5, 6]
    },
    {
        name: 'Trajan',
        grades: [1, 2, 3, 4, 5, 6]
    },
];

function getStudent() {
    let name = 'Filip';
    let age = 20;
    let address = 'N/A';

    return [name, age, address];
}

// get value
let secondElement = arrayOfStudentGrades[1];
console.log(secondElement);
// set value
arrayOfStudentGrades[3] = {
    name: 'Filip',
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
};

arrayOfStudentGrades[arrayOfStudentGrades.length] = {
    name: 'Bob',
    grades: [1, 3, 4]
}
console.log(arrayOfStudentGrades);

// add element at the end using push
// adding one
arrayOfStudentGrades.push({
    name: 'Jill',
    grades: [1]
});
// adding muiltiple
arrayOfStudentGrades.push({
    name: 'Jill1',
    grades: [1,2]
}, {
    name: 'Jill2',
    grades: [3,1]
});

// adding elements in front of the array
arrayOfStudentGrades.unshift({ name: 'bob1', grades: [1] });

// removing element from the end of the array
let lastElement = arrayOfStudentGrades.pop();

// removing element from the start of the array
let fisrtElement = arrayOfStudentGrades.shift();
