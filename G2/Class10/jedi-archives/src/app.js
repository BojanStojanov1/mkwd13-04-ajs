// 1) DECLARE/INITIALIZE GLOBAL VARIABLES AND CONSTANTS
const BASE_API_URL = "https://swapi.dev/api/";
const swapiResource = {
    people: "people",
    starships: "starships"
}

// 2) SELECTING ELEMENTS
// const peopleBtn = document.getElementById("peopleBtn");
// const shipsBtn = document.getElementById("shipsBtn");
// const loader = document.getElementById("loader");
// const resultDiv = document.getElementById("result");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
const elements = {
    peopleBtn: document.getElementById("peopleBtn"),
    shipsBtn: document.getElementById("shipsBtn"),
    loader: document.getElementById("loader"),
    resultDiv: document.getElementById("result"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
}


// 3) FUNCTION DEFINITIONS
async function getDataAsync(resource) {
    try {
        const url = `${BASE_API_URL}${resource}?page=1`;
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        elements.resultDiv.innerHTML = `<p class="text-danger text-center">An error occurred. Please try again later.</p>`
    }
}


// 4) HANDLING EVENTS
elements.peopleBtn.addEventListener("click", async () => {
    // const people = await getDataAsync("people");
    const people = await getDataAsync(swapiResource.people);
    console.log(people);

});

elements.shipsBtn.addEventListener("click", async () => {
    // const ships = await getDataAsync("starships");
    const ships = await getDataAsync(swapiResource.starships);
})

