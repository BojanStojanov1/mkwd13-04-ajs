console.log("==================== Callback Functions ====================");
// => function that is passed as an argument to another function and is expected to be executed after some async operation is completed

// Common use-cases:

// 1) setTimeout
function handleTimeout() {
    console.log("Hello after 3 seconds");
}
// setTimeout(() => {
//     console.log("Hello after 3 seconds");
// }, 3000)
setTimeout(handleTimeout, 3000)


// 2) Event Handling 

// document.querySelector("button").addEventListener("click", () => {
//     console.log("Button is clicked!");
// })
function handleButtonClick() {
    console.log("Button is clicked!");
}
document.querySelector("button").addEventListener("click", handleButtonClick)


// 3) Asynchronous Operations
function performAsyncOperation(callback) {
    console.log("Async operation started");
    setTimeout(() => {
        const result = "Async operation completed"
        callback(result);
    }, 5000);
    console.log("... Processing ...");
}

function printResult(item) {
    console.log(item);
}
performAsyncOperation(printResult);
debugger;
performAsyncOperation(console.log);


// 4) Higher Order Functions callbacks
let testArray = [1, 2, 3, 5, 7];
testArray.forEach(n => console.log(n));


// 5) Making request to an API
// renderFunc => callback
function renderDataFromApi(url, renderFunc) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderFunc(data);
        })
}

function displayUser(user) {
    // logic for displaying user
    let h3 = document.createElement("h3");
    h3.textContent = `${user.firstName} ${user.lastName}`;
    document.body.appendChild(h3);
}

renderDataFromApi('https://dummyjson.com/users/1', displayUser)
renderDataFromApi('https://dummyjson.com/products/1', function (product) {
    console.log(product);
})
renderDataFromApi('https://dummyjson.com/products/1', product => console.log(product))
function renderProduct(product) {
    console.log(product)
}
renderDataFromApi('https://dummyjson.com/products/1', renderProduct)
// they are all doing the same thing, the only difference is the SYNTAX !


console.log("");
console.log("==================== Callback Functions vs Functions as an argument ====================");
// Callback => expected to be executed later, usually after an asynchronous operation or an event (executed asynchroniously)
// Function as an argument => not expected to be executed later (executed synchroniously)

function callbackFunc(someFunc) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        someFunc();
    }, 3000);
    console.log("Processing");
}

callbackFunc(() => console.log("Yeey! We have the data! Let's delete it :D"))

function functionArguments(func1, func2) {
    console.log("Executing functions");
    func1();
    func2();
}
debugger
functionArguments(() => console.log("Hello from Func1"), () => console.log("Hello from Func2"))