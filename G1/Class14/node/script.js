// console.log('Hello from node.js ==================');


// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('Trajan');

// console.log(document);
// console.log(window);

const say = require('./say');

// console.log(say);

// console.log(say.sayHello('Trajan'));
// console.log(say.sayBye('Filip'));

const { sum, substract, multiply } = require('./calculator');
// const { sobiranje: sum, odzemanje: substract, mnozenje: multiply } = require('./calculator');

// console.log(sum(1, 2));


// WORKING WITH FILE SYSTEM

const textService = require('./textService');

// textService.addText('Hello from Qinshift Academy Group 1');

// textService.appendText('We are learning Node.js');

let textFileContent = textService.readText();
console.log(textFileContent);