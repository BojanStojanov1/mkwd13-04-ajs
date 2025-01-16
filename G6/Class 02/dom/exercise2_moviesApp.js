// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movies = ["Harry Potter", "Lord of the rings", "Iron man", "Hulk", "Aquaman"];
//toLowerCase() -> harry potter == harry potter
//toUpperCase() -> HARRY POTTER == HARRY POTTER

let result = document.getElementById("result");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    //validation 
    if(!searchInput.value){
        console.log("You must enter a movie to search!");
        return;
    }

    let movieFound = searchMovies(searchInput.value);

    if(movieFound){
        result.innerText = "The movie can be rented";
        result.style.color = "green";
    }else{
        result.innerText = "The movie can't be rented";
        result.style.color = "red";
    }
})

function searchMovies(searchText){
    for(let movie of movies){
        //if(movie.toLowerCase() == searchText.toLowerCase())
        if(movie.toUpperCase() == searchText.toUpperCase()){
            return true; //if it finds a match it will return true
        }
    }
    return false; //if the for ended and it did not return true, it did not find the movie
}

// function searchMovies(searchText){
//     let movieFound = false; //default value of the flag
//     for(let movie of movies){
//         if(movie.toUpperCase() == searchText.toUpperCase()){
//             movieFound = true; //if the movie is fount -> the flag becomes true
//             break;
//         }
//     }
//     if(movieFound){
//         result.innerText = "The movie can be rented";
//         result.style.color = "green";
//     }else{
//         result.innerText = "The movie can't be rented";
//         result.style.color = "red";
//     }
// }