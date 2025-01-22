
function consoleDivider(title){
    console.log(`--**${title}**--`)
}

consoleDivider("TERNARY OPERATOR")
// if this is true/truthy ? do this : else do this

const checkIfAdult = (userAge) => {
    if(userAge >= 18){
        return 'User is adult'
    }else {
        return 'User is not adult'
    }
}

console.log(checkIfAdult(18));
console.log(checkIfAdult(15));

// With ternary 
const checkIfAdultSecond = (userAge) => {
   return userAge >= 18 ? "User is adult" : "User is not adult";
};

console.log(checkIfAdultSecond(33));
console.log(checkIfAdultSecond(11));

consoleDivider("FUNCTIONS AS FIRST-CLASS CITIZENS");

// 1. Stored in variable;
const greet = (name) => console.log(`${name} says hi!`);
greet('Bob');

// 2. Stored in an array;
const add = (a, b) =>  a + b;
const substract = (a, b) => a - b;

const mathFunctions = [add, substract, 4];
console.log(mathFunctions[0](2, 4)); // 6
console.log(mathFunctions[1](10, 2)); // 8

// 3. Used as an argument to another function
const calculate = (numberOne, numberTwo, operation) => {
    return operation(numberOne, numberTwo)
};

const calculationOne = calculate(5, 10, add);
console.log(calculationOne);

// const calculateTwo = calculate(10, 20) // Error 

// 4. Returned from another function
const multiplyBy = (withNumber) => {
    // const multiply = (num) => {
    //     return num * 10
    // }

    // return multiply

    // SAME AS ABOVE BUT SHORTER
    // return (num) => num * 10;

    return (num) => num * withNumber;
};

const multiplyByTen = multiplyBy(10) // RETURNS (num) => num * 10;

console.log(multiplyByTen(5));
console.log(multiplyByTen(10));


// Second approch
const multiplyByTwenty = multiplyBy(20);
console.log(multiplyByTwenty(3));

// 5. Functions as object
const sayHello = (name) => `Hello amigo ${name}`;
console.log(sayHello('John'));

sayHello.helloWorld = "Hello world =)";
sayHello.description = () => `This is why I am 1st class citizen`;

console.log(sayHello.helloWorld);
console.log(sayHello.description());

consoleDivider('RECURSION');

const getUserInput = () => {
    let userInput = prompt('Please enter you status');

    if(userInput === 'admin'){
        console.log('Access granted');
        return; // Will leave this function, meaning we will stop the recursion
    }

    getUserInput()
};

// getUserInput();