/*
## Movies renting App

- Create a movie renting app
- There should be an array of movie names
- There should be an input and a search button
- When the person enters a name of a movie it should search the array
- If the name exists it should show an H1 element that says: "The movie can be rented" in green text
- If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
- The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
*/

//1. Selectors
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const displayContainerEl = document.querySelector(".display-container");

console.log(searchInput, searchBtn, displayContainerEl);

//2. Data
const movieNames = [
  "The Matrix",
  "The Matrix 2",
  "The Matrix 3",
  "Jaws",
  "The Godfather",
  "Barbie",
  "LOTR",
  "Oppenheimer",
  "Deerhunter",
  "Chinatown",
  "Star Wars Episode IV: A New Hope",
  "Se7en",
];

//3. Functions
function searchArray(searchValue, array) {
  for (let item of array) {
    if (searchValue.toLowerCase() === item.toLowerCase()) return item;
  }
}

function renderHeading(movieName, searchValue, containerEl) {
  const headingEl = document.createElement("h1");

  if (movieName) {
    //Green title with movie name
    headingEl.innerText = `The movie: ${movieName} can be rented.`;
    headingEl.style.color = "green";
  } else {
    //Red title with search term
    headingEl.innerText = `The searched movie: ${searchValue} can't be rented sorrry`;
    headingEl.style.color = "red";
  }

  containerEl.innerHTML = "";
  containerEl.appendChild(headingEl);
}

//4. Listeners
searchBtn.addEventListener("click", function () {
  console.log("search clicked");

  const searchValue = searchInput.value;

  searchInput.value = "";

  const foundMovie = searchArray(searchValue, movieNames);

  renderHeading(foundMovie, searchValue, displayContainerEl);

  console.log("Found Value/Movie", foundMovie);
});
