//while
console.log("========WHILE==========");
let counter = 0;
while(counter < 10){
    console.log(counter);
    counter++; //counter = counter + 1;
}

let array = ["Tijana", "Murat", "Ivan", "Viktor", "Martin"];
counter = 0; //we need to reset the counter
while(counter < array.length){
    console.log(array[counter]); //we use the counter to iterate through each element in the array
    counter++;
}

//do-while
console.log("========DO-WHILE==========");
counter=0; //reset the counter
do{
console.log(counter);
counter++;
}while(counter>10) //the condition is false, but with do-while 0 will be printed

//for
console.log("========FOR==========");
for(let i=0; i<array.length; i++){//declaration of counter; condition; increment/decrement
    console.log(array[i]);
}

for(let j=array.length-1; j>=0; j--){
    console.log(array[j]);
}

for(let element of array){
    console.log(element); //the element variable will have the value of array[0], array[1]....array[4]
}