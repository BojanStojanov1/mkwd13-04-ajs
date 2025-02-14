let simpleArray = [1, 2, 3, 4, 5, 6, [1, 2, 3]];

let students = new Map();
// console.log(students);

// Add record key => value
students.set('Trajan', 'Stevkovski');
students.set('Trajan', 'Nesto drugo');
students.set('Filip', 'Something');
students.set('Bob', 'Bobski');

// let student1 = students.get('Filip');
// console.log(student1);

// check if KEY exsits
// let exists = students.has('Bob');
// console.log(exists);
// let exists1 = students.has('Bob1');
// console.log(exists1);

// // checking length
// console.log(students.size);

// delete record
// students.delete('Trajan');

// clear map
// students.clear();

// for(let [key, value] of students) {
//     console.log('Key: ', key);
//     console.log('Value: ', value);
// }


class Employee {
    constructor(id, name, position, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

let john = new Employee(1, 'John', 'Developer', 100);
let jane = new Employee(2, 'Jane', 'Developer', 200);
let bob = new Employee(3, 'Bob', 'Developer', 300);
let jill = new Employee(4, 'Jill', 'Developer', 400);
let jake = new Employee(5, 'Jake', 'Tester', 500);
let itan = new Employee(6, 'Itan', 'Tester', 600);
let empl1 = new Employee(7, 'Employee1', 'Tester', 700);
let empl2 = new Employee(8, 'Employee2', 'Design', 800);
let empl3 = new Employee(9, 'Employee3', 'Design', 900);

let employees = [
    john,
    jane,
    bob,
    jill,
    jake,
    itan,
    empl1,
    empl2,
    empl3
];

let mappedEmployees = new Map();
for(let empl of employees) {
    if(mappedEmployees.has(empl.position)) {
        let employess = mappedEmployees.get(empl.position);
        mappedEmployees.set(empl.position, [...employess, empl]);
    } else {
        mappedEmployees.set(empl.position, [empl]);
    }
}

// console.log(mappedEmployees);

let developers = mappedEmployees.get('Tester'); 
// for(let empl of developers){
//     console.log(empl);
// }

// SET
// creating Set
let mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);

mySet.add(2); // adds the 2 but we only have unique values

// Check if value exists
// console.log(mySet.has(2));
// console.log(mySet.has(7));

// check size/length
console.log(mySet.size);

// remove value
// mySet.delete(2);

// clear set
// mySet.clear();

// return array of key value pairs
let a = mySet.entries();
// console.log(a);

let values = mySet.values();
// console.log(values);

// for(let value of mySet) {
//     console.log(value);
// }

let numbers = [1, 2, 3, 4, 4, 4, 4, 5, 1, 2, 3, 5, 10, 12, 11, 10, 1, 2, 3, 4, 5];

let numbersSet = new Set(numbers);
let unique1 = [...new Set(numbers)];
console.log(unique1)
console.log(numbersSet);

