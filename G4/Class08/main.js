function simple() {
	// timeout executed after 2 seconds
	setTimeout(() => {
		console.log('First thing!');

		// this timeout is executed after 4 seconds (2 seconds after first timeout)
		setTimeout(() => {
			console.log('Second thing!')
		}, 2000);
	}, 2000)
}

simple();


// this works, but it is SUPER BAD practice. Avoid Callback Hell at all cost!
function complex() {
	setTimeout(function () {
		console.log('1. First thing, preparing for the second');
		setTimeout(function () {
			console.log('2. Second thing, preparing for the third');
			setTimeout(function () {
				console.log('3. Third thing, preparing for the forth');
				setTimeout(function () {
					console.log('4. Forth thing, preparing for the fifth');
					setTimeout(function () {
						console.log('5. Fifth thing, preparing for the Sixth');
						setTimeout(function () {
							console.log('6. Sixth and last thing');
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
};

complex();

function first(delay) {
	return new Promise((resolve, reject) => {
		if (!delay || delay < 0) {
			// reject('Invalid delay!');
			reject({
				error: 'Invalid delay!',
				errorCode: 500
			});
		}

		setTimeout(() => {
			resolve({
				message: 'Promise resolved!',
				code: 200
			});
		}, delay)
	})
}

let isLoading = true;
first(2000)
	.then((data) => {
		// .then() is used to handle successfully resolved promises
		console.log('Inside then: ', data.message);
		// isLoading = false
	})
	.catch((errorData) => {
		// .catch() is used to handle failed promises
		console.error('Error in promise: ', errorData.error);
		// isLoading = false
	})
	.finally(() => {
		// if we need to do some logic after success or failed promise, we use .finally()
		// a promise can be either fulfilled or rejected, there is no in between (except pending state, but that is the time while we are waiting for a response)
		console.log('Inside finally!');

		// example use case, we can use .finally() to hide an app loader indicating that a process is happening
		// we want to hide the loader regardless of the promise response (success or fail)
		isLoading = false;
	});

function getDocuments() {
	// this function returns a promise, since 'fetch' returns a promise
	return fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json');
}

function showDocuments(documents) {
	// uncomment this line to test API error
	// throw new Error('No documents');

	documents.forEach((doc) => {
		console.log(doc.name)
	})
}

getDocuments()
	.then((response) => {
		// 'response' is an object that contains request metadata returned from 'fetch'
		// .json() is another method that returns the actual data returned from the API
		// it also returns a promise
		return response.json();
	})
	.then((data) => {
		// 'data' is the actual data returned from the API call
		// data is whatever 'response.json()' promise resolves
		showDocuments(data);
	})
	.catch((error) => {
		// we catch the errors here
		// To test this, uncomment "throw new Error('No documents')" line in getDocuments function
		// any thrown error will be cought here
		console.error(error.message);
	});

function getImportantDocuments(data) {
	// we filter out the documents
	const imporantDocuments = data.filter(doc => doc.important);
	console.log(imporantDocuments);

	// we return a new promise here
	return new Promise((resolve, reject) => {

		// if there are no important documents, we reject the promise
		// Note: the documents from the API respnse will always have "important" documents, this will never be executed
		// However, we always want to safeguard our code and handle errors as we handle good code flows :)
		// Handle your errors gracefully.
		if (!imporantDocuments || imporantDocuments.length === 0) {
			// we reject the promise with an error object
			reject({
				error: 'No documents'
			});
		}

		// with setTimeout we simulate a delay of an API call of 3 seconds
		// we sumulate because the documents are already fetched
		// with this we assume that another API call is happening
		setTimeout(() => {
			// we resolve the promise with data object
			resolve({
				documents: imporantDocuments
			})
		}, 3000)
	})
}

function processDocuments() {
	// return a new promise
	return new Promise((resolve, reject) => {
		// assume some heavyweight processing is happening and that takes 2 seconds
		setTimeout(() => {
			// resolve the promise after 2 seconds
			resolve();
		}, 2000)
	})
}

getDocuments()
	.then((response) => {
		// return the promise of the .json() method which is returned from 'fetch'
		return response.json();
	})
	.then((data) => {
		// return the promise from the simulated API call
		return getImportantDocuments(data)
	})
	.then((data) => {
		console.log(data)
		// do some additional processing that takes few seconds as wel
		return processDocuments();
	})
	.then(() => {
		// we can chain .then() methods as many as we need
		// this is done for readability and better code scale
		// avoid callback hell at any cost!
	})

// new ways for handling async code
// we mark a function as 'async' with the 'async' keyword
async function getDocumentsv2() {
	// then we use 'await' for the promise to be resolved
	// similarly to a variable assignment, we assign the response of the promise in a variable
	// the code is "blocked" at 'await' until the promise is resolved
	let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");

	// response.json() is another promise
	// so we also use 'await' to wait for that response as well
	let data = await response.json();

	console.log(data)
}

// async functions are called same as regular functions
// they look like regular functions, but the code inside is handled asyncronously
getDocumentsv2();


function first() {
	console.log('First function');

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('First function resolved');
		}, 2000)
	});
}

function second() {
	console.log('Second function called');
}

async function runFunctions() {
	// code is "blocked" at await, until first() resolves the promise
	let result = await first();

	// this is logged after first() is resolved
	console.log(result);

	// second() is also NOT executed until first() resolves (or any async call after that)
	second();
}

function runFunctions2() {
	console.log('Run fn2')
}

runFunctions();
// runFunctions2 is executed normally, does NOT wait on runFunctions code at all
runFunctions2();

// handling errors
try {
	// any code inside the try-block is executed
	// if there is any sort of error (promise reject, syntax error, etc...)
	// the error is handled in the catch() block
	new Promise((resolve, reject) => {
		// we can throw an error
		// throw new Error('Greska!')

		// reject a promise
		setTimeout(() => {
			reject('Error!')
		}, 2000)

		// or simply have invalid JavaScript
		// let test = nesto;
	})
} catch (error) {
	// all errors will be handled here
	console.log(error)
}
