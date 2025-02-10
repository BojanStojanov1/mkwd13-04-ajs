console.log("======================= PROMISES =======================");
// => better way for handling asynchronous operations
// => object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// It has three states:
// 1️) Pending  - The initial state. The operation has started but has not yet completed (neither resolved nor rejected).
// 2️) Fulfilled - The operation completed successfully, and the promise is resolved with/without a value.
// 3️) Rejected  - The operation failed, and the promise is rejected with an error message.

// Commonly used for API calls, file operations, and async tasks.

console.log("");
console.log("============ Creating a Promise ============");

let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(product => console.log(product))
//     .catch(error => console.log("ERROR !", error))
//     .finally(() => console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`));

// then(), catch(), finally() are the core functionalities that make working with Promises easier
// these three methods allow you to manage asynchronous tasks more effectively and with less complexity

// ===> Example: Function returning Promise

function simplePromise() {
    let promise = new Promise((resolve, reject) => {
        // for 2 seconds the Promise would be in 'pending' state
        setTimeout(() => {
            // resolve() sets the Promise to the 'fulfilled' state
            resolve();
            // reject() sets the Promise to the 'rejected' state
            // reject(); // uncomment to try with reject
        }, 2000);
    })
    return promise;
}

simplePromise()
    // .then() runs when the Promise is fulfilled (resolve callback is executed)
    .then(() => console.log("The Promise is Fulfilled"))
    // .catch() runs when the Promise is rejected (reject callback is executed)
    .catch(() => console.log("The Promise is Rejected"))
    // .finally() runs no matter what
    .finally(() => console.log("This is executed anyway :D"))

// ===> Example: Function that simulates an asynchronous operation
function simulateAsyncTask(success) {
    return new Promise((resolve, reject) => {
        console.log("Operation started ...");
        setTimeout(() => {
            if (success) {
                // resolve(); // doesn't return value
                resolve("Task completed successfully!"); // returns string 
            } else {
                // reject(); // doesn't return value
                reject("Task failed!"); // returns string 
            }
        }, 4000);
    })
}

simulateAsyncTask(false)
    .then(message => console.log(message))
    .catch(error => console.log(error));


console.log("");
console.log("============ Chaining promises ============");

// ===> Example: Rewrite the Steps example with Promises

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 3000);
    })
}

function step2() {
    return new Promise((resolve, reject) => {
        // throw new Error("Step 2 failed!");
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 2000);
    })
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    })
}

function step4() {
    return new Promise((resolve) => {
        resolve("FINAL STEP COMPLETED")
    })
}

// ===> Chaining promises to avoid callback hell
// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => step4())
//     .then(message => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`));


console.log("");
console.log("============ Promise All ============");
// Promise.all => runs all the promises simultaneously

function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task A Completed");
        }, 5555);
    })
}

function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task B Completed");
        }, 3333);
    })
}

function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task C Completed");
        }, 1111);
    })
}

let taskCPromise = taskC();
console.log(taskCPromise);

Promise.all([taskA(), taskCPromise, taskB()]) // the order in the array matters
    .then(resultArray => {
        console.log("All tasks completed !");
        console.log(resultArray); // Task A, Task C, Task B
    })
    .catch(error => console.log("ERROR !", error));
