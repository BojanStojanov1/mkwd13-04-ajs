//Arrays - REFERENCE
let array1 = [10, 4, 5, 2];
let array2 = array1; //pass by reference

console.log(array1);
console.log(array2);

array1[0] = 2324342;
console.log(array1);
console.log(array2);

array2[1] = 77777;
console.log(array1);
console.log(array2);

let nums = [4,5,6,7];

function changeArray(array){
    array[0] = 1111;
}

console.log("nums before:");
console.log(nums);
changeArray(nums); //let array = nums -> pass by reference
console.log("nums before:");
console.log(nums);

//Objects - REFERENCE
let obj1 ={
    prop1: "Test1"
};
console.log(obj1);

let obj2 = obj1;
console.log(obj2);

obj2.prop1 = "Updated test";
console.log(obj1);
console.log(obj2);

//By Value - numbers, strings, booleans
let a = 5;
console.log(a); //5
let b = a;
console.log(b); //5

a = 3;
console.log(a); //3
console.log(b); //5

let number = 8;

function changeValue(num){
    num = 77;
}

console.log("Number before changeValue " + number);
changeValue(number); //let num = number -> pass by value (primitive type)
console.log("Number after changeValue " + number);