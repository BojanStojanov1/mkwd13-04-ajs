/**
 * JS is 
 * asynchronous, 
 * non-blocking, 
 * single-threaded programming language
 */


// setTimeout => will delay execution of some code for given time
// setTimeout(function(){});

// setTimeout(() => {
//     console.log('Hello world');
// }, 3000); // 3000 ms => 3s


// setTimeout(function(){
//     console.log('Second timeout')
// }, 4000) // 4000ms => 4s


// setInterval => will execute some code on given interval time;

let count = 0
// const interval = setInterval(() => {
//     console.log("Count is", count)
//     count++
// }, 1000) // 1000ms => 1s


const stopButton = document.getElementById("stopInterval");

stopButton.addEventListener("click", () => {
    // clearInterval comes out of the box from JS
    clearInterval(interval);
});



console.log("First message");
console.log("Second message");

setTimeout(() => {
    console.log("Third message")
}, 2000);

setTimeout(() => {
    console.log('Results fetched')
}, 5000);

console.log('Forth message');

function three(){
    console.log('3')
};
function two (){
    three()
};
function one(){
    two()
};

/** // LAST IN FIRST OUT (CALL STACK)
 * console.log(3)
 * three
 * two
 * one
 */

console.log("*** CALLBACKS ***");

const childFunction = () => {
    console.log("First Child function used as a callback")
};

const secondChildFunction = () => {
    console.log("Second child function as callback")
};

// Parametar callback will be a FUNCTION
const parentFunction = (callback) => {
    console.log('Parent function');
    callback()
};

parentFunction(childFunction); // reference to the function (name of the function)

parentFunction(secondChildFunction);



// REAL CALLBACK USAGE

/**
 * https://swapi.dev/api/starships/
 * https://swapi.dev/api/films/
 * https://swapi.dev/api/people/
 */

// the callback will be printing function
function makeApiRequest(url, callback){
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        callback(result)
    })
};


function printJedi(jediResult){
    console.log('Callback print jedi', jediResult)
};

function printFilms(filmsResult){
    console.log('Callback print films', filmsResult)
}

function printStarships(starshipsResult){
    console.log('Callback starship result', starshipsResult)
};

makeApiRequest("https://swapi.dev/api/people/", printJedi);

makeApiRequest("https://swapi.dev/api/films/", printFilms);

makeApiRequest("https://swapi.dev/api/starships/", printStarships);


 