let button = document.getElementById("fetchAstrosBtn");

button.addEventListener("click", function () {
    fetch("http://api.open-notify.org/astros.json") //returns a promise
        .then(function (response) {
            console.log(response);
            response.json() //returns a promise
                .then(function (data) {
                    //here the data is parsed from the response and we can use it
                    for (let person of data.people) {
                        console.log(person.name);
                    }
                })
                .catch(function (errorParse) {
                    console.log(errorParse);
                })
        })
        .catch(function (error) {
            console.log(error);
        })
})