import {fruits, printElements} from "./data.js";
import {add} from './math.js';

printElements(fruits)
console.log('---')
printElements(['1', '2', '3'])
console.log('---')
const result = add(2, 5);
console.log(result)

const someValue = "John Doe";

export {someValue}