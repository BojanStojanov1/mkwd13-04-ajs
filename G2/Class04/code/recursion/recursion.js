console.log("===================== RECURSION =====================");

// ===> Example: Factoriel
// 5! = 5 * 4 * 3 * 2 * 1 
function factoriel(number) {
    debugger;
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
    if (number === 0) {
        return 0;
    }
    return number + sumToNumber(--number)
}
console.log(sumToNumber(5));


// ===> Example: Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 5 is ", fibonacci(5));
console.log("Fibonacci of 25 is ", fibonacci(25));
console.log("Fibonacci of 25 is ", fibonacci(50));

