// Object literal

let obj = {}; // empty object

// adding properties . notation
obj.firstName = 'Trajan';
console.log(obj.firstName);

// adding properties with square bracket notation
obj['lastName'] = 'Stevkovski';

let obj2 = {
    title: 'Title',
    durration: 102,

    getTitle: function() {
        return this.title;
    }
};

obj2.getTitle();


// using new Object

let obj3 = new Object();
// we must always use square bracket or dot notation to add properties or methods

obj3.firstName = 'Filip';

obj3['lastName'] = 'Zlatanovski';

obj3.movieInfo = obj2;
console.log(obj3);


// Construtor function

function Student(firstName, lastName, dob, address, town) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dob;
    this.address = !address ? 'N/A' : address;
    this.town = town;

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function getFullName(student) {
    // validations 
    return `${student.firstName} ${student.lastName}`;
}

let student = new Student('Bob', 'Bobski', 1999);
let fullName = student.getFullName();
let fullName2 = getFullName(student);
let fullName3 = getFullName(obj);


student['grades'] = [1, 2, 3, 4];
student.academy =  {
    name: 'QA',
    address: 'Some address',
    studentCapacity: 1001
};

// removing property from object
delete student.firstName;