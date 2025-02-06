
// PROMISES

// Function that "Works" for a certain ammount of time (the waiting simulates working)
// We create a function that returns a Promise

function work(workTime) {
    // We return a promise because we know this function will have to wait for something
    return new Promise((resolve, reject) => {
        // Validation if there is no work to be done
        if (workTime <= 0) {
            // Whatever we send in this reject it will transfer in the error parameter in the .catch() (Automatically connected)
            reject("There is no work the be done :)");
        }
        else {
            console.log("Work is being done...");
        }

        // setTimeout() represents working the ammount of time given as parameter
        setTimeout(() => {
            // Whatever we send in this resolve(), it will transfer the result parameter in the then() (Automatically connected)
            resolve("The work is done successfully!");
        }, workTime);
    })
}


function notification(text) {
    console.log("NOTIFICATION");
    console.log(text);
    console.log("NOTIFICATION")
}

// USING PROMISES
// Example to see what a promise looks like and what are its states

let promise = work(8000);
console.log(promise);
// Legit way of using this function that returns promise
// .then(anonymouseFunction(result)) - When/If the promise is resolved, the anonymouseFunction will be executed with the result from the Promise()
// .catch(anonymouseFunction(error)) - When/If the promise is rejected OR if there is any error or issue regarding the promise
// the .catch() function will be executed with the error parameter accordingly


// work(2000).then(result => {
//     console.log("The promise is resolved!");
//     notification(result);
// }).catch(error => {
//     console.log("The promise is rejected!");
//     notification(error);
// });


// work(0).then(result => {
//     console.log("The promise is resolved!");
//     notification(result);
// }).catch(error => {
//     console.log("The promise is rejected!");
//     notification(error);
// });


let testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This promise is resolved! Yeey!");
    }, 3000);
    //reject("The promise is rejected! Sorry :/");
});

// testPromise.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("The Promise() finally finished!");
// });


let documentsUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G6/Class%2008/documents.json';

function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: documentsUrl,
            success: (response) => {
                let responseParsed = JSON.parse(response);
                resolve(responseParsed);
            },
            error: (error) => {
                reject(error);
            }
        })
    })
}

function showDocuments(documents) {
    // Validation for the document types
    if (!documents && typeof (documents) != 'object') {
        throw new Error("Issue with documents!");
    }
    if(documents.length === 0){
        throw new Error("No documents found on the server!");
    }
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}MB)`);
    })
}

getDocuments().then(documents => {
    //console.log(documents);
    showDocuments(documents);
}).catch(error => {
    console.log(error);
});



console.log("====================Fetching documents from server using Fetch()==================")

fetch(documentsUrl)
.then(response => response.json())
.then(documents => {
    showDocuments(documents);
})
.catch(error => {
    console.log(error);
});






