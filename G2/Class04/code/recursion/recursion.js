console.log("===================== RECURSION =====================");
// Recursion is a technique where a function calls itself

// Use cases: traversing data structures, solving mathematical problems, etc.

// IMPORTANT !!!
// Always define a base case to stop the recursion
// Without it, you risk creating infinite loops and stack overflows

// ===> Example: Factoriel
// 5! = 5 * 4 * 3 * 2 * 1 
function factoriel(number) {
    debugger;
    // Exit case !
    if (number <= 1) {
        return 1;
    }
    return number * factoriel(number - 1)
}
console.log(factoriel(5))
// 1) 5 => 5 * factoriel(4)
// 2) 4 => 4 * factoriel(3)
// 3) 3 => 3 * factoriel(2)
// 4) 2 => 2 * factoriel(1)
// 5) 1 => 1
// Result => 120


// ===> Example: Sum to Number
function sumToNumber(number) {
    // Exit case !
    if (number === 0) {
        return 0;
    }
    return number + sumToNumber(--number)
}
console.log(sumToNumber(5));


// ===> Example: Fibonacci
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

function fibonacci(n) {
    // Exit case !
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 5 is ", fibonacci(5));
console.log("Fibonacci of 25 is ", fibonacci(25));
console.log("Fibonacci of 50 is ", fibonacci(50)); // takes a while...

// Note: For large Fibonacci numbers, recursion can be inefficient due to repeated calculations

