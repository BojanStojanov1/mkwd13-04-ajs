// regular function declaration
function myFunction() {
	console.log('Called!')
}

// regular function call
myFunction();

// num1 -> global scope variable
let num1;
function sum(num1, num2) {
	// num1, num2 -> local/function scope variable
	return num1 + num2;
}

// function call with arguments and result stored in variable
let result = sum(2, 3);

// function call directly in expression
console.log(`The result is: ${sum(1, 2)}`);

function processSomething(value) {
	// return;	-> this return would immediately stop the rest of the function execution and exit 
	console.log('Before checking 1')
	if (value === 1) {
		console.log('The value is one');
		/*
			return has 2 functionalities within a function
			1. stop code execution at that line and ignore whatever comes after
			2. return a value (if necessary)
				- in this case the function doesn't return anything
				- the return result stored in a variable will be undefined
		*/
		return;
	}
	// if value (the parameter) is 1, this entire piece of code is skipped
	// very similar to break; in loops

	console.log('After checking 1')

	console.log('Before checking 2')
	if (value === 2) {
		console.log('The value is two');
	}
	console.log('After checking 2')
}

// a function that accepts 2 parameters and returns a value (boolean in this case)
function compareNumbers(num1, num2) {
	return num1 <= num2;
}

let result1 = compareNumbers(2, 5);
let result2 = compareNumbers(10, 3);
console.log(`The result is: ${compareNumbers(5, 7)}`);

// a function can call another function
// compareNumbers in this case, is NOT called until calculate is called
function calculate(num1, num2) {
	/* 
		once we call calculate, compareNumbers is then called and evaluated
		  passing 2 and 3 in calculate, we store them in the function scope variables num1 and num2
			num1 = 2;
			num2 = 3;
		these variables are then passed to compareNumers as arguments
		then compareNumbers is executed comparing num1 <= num2, 2 <= 3, the function returns true
	*/
	if (compareNumbers(num1, num2)) {
		/*
			since the result of compareNumbers return true for 2 and 3 as arguments,
			this piece of code is evaluated and returned
			since we return, whatever comes after this line (literally) is ignored and skipped
		*/

		return num1 + num2
	}

	// this is all skipped
	return 0;
}

calculate(2, 3);

// anonymous functions when event binding
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {

});

// anonymous function declaration and storing the function to a variable
const anonFunction = function () { }
anonFunction();

// regular function
function myFunction1() { }

// arrow function
const myFunction2 = () => { }

// regular function with 2 parameters
function regularFunctionSum(num1, num2) {
	return num1 + num2;
}

// arrow function with 2 parameters
const arrowFunctionSum1 = (num1, num2) => {
	return num1 + num2;
}

// arrow function with 2 parameters without a code block
// the arrow => is a shorthand for 'return' and '{}'
const arrowFunctionSum2 = (num1, num2) => num1 + num2;

// arrow function with 1 parameter
const multiplyWith5_1 = (num1) => {
	return num1 * 5;
};

// arrow function with 1 parameter with a shorthand version
const multiplyWith5_2 = (num1) => num1 * 5;

// if that is too long to type, and we have ONE parameter, we can omit the '()' for the single parameter
const multiplyWith5_3 = num1 => num1 * 5;

// arrow function with event binding
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {

});

/*
	Declaring IIFE

	1. Declare an anonymous function (without storing it in a variable)
		function() {}
		- this already shows an error that a function identifier is missing
	
	2. wrap the function in '()' to indicate that whatever is inside (in this case the function) is an expression
		- the code between '()' is an expression.
		(function() {})

	3. then we simply call the function expression (similar as a regular/arrow function call)
		(function() {})();
	
	4. we can pass arguments inside the IIFE
		(function(name) {
			console.log(`Hello from ${name}`)
		})('Academy');
*/
// IIFE
(function (name) {
	console.log('Inside IIFE', name)
})('Academy');


// recursion - a function that calls itself
// NOTE: When using recursion we ALWAYS need an END CASE that will prevent infinite calls of the function
function sumTo(num) {
	// this if check is the end case, once it gets inside, the function will simply return a value
	if (num === 0) {
		return 0;
	}

	// otherwise, the function calls num + another call of the same function
	return num + sumTo(num - 1)
}
/*
	Recursion is best understood with pen and paper
	- each function call and expression you need to write on a paper
	- then once you meet the end case, you evaluate upwards

	https://medium.com/sessionstack-blog/how-javascript-works-recursion-in-javascript-what-it-is-and-how-it-is-used-eef3d734f20d
*/

// hoisting
// only declaration is moved to top, not initialization

// a here is declared since JavaScript under the hood moves "var a;" (only the declaration) to the top of the file
// initialization part remains below the console.log(), hence this will log undefined
console.log(a)
var a = 1;

// using let and const does not allow us to use a variable before it's declaration, making it better and safer for development
let b = 2;
const c = 1;

// functions are also hoisted, meaning we can call a function before declaring it
logName();
function logName() {
	console.log('Qinshift Academy')
}