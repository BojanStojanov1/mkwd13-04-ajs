let dog = {
    dogName: "Barnie",
    dogColor: "brown",
    dogAge: 3
};

console.log(dog.dogName); //we need to access the dogName property by using the dog object

const {dogName, dogColor, dogAge} = dog; //each property of dog is mapped in the corresponding variable that we are creating
console.log("after destructuring");
console.log(dogName);
console.log(dogAge);

function Dog(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;
}

let anotherDog = new Dog("Sparkey", "white", 4);
const {name, color} = anotherDog;
console.log(color);
console.log(anotherDog.color);

let student = {
    firstName : "John",
    age: 35,
    grades: {
        Javascript: 9,
        CSharp: 10
    }
}

function printStudent(student){
    console.log(student.firstName);
    console.log(student.grades.CSharp);
}

//{firstName, grades : {Javascript, CSharp}} = student
//in firstName we will get the value from student.firstName
//for the Javascript and CSharp variables we are doing another destructuring for the grades object
function displayInfo({firstName, grades : {Javascript, CSharp}}){
    console.log("JS grade: " + Javascript); //student.grades.Javascript
    console.log("C# grade: " + CSharp);
}

displayInfo(student);

console.log("=======array destructuring========");

let rgb = [255, 0, 200];
let [r,g,b] = rgb;
console.log(`r: ${r}`);
console.log(`g: ${g}`);
console.log(`b: ${b}`);

let colors = ["#FF00FF", [255, 0 , 255], 'rgb(255,0,255)'];
let [hex, [red, green, blue]] =colors;

console.log(hex);
console.log(red);
console.log(green);
console.log(blue);

console.log("======spread=======");
let numbers = [2,3,4];

function sumNumbers (num1, num2, num3){
    console.log(`${num1} ${num2} ${num3}`);
    return num1 + num2 + num3;
}

let result = sumNumbers(numbers[0], numbers[1], numbers[2]);
console.log(result);

let spreadResult = sumNumbers(...numbers);
console.log(spreadResult);
