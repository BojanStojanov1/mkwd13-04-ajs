//declaration of the function getFullName
function getFullName(firstname, lastname){
    console.log(firstname);
    //......
    return `${firstname} ${lastname}`;
}

//execution of the function
console.log(getFullName("Marko", "Markovski"));

let fullName =  getFullName("Stefan", "Stefanovski");
console.log(fullName);

function printPersonalDetails(firstname, lastname, age, address = "Unknown"){
    console.log(`The age of ${firstname} is ${age}`);
    let personFullName = getFullName(firstname, lastname); //we can call a function inside the function
    console.log(`${personFullName} lives on address ${address}`);

    return `The age of ${firstname} is ${age} and this person lives on ${address}`;
    console.log("This code won't be executed. It is unreachable");
}

console.log("=======print personal details=======");
let personDetails = printPersonalDetails("Tijana", "Stojanovska", 25, "Address1");
console.log(personDetails);

let secondPersonDetails = printPersonalDetails("Stojan", "Stojanovski", 27); //the address will have the value Unknown
console.log(secondPersonDetails);

console.log("======Anonymous functions===========");

let greeting = function(name){
    console.log(`Hello ${name}`);
}
greeting("Tijana");
greeting("Murat");

//member of an array
let mixedArray = [2, 5, true, "Test", function(){return 5+5}];
let result = mixedArray[4]();
console.log(result);

//Sent as param in another function
function printResult(paramaterFunction){

    let result = paramaterFunction();
    console.log(`Result: ${result}`);

    console.log(`Result: ${paramaterFunction()}`);

    console.log(paramaterFunction); //no execution of the function -> it will print out the function, we need to call it ()
}

//call printResult and pass anonymous function as param
printResult(function(){return 5+7});


//event listeners
document.getElementById("myBtn").addEventListener("click", function(){
    console.log("Clicked!!!");
})

console.log("=======Arrow functions==========");

//definition

                //param  //body of the function
let sumWithTen = num => num + 10;
console.log(sumWithTen(5));

//multiple params -> we put the params in ()
let sum = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum(5,10,6));

let sumOfTwoNumbers = (num1, num2) => {
    console.log("Inputs:");
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}

console.log(sumOfTwoNumbers(2,3));

let greetingHello = () => console.log("Hello!");

greetingHello();

let checkNumber = ourNumber => {
    if(ourNumber == null || ourNumber ==undefined || isNaN(ourNumber)){
        console.log("Invalid input");
        return;
    }
    ourNumber > 7 ? console.log("Greater than 7") : console.log("Less or equal to 7");
}

checkNumber(5);
checkNumber(9);
checkNumber("Test");

console.log("=====SELF INVOKED FUNCTIONS========");

//define and execute
(function(){
    console.log("Inside of a self-invoked function!");
    console.log("Hello!");
})();

let res = (function(num1, num2){
    return num1+num2;
})(3,6);   //here the function is defined and executed and the result is in the variable res
console.log(res);

//use the sum function from above
let sumResult = sum(4, 5, ((number1,number2) => number1*number2)(3,4)); //sum(4,5,12);
console.log(sumResult);
