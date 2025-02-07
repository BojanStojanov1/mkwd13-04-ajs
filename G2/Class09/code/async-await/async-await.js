console.log("======================= ASYNC / AWAIT =======================");
// `async/await` is a modern way to handle asynchronous operations in JavaScript
// It is built on top of Promises and provides a cleaner, more readable syntax for writing asynchronous code
// Avoids deeply nested `.then()` chains (Promise chaining)

console.log("");
console.log("============ Basic Example of async/await ============");

// ===> Example with Promises

function getDataPromise() {
    return new Promise((resolve, reject) => {
        // throw new Error("Something bad happened")
        let response = {
            message: "Data fetched successfully !",
            statusCode: 200
        }
        if (response.statusCode >= 400) {
            reject("Fetching data failed !")
        }
        resolve(response)
    });
}

// getDataPromise()
//     .then(data => console.log("Response object :", data))
//     .catch(error => console.log("ERROR: ", error))

// ===> Example with async/await    
// The getDataAsync function is marked as async (using keyword 'async'), which means it always returns a Promise !!!

async function getData() {
    let response = {
        message: "Data fetched successfully !",
        statusCode: 200
    }
    // setTimeout(() => {
    //     console.log("Fetching data...");
    // }, 3000);
    return response;
}

async function processAsyncTask() {
    debugger;
    console.log("Fetching data started...")
    // `await` pauses execution until the Promise resolves
    let data = await getData();
    console.log("Fetching data finished...")
    console.log("Here is the data");
    console.log(data);
}
// processAsyncTask()




console.log("");
console.log("============ Fetch Example with async/await ============");

let apiUrl = "https://fakestoreapi.com/products/1";

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(product => console.log(product))
//     .catch(error => console.log("ERROR !", error))
//     .finally(() => console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`));

// NOTE: The try-catch block is used in JavaScript for handling unexpected errors !!!
let fetchProduct = async () => {
    try {
        let response = await fetch(apiUrl);
        let product = await response.json();
        return product;
    }
    catch (error) {
        console.log("ERROR OCCURED !", error);
    }
    finally {
        console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`)
    }
}

// let product = fetchProduct(); // here 'product' is a Promise
// let product = await fetchProduct(); // ERROR => can't use 'await' at top level

(async () => {
    let product = await fetchProduct();
    // console.log(product);
})()

let getJokeAsync = async () => "Knock Knock! Who's there? Async! Async Who? Async Await :D NOT FUNNY!";

document.querySelector("button").addEventListener("click", async () => {
    let product = await fetchProduct();
    console.log(product);
    let joke = await getJokeAsync();
    console.log(joke);
})


console.log("");
console.log("============ Async/Await vs Promises (Steps example) ============");

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 3000);
    })
}

function step2() {
    throw new Error("Step 2 failed!");
    return new Promise((resolve, reject) => {
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

async function runSteps() {
    try {
        await step1();
        await step2();
        await step3();
    } catch (error) {
        console.log("ERROR !");
    }
}

runSteps();


console.log("===== End of script =====");