let button = document.getElementById("fetchStudentsBtn");

button.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json") //returns a promise
        .then(function (response) { //this is connected to the fetch
            //Success
            //response is a whole object that was sent from the server and that contains data in json format
            console.log(response);
            // .json() reads and parses the json data from the response object and .json returns a promise
            //because it is a promise, we need then and catch to handle the possible scenarios from that promise
            response.json()
                .then(function (data) { //this is connected to the .json
                    //Success in getting and parsing the json data from the response
                     //now we can work with the data
                    console.log(data); //the data parsed as a javascript 
                    console.log(data.academy);
                    for(let student of data.students){
                        console.log(student);
                    }
                })
                .catch(function (unsuccessfullParse) { //this is connected to the .json
                    //If there was an error during the getting or parsing the json data from the response that was already given back by the server
                    console.log(unsuccessfullParse);
                })
        })
        .catch(function (unsuccessfullResponse) { //this is connected to the fetch
            //If an error in the call happens
            console.log(unsuccessfullResponse);
        })
})

