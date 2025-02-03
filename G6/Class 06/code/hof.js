function Student(fName, lName, age, averageGrade){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [new Student("Bob", "Johnson", 20, 5), new Student("Petko" , "Petkovski", 23, 2), 
    new Student("Marko" , "Markovski", 17, 4)];

for( let student of students){
    console.log(`${student.firstName} ${student.lastName}`);
}

function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}

for(let student of students){
    logFullName(student);
}

//HOF - forEach
console.log("=======forEach=========");

students.forEach(logFullName); //for each member of students, the logFullName function will be called and the student will be sent as param
students.forEach(s => console.log(`${s.firstName} ${s.age}`)); //s will be each member of the array
students.forEach(function(student){console.log(`${student.firstName} ${student.averageGrade}`)});

console.log("=======filter=========");
function checkAge(student){
    return student.age > 18;
}

let studentsAbove18 = students.filter(checkAge);
console.log("studentsAbove18");
console.log(studentsAbove18);
console.log("students");
console.log(students);

console.log("=======chaining=========");
students.filter(s => s.age < 18).forEach(logFullName);
//same as:
let studentsUnder18 = students.filter(s => s.age < 18);
studentsUnder18.forEach(logFullName);

console.log("=======map=========");
let studentAvgGrades = students.map(s => s.averageGrade); //we get a new array that contains the avgGrades of all the students
console.log(studentAvgGrades);

let studentsDescriptions = [];
for(let student of students){
    if(student.averageGrade > 3){
        studentsDescriptions.push(`${student.firstName} ${student.lastName} - ${student.age}`);
    }
}

console.log("studentsDescriptions");
console.log(studentsDescriptions);

let studentDesc = students.filter(s => s.averageGrade > 3) //at this moment we have a new result array that contains all students with avrGrade >3
                .map(student => `${student.firstName} ${student.lastName} - ${student.age}`) //studentsWithAvgAbove3.map(....) & the end here we have a new array that contains strings with the studenta with grade >3 description
                .forEach(sd => console.log(sd)); //here we have an array of strings (student desc) that we will iterate with foreach and execute the arrow function for each string

function returnStudentInfo(student){
    return `${student.firstName} - ${student.age}`
}

let studentInfo = students.map(returnStudentInfo);
console.log(studentInfo);

let studentInfosLength = students.map(returnStudentInfo).map(si => si.length);
console.log(studentInfosLength);

students.filter(s => s.lastName.length > 5) //array of students with lastname.length >5
        .map(returnStudentInfo) //array of strings with first and age of students with lastname.length >5
        .map(si => si.length) //array of numbers from the length of the strings with first and age of students with lastname.length >5
        .forEach(l => console.log(l)); //foreach will iterate the array of numbers and it will execute the arrow function and console log the numbers

students.filter(s => s.age >=20) //array of students with age>=20
        .map(s => `${s.firstName} ${s.lastName} - ${s.averageGrade}`) //array of strings of data of students with age>=20
        .map(s => s.length) //array of numbers from  length of strings of data of students with age>=20
        .forEach(sl => console.log(sl));


        //we need to filter the objects before mapping the strings
// students.map(s => `${s.firstName} ${s.lastName} - ${s.averageGrade}`) 
//         .filter(s => s.age > 18)  //the order is importnat -> we have an array of strings and we call filter on that array, but strings do not have the property age

//['Bob - 2', 'Petko - 5', 'Marko - 4'].filter(s => s.age > 18) -> we do not have age on strings

console.log("=======reduce=========");

let studentsWithAvgGradeAboveTwo = students.filter(s => s.averageGrade > 2); //array of student objects

let studentAverageGrades = studentsWithAvgGradeAboveTwo.map(s => s.averageGrade); //array of numbers (avgGrades)
                  
                ///currentSum will have the initial value of 0 in the first iteration and the sum in each next iteration
function aggregate(currentSum, grade){
    debugger
    return currentSum+= grade;
}

//reduce has two params
//- a function 
// - an initial value
//the function(first param) takes the initial value as first param and each array member as second param
console.log(studentAverageGrades.reduce(aggregate, 0));

let sum = students.filter(s => s.averageGrade > 1)
.map(s => s.averageGrade)
.reduce(aggregate, 0);

// let sum = students.filter(s => s.averageGrade > 1)
// .map(s => s.averageGrade)
// .reduce(aggregate, 5);

console.log(sum);


numbers = [2,3,4,7,1,5,19];

let concatenate = function(currentResult, currentValue){
    debugger
    return currentResult += currentValue;
}

let zbir = numbers.reduce(concatenate, 0);
console.log(zbir);

let concatenatedNumbers = numbers.reduce(concatenate, "");
console.log(concatenatedNumbers);

console.log("=======sort=========");
//SORT CHANGES THE ORIGINAL ARRAY!

//<0 a.averageGrade (the first element in a-b) should be in the position with lowe index
//=0 the elements have the same value, nothing changes
//>0 b.averageGrade (the second element in a-b) should be in the position with lower index
students.sort((a, b) => a.averageGrade - b.averageGrade); //asc
console.log(students);

students.sort((a, b) => b.averageGrade - a.averageGrade); //desc
console.log(students);

//let copy = students; //pass by reference, each change in copy will change the original students array

function copyArray(array){
    let copiedArray = [];
    array.forEach(item => copiedArray.push(item)) // we add the elements in a totally different array
    return copiedArray;
}
//at this moment we have the students ordered desc by average grade
let copy = copyArray(students);
console.log(copy);

copy.sort((c1, c2) => c1.averageGrade - c2.averageGrade); //asc

console.log("copy");
console.log(copy);
console.log("students");
console.log(students);