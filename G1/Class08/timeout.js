let first = 5;

// call stack execution order

function second() {
    debugger;
    let a = 1;
    let b = third(1, 2);
    return a + b;
}

function third(a, b) {
    let c = 3;
    return a + b + c;
}

// let fourth = second();



// setTimeout(() => {
//     console.log('Hi from timeout');
// }, 3000);

function printName(name, callback) {
    console.log('Hello ' + name);
    setTimeout(() => {
        callback();
    }, 1000);
}

// printName('Trajan', () => {
//     console.log('Im a simple callback');
// });



// let itnval = setInterval(() => {
//     console.log('Interval');
// }, 500);
// console.log(itnval);

document
        .getElementById('btn')
        .addEventListener('click', function() {
            clearInterval(itnval);
        });


// setTimeout(() => {
//     console.log('first');
//     setTimeout(() => {
//         console.log('second');
//         setTimeout(() => {
//             console.log('third');
//             setTimeout(() => {
//                 console.log('fourth');
//                 setTimeout(() => {
//                     console.log('fifth');
//                     setTimeout(() => {
//                         console.log('a');
//                     }, 2000);
//                     setTimeout(() => {
//                         console.log('b');
//                     }, 1000);
//                 }, 5000);
//             }, 500);
//         }, 1000);
//     }, 2000);
// }, 1000);