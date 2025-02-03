// HIGHER ORDER FUNCTIONS
let studentsDatabase = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 }
]
let students2Database = [
    {
        firstName: "Bob", lastName: "H", grades: [
            { subject: "Math", grade: 2 },
            { subject: "Science", grade: 3 }
        ], age: 19
    },
    {
        firstName: "Mel", lastName: "B", grades: [
            { subject: "Math", grade: 3 },
            { subject: "Science", grade: 5 }
        ], age: 33
    }
];

// write names in console

function writeNamesInConsole(students) {
    for (let student of students) {
        console.log(`${student.firstName} ${student.lastName}`);
    }
}

// writeNamesInConsole(studentsDatabase);

function writeStudentInfoInConsole(students, writeFnc) {
    for (let student of students) {
        writeFnc(student);
    }
}

// writeStudentInfoInConsole(studentsDatabase, function(student) {
//     console.log(`${student.firstName} ${student.lastName} ${student.age}`);
// });

// studentsDatabase
//     .forEach(student => console.log(`${student.firstName} ${student.lastName}`));


// map student to another obj

function mapStudentToObj(students) {
    let newStudents = [];
    for (let student of students) {
        newStudents.push({
            fullName: `${student.firstName} ${student.lastName}`,
            age: student.age
        });
    }
    return newStudents;
}

// let result = mapStudentToObj(studentsDatabase);
// console.log(result);

function mapStudetsTo(students, mapFnc) {
    let newStudents = [];
    for (let student of students) {
        newStudents.push(mapFnc(student));
    }
    return newStudents;
}

// let result = mapStudetsTo(studentsDatabase, student => {
//     return {
//         fullName: `${student.firstName} ${student.lastName}`,
//         age: student.age,
//         hasPassed: student.grade >= 3
//     }
// });
// console.log(result);

let result = studentsDatabase.map(student => {
    return {
        fullName: `${student.firstName} ${student.lastName}`,
        age: student.age,
        hasPassed: student.grade >= 3,
        y: 1
    }
});
// console.log(result);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let oddEven = numbers.map(number => number % 2 === 0 ? 'Even' : 'Odd');
// console.log(oddEven);

// filter result from array

function filterAllStudentsWithGrade3OrHigher(students) {
    let filteredStudents = [];
    for(let student of students) {
        if(student.grade > 3) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

// console.log(filterAllStudentsWithGrade3OrHigher(studentsDatabase));

function filterBy(students, filterFnc) {
    let filteredStudents = [];
    for(let student of students) {
        if(filterFnc(student)) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

// console.log(filterBy(studentsDatabase, student => student.lastName === 'J'));
// console.log(filterBy(studentsDatabase, student => student.age >= 18));

// let result1 = studentsDatabase.filter(x => x.age >= 17);
// console.log(result1);
// console.log(studentsDatabase.filter(x => x.grade <= 3));

// filter student by grade and map student to obj

function filterAndMapStudents(students, filterFnc, mapFnc) {
    let arr = [];
    for(let student of students) {
        if(filterFnc(student)) {
            arr.push(mapFnc(student));
        }
    }
    return arr;
}

let result2 = filterAndMapStudents(studentsDatabase,
    x => x.age > 17,
    x => {
        return {
            age: x.age,
            firstName: x.firstName
        }
    }
);
// console.log(result2);
let result3 = studentsDatabase
                .filter(x => x.age > 17)
                .map(x => ({ age: x.age, firstName: x.firstName, isHof: true }));
// console.log(result3);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let result5 = numbers1
//                 .filter(x => x % 2 === 0)
//                 .map(x => x * 10)
//                 .filter(x => x % 10 === 0)
//                 .filter(x => true)
//                 .map(x => x)
//                 .forEach(x => console.log(x));

// console.log(result5);


// sort fnc

// let result6 = studentsDatabase.sort((std, std1) => std.grade - std1.grade); // ascending
// let result7 = studentsDatabase.sort((std, std1) => std1.grade - std.grade); // descending

// console.log(result6);
// console.log(result7);

// sort by name 
// let result8 = studentsDatabase.sort((std, std1) => std.firstName.localeCompare(std1.firstName));
// let result8 = studentsDatabase.sort((std, std1) => std1.firstName.localeCompare(std.firstName));
// console.log(result8);


// reduce


let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function reduceNumbersArray(numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

function reduceNumbers(numbers, reduceFnc, accumulator) {
    for(let num of numbers) {
        reduceFnc(accumulator, num);
    }
    return accumulator;
}
// console.log(reduceNumbers(numbers2, (acc, current) => acc += current, 0));

let sum = numbers2.reduce((acc, current) => acc += current, 0);
// console.log(sum);

let studentNames = studentsDatabase
        .reduce((acc, current) => acc += current.firstName + ',', '');
// console.log(studentNames);

let studentsWithGradesOver3 = studentsDatabase
                    .filter(x => x.grade >= 3)
                    .filter(x => x.age > 17)
                    .map(x => `${x.firstName} ${x.lastName}`)
                    .reduce((acc, curr) => acc += curr + ' ', '');

console.log(studentsWithGradesOver3);