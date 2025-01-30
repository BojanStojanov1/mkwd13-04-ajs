//call stack - LIFO

function sayHi(){
    console.log("Hi");
}

function greeting(){
    console.log("Our first greeting!");
    sayHi();
    console.log("Our second greeting");
}

greeting(); 

//Synchronous executing
function firstGreeting(){
    console.log("First greeting")
}

function secondGreeting(){
    console.log("Second greeting")
}

firstGreeting();
secondGreeting();

//Asynchronous executing

console.log("======setTimeout========");

function hello(){
    setTimeout(() => console.log("Hello from Hello function"), 4000); //it will wait for 4 seconds
}

function hi(){
    console.log("Hi");
}

hello();
hi();

function first() {
    setTimeout(() => 
        { console.log("First"); 
          second(); }, 
        5000)
}

function second(){
    console.log("Second")
}

first();

let interval = setInterval(() => console.log(new Date()), 3000); //repeating every 3 seconds 
let interval2// = setInterval(() => console.log("Hello"), 7000); 

document.getElementById("ourBtn").addEventListener("click", function(){
    clearInterval(interval);
})