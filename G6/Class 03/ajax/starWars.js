// Create a button
// When the button is clicked, call the StarWars api for the first person. 
// Print the person name in an **h1** tag. 
// Print the person stats in a **table**:
// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1 

let btn = document.getElementById("btn");


function printName(data){
    let fullname = document.getElementById("name");
    fullname.innerText = data.name;
}

function printStats(data){
    let height = document.getElementById("height");
    let mass = document.getElementById("mass");
    let eyeColor = document.getElementById("eyeColor");
    let hairColor = document.getElementById("hairColor");

    height.innerText = `${data.height}cm`;
    mass.innerText = `${data.mass}kg`;
    eyeColor.innerText = data.eye_color; 
    hairColor.innerText = data.hair_color;
}

btn.addEventListener("click", function(){
    fetch("https://swapi.dev/api/people/1") //Promise
    .then(function(response){
        response.json() //Promise
        .then(function(data){
            console.log(data); //data is a js object
            printName(data);
            printStats(data);
        })
        .catch(function(errorParse){
            console.log(errorParse);
        })
    })
    .catch(function(error){
        console.log(error);
    })

})