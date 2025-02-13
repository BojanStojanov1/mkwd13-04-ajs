import { TEST, subtract, add } from "./modules/mathUtils.js";
import * as mathUtils from "./modules/mathUtils.js";
import Helper, {
  formatCurrency,
  formatDate as formatDateTime,
} from "./modules/helpers.js";

console.log(TEST);

const subtractResult = subtract(10, 3);
console.log(subtractResult);

const addResult = add(5, 5);
console.log(addResult);
console.log(mathUtils.multiply(10, 10));

console.log(formatCurrency(99.99));
console.log(Helper.validateEmail("ivan.apostolovski@gmail.com"));
console.log(formatDateTime(new Date()));
