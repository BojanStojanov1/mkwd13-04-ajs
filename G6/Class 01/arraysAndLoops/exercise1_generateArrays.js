// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
// Generate an array that has all the numbers that are divisible by 3 or 6 from 1 to 1000
// Generate an array that has all the numbers that are divisible by 3 and 6 at the same time from 1 to 1000

let numbersDivisbleByThree = [];
let evenNumbersDivisbleByFour = [];
let numbersEndingWithOne = [];
let numbersDivisbleByThreeOrSix = [];
let numbersDivisbleByThreeAndSix = [];

for(let i=1; i<=1000; i++){
    if(i%3==0){
        numbersDivisbleByThree.push(i);
    }
    if(i%2==0 && i%4==0){  //if(i%4==0)
        evenNumbersDivisbleByFour.push(i);
    }
    if(i%10==1){
        numbersEndingWithOne.push(i);
    }
    if(i%3==0 || i%6==0){
        numbersDivisbleByThreeOrSix.push(i);
    }
    if(i%3==0 && i%6==0){
        numbersDivisbleByThreeAndSix.push(i);
    }
}

console.log("Numbers divisible by 3 from 1 to 1000");
console.log(numbersDivisbleByThree);

console.log("Numbers divisible by 4 from 1 to 1000");
console.log(evenNumbersDivisbleByFour);

console.log("Numbers ending with 1 from 1 to 1000");
console.log(numbersEndingWithOne);

console.log("Numbers divisible by 3 or 6 from 1 to 1000");
console.log(numbersDivisbleByThreeOrSix);

console.log("Numbers divisible by 3 and 6 from 1 to 1000");
console.log(numbersDivisbleByThreeAndSix);
