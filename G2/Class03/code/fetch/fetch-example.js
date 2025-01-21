console.log("");
console.log("================ Fetch ================");
// => built-in JavaScript function used to make HTTP requests



// ============ Single Joke Example ============

// ===> First step when working with APIs is to actually now the API and read its documentation !!!
// JOKE API: https://v2.jokeapi.dev
// https://v2.jokeapi.dev/joke/Programming?type=single

const jokeApiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";
const getJokeBtn = document.querySelector("#get-joke-btn");
const jokeParagraph = document.querySelector("#joke-paragraph");

getJokeBtn.addEventListener("click", function () {
    fetch(jokeApiUrl)
        // The first 'then' block handles the response from the server
        .then(function (response) {
            // The 'response' is an object containing the data, but in JSON format, not yet parsed
            console.log(response);
            const parsedResponse = response.json();
            // The '.json()' method parses the JSON data from the response
            return parsedResponse;
        })
        // Once the JSON data is parsed, it's passed to the second 'then' block
        .then(function (jokeData) {
            // Here we add logic for working with the data from the response
            console.log(jokeData);
            // Display logic
            jokeParagraph.textContent = jokeData.joke;
        })
        .catch(function (error) {
            // The 'catch' block handles any errors that occur during the fetch request or while parsing
            console.log("ERROR: ", error);
        })
})


// ================ Multiple Jokes Example ================

// https://v2.jokeapi.dev/joke/Programming?type=single&amount=5

const getJokesBtn = document.getElementById("get-jokes-btn");
const jokesAmountInput = document.getElementById("jokes-amount");
const jokesContainer = document.getElementById("jokes-container");

function generateJokesList(jokesArray) {
    jokesContainer.innerHTML = "";
    const ol = document.createElement("ol");
    for (const item of jokesArray) {
        const li = document.createElement("li");
        li.textContent = item.joke;
        ol.appendChild(li);
    }
    jokesContainer.appendChild(ol);
}

function getJokes(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jokesData) {
            console.log(jokesData);
            generateJokesList(jokesData.jokes);
        })
        .catch(function (error) {
            console.log("ERROR: ", error);
        });
}

getJokesBtn.addEventListener("click", function () {
    const amount = +jokesAmountInput.value;
    // const amount = Number(jokesAmountInput.value);
    if (amount < 1) {
        return;
    }

    const url = `${jokeApiUrl}&amount=${amount}`
    getJokes(url);

    // ===> BEFORE REFACTOR
    // fetch(url)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (jokesData) {
    //         console.log(jokesData);
    //         jokesContainer.innerHTML = "";
    //         const ul = document.createElement("ol");
    //         for (const item of jokesData.jokes) {
    //             const li = document.createElement("li")
    //             li.textContent = item.joke;
    //             ul.appendChild(li);
    //         }
    //         jokesContainer.appendChild(ul)
    //     })
})