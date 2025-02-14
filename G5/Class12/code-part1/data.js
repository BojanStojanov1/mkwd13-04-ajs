import {add} from './math.js' // we can import from different files also

// Printing
const fruits = ['Banana', 'Pineapple', 'Apple'];

const printElements = (elements) => {
    console.log(add(2, 2));
    elements.forEach((element) => console.log(element))
};


export { fruits, printElements }