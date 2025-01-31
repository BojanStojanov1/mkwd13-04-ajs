const navLinks = document.getElementsByClassName('nav-link');
const pages = document.getElementsByClassName('page');
const searchBtn = document.getElementById("searchBtn");
const forecastResult = document.getElementById("forecastResult");

// FOR AIRPOLUTION USE THIS:
// https://api.openweathermap.org/data/2.5/air_pollution?lat=42&lon=21.4333&appid=2095b65c75e8d13fe9e3b0e095b36936

const searchForecast = (cityName = "Skopje") => {
    const API_KEY = "2095b65c75e8d13fe9e3b0e095b36936"
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`

    fetch(API_URL)
        .then((response) => response.json()) // response.json() will return the parsed JSON directly
        .then((result) => {
            console.log(result)
            printResult(result)

        })
};


// **** PRINTING RESULT FUNCTION ****

function clearInput() {
    document.getElementById('searchInput').value = ""
};

function printResult(result) {
    forecastResult.innerHTML = ""
    let searchValue = result.city.name;
    let sunriseTime = new Date(result.city.sunrise * 1000).toISOString(); // * 1000 we convert the value in MS
    let sunsetTime = new Date(result.city.sunset * 1000).toISOString();

    let firstMeasurement = result.list[0];
    console.log(firstMeasurement);

    let minTemp = firstMeasurement.main.temp_min;
    let maxTemp = firstMeasurement.main.temp_max;
    let temp = firstMeasurement.main.temp;
    let windSpeed = firstMeasurement.wind.speed;

    forecastResult.innerHTML = `
        <div>
            <h3>${searchValue}</h3>

            <p>Min temperature: ${minTemp}</p>
            <p>Max temperature: ${maxTemp}</p>
            <p>Temperature: ${temp}</p>
            <hr />
            <p>Wind speed: ${windSpeed}</p>
            <hr />
            <p>Sunrise at: ${sunriseTime}</p>
            <p>Sunset at: ${sunsetTime}</p>
        </div>
    `
    clearInput()
};

searchForecast();

// **** SINGLE PAGE APPLICATION IMPLEMENTATION ****

console.log(navLinks) // list of 3 nav links (<a> </a>)
console.log(pages) // list of the 3 section element


// item is the clicked nav link
const activateItem = (item) => {
    for (const element of navLinks) {
        element.classList.remove("active")
    }
    item.classList.add("active")
}

// pageElement is the section page to be displated
const showPage = (pageElement) => {
    for (let page of pages) {
        page.style.display = "none"
    }

    pageElement.style.display = "flex"
}


const registerListeners = () => {
    for (let i = 0; i < navLinks.length; i++) {
        const element = navLinks[i];

        element.addEventListener("click", () => {
            showPage(pages[i]);
            activateItem(element);
        })
    };

    searchBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const searchValue = document.getElementById('searchInput').value;
        searchForecast(searchValue);
    });
};

registerListeners();
