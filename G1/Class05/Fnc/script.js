// DEFINITION
function fnc(a, b) {

    return;
}

// CALL
fnc(1,2);

// DEFINITION OF ANONYMOUS FNC
let anonymousFnc = function(a, b) {

}

// CALL
anonymousFnc(1, 2)

function calculator(num, num1, operation) {
    let result = operation(num, num1);
    return result;
}

let result = calculator(2, 2, function(num, num1) {
    return num + num1;
});

let result1 = calculator(5, 5, function(a, b) {
    let body = document.getElementsByTagName('body');
    body[0].innerText = 'Nekakov text';
    let result = a * b;
    return result;
});
// substract();
let substract = function(c, d) {
    return c - d;
}
// console.log(substract);
// console.log(substract(10, 3));
// console.log(calculator(4, 2, substract));

// console.log(result);


// normal fnc declaration
function fnc1(a, b) {
    return a + b;
}
// anonymous fnc declaration
let abc = function(a, b) {
    return a + b;
}
// arrow fnc
let arrowFnc = (a, b) => a + b;
let arrowFnc1 = (a, b) => console.log(a + b);

fnc(1, 1);
console.log(arrowFnc(5, 5));

calculator(2, 2, function(num, num1) {
    return num * num1;
});
calculator(5, 5, (a, b) => a * b);

let multipleLineArrowFnc = () => {
    let a = 10;
    let obj = {
        name: 'Trajan'
    };

    return a;
}