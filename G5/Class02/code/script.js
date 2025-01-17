
console.log('*** JSON ***');

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 33
};

console.log(person);
console.log(person.firstName);
console.log(typeof person); // object

console.log('*** JSON STINGIFY ***');
let personAsJson = JSON.stringify(person);
console.log(personAsJson);
console.log(typeof personAsJson) // string

console.log(personAsJson.firstName) // undefined

console.log('*** JSON PARSE ***');

let secondPersonAsJson = `{"firstName": "Bob","lastName": "Bobski","age":37}`

console.log(secondPersonAsJson);
console.log(typeof secondPersonAsJson) // string
console.log(secondPersonAsJson.firstName) // undefined;

let secondPerson = JSON.parse(secondPersonAsJson);
console.log(secondPerson);
console.log(typeof secondPerson) // object
console.log(secondPerson.firstName) // Bob


console.log('*** ACCESSING CROSS FILE ***');
console.log(todos); // DECLARED IN APP.JS
returnFullName('Lee', 'Huuu'); // DECLARED IN APP.JS

console.log('*** API REQUESTS ***');

// API REQUESTS

// GET REQUEST => Retrives data from an API
// POST REQUEST => Sends new data to an API
// PUT/PATCH REQUEST => Update exising data
// DELETE REQUEST => Remove existing data

const xhrBtn = document.getElementById('xhrBtn');
const xhrDivResult = document.getElementById('xhrResult');

// https://swapi.dev/api/people/

xhrBtn.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    // API REQUEST
    // open(HTTP_METHOD, EXTERNAL_ADDRESS);
    xhr.open("GET", "https://swapi.dev/api/people/")
    xhr.send()

    // API RESPONSE (JSON);
    xhr.onload = function(){
        console.log(xhr.response)

        let parsedResponse = JSON.parse(xhr.response);
        console.log(parsedResponse)

        for(let i = 0; i < parsedResponse.results.length; i++){
            xhrDivResult.innerHTML += `<p>${parsedResponse.results[i].name}</p>`
        }
    }
});


// SAME AS ABOVE WITH FETCH
const fetchBtn = document.getElementById('fetchBtn');
const fetchDivResult = document.getElementById('fetchResult');


// DON'T DO THIS!!!

// let swapiPeopleResult = [];

// fetchBtn.addEventListener('click', function(){
//     fetch("https://swapi.dev/api/people/")
//     .then(function(response){
//         // RAW RESPONSE CONTAINING METEDATA OF THE REQUEST
//         console.log(response) 

//         let jsonResult = response.text() // WILL RETURN STRINGIFIED VALUE OF THE RESPONSE
//         console.log(jsonResult)

//         return jsonResult
//     })
//     .then(function(result) {
//         // THIS IS THE JSON RESULT
//         console.log(result);

//         let parsedResult = JSON.parse(result);
//         console.log(parsedResult);

//         swapiPeopleResult = parsedResult.results;

//         console.log('SUCCESS')
//     }) 


//     console.log('ABOUT TO PRINT')
//     for(let i = 0; i < swapiPeopleResult.length; i++){
//         fetchDivResult.innerHTML += `<p>${swapiPeopleResult[i].name}</p>`
//     }
// })



function fetchPeople( ) {
    fetch("https://swapi.dev/api/people/")
    .then(function(response){
        // RAW RESPONSE CONTAINING METEDATA OF THE REQUEST
        console.log(response) 

        let jsonResult = response.text() // WILL RETURN STRINGIFIED VALUE OF THE RESPONSE
        console.log(jsonResult)

        return jsonResult
    })
    .then(function(result) {
        // THIS IS THE JSON RESULT
        // console.log(result);

        let parsedResult = JSON.parse(result);
        console.log(parsedResult);

        let swapiPeople = parsedResult.results;
        console.log(swapiPeople)

        fetchDivResult.innerHTML = ''
        // FUNCTION TO PRINT RESULT SHOULD BE HERE
        for(let i = 0; i < swapiPeople.length; i++){
            fetchDivResult.innerHTML += `<p>${swapiPeople[i].name}</p>`
        }
    }) 
    .catch(function(error){
        // IF REQUEST WAS UNSUCCESS WE GONNA ENTER THE CATCH
        console.error('Error happened:', error)
    })
    .finally(function(){
        // NO MATTER IF THE REQUEST IS SUCCESS OR NOT 
        // FINALLY WILL EXECUTE
        console.log('IN FINALLY')
    })
}


fetchBtn.addEventListener('click', function(){
   fetchPeople()
});

// Link: https://swapi.dev/api/people/1
// Print the name, height and mass on the screen

function fetchPerson(){
    fetch("https://swapi.dev/api/people/1")
    .then(function(response) {

        return response.text() // RETURNING THE JSON VALUE OF THE RESPONSE
    })
    .then(function(result){
        // result will be the stringified json returned from the first then

        let parsedResult = JSON.parse(result);
        console.log(parsedResult)

        console.log(parsedResult.name, parsedResult.height, parsedResult.mass)

        for(let i = 0; i < parsedResult.films.length; i++){
            console.log(parsedResult.films[i])
        }
        // for(let i = 0; i < parsedResult.people.length; i++){
        //     fetchDivResult.innerHTML += `<p>${swapiPeople[i].name}</p>`
        // }
    })
}

fetchPerson()