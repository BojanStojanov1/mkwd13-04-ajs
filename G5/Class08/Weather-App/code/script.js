const navLinks = document.getElementsByClassName('nav-link');
const pages = document.getElementsByClassName('page');
const searchBtn = document.getElementById("searchBtn");
const forecastResult = document.getElementById("forecastResult");
const tableResult = document.getElementById("tableResult");

const API_KEY = "2095b65c75e8d13fe9e3b0e095b36936"

const pollutionApiURL = (lat, lon) => {
    const API_URL_POLUTTION = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    return API_URL_POLUTTION
}

const searchPollution = async (lat, lon) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(API_URL);
    const result = await response.json();


    return result

}

const searchForecast = async (cityName = "Skopje") => {
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`

    try {
        // First request for forecast
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log(result)

        const lat = result.city.coord.lat;
        const lon = result.city.coord.lon

        // // Second request for pollution (it depends on the first one)
        // const pollutionURL = pollutionApiURL(result.city.coord.lat, result.city.coord.lon)
        // const pollutionResponse = await fetch(pollutionURL);
        // const resultPoluttion = await pollutionResponse.json();
        // console.log('polution', resultPoluttion)

        // SAME AS ABOVE BUT SHORTER
        // If we want to consume the result returned from an async function
        // we should AWAIT IT also
        const resultPolution = await searchPollution(lat, lon);
        // TODO: Calculate the quallity of the AIR
        // Reasource:  https://openweathermap.org/api/air-pollution
        console.log(resultPolution);
        printResult(result); // Prints the forecast (home page)
        printHourlyData(result.list); // Prints the hourly forecast (hourly page)
    }
    catch (error) {
        console.error("Error happened: ", error)
    }

};


// **** PRINTING FORECAST RESULT FUNCTION ****

function clearInput() {
    document.getElementById('searchInput').value = ""
};

function convertToIsoString(timestamp) {
    return new Date(timestamp).toISOString()
};

function aggregateForecastResult(result) {
    // D.R.Y => Don't repeat yourself
    let sunriseTime = convertToIsoString(result.city.sunrise * 1000);
    let sunsetTime = convertToIsoString(result.city.sunset * 1000);
    let firstMeasurement = result.list[0];
    let icon = firstMeasurement.weather[0].icon;

    // Aggregated data
    const data = {
        name: result.city.name,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        minTemp: firstMeasurement.main.temp_min,
        maxTemp: firstMeasurement.main.temp_max,
        temperature: firstMeasurement.main.temp,
        windSpeed: firstMeasurement.wind.speed,
        iconSrc: `http://openweathermap.org/img/w/${icon}.png`
    }

    return data
}

function clearElement(element) {
    element.innerHTML = ''
}

function appendContent(forecast, element) {
    // TODO: Optimize/Refactor this approach
    element.innerHTML = `
        <div>
            <div class="forecastName">
                 <h3>${forecast.name}</h3>
                 <img src="${forecast.iconSrc}" alt="weather_description" />
            </div>
           
            <p>Min temperature: ${forecast.minTemp}</p>
            <p>Max temperature: ${forecast.maxTemp}</p>
            <p>Temperature: ${forecast.temperature}</p>
            <hr />
            <p>Wind speed: ${forecast.windSpeed}</p>
            <hr />
            <p>Sunrise at: ${forecast.sunrise}</p>
            <p>Sunset at: ${forecast.sunset}</p>
        </div>
    `
};

function printResult(result) {
    clearElement(forecastResult);
    const forecast = aggregateForecastResult(result);

    appendContent(forecast, forecastResult);
    clearInput();
};


const generateTableData = (content) => {
    const td = document.createElement("td");
    td.innerHTML = content || "";

    return td
};

// **** HOURLY TABLE PRINTING IMPLEMENTATION ****

const createHourlyRow = (reading) => {
    const tr = document.createElement("tr");


    // TR FOR ICON
    const td1 = generateTableData();
    const img = document.createElement('img');
    const iconSrc = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`
    img.src = iconSrc
    td1.appendChild(img);
    tr.appendChild(td1);

    // TR FOR DATE
    tr.appendChild(generateTableData(reading.dt_txt))

    // TR FOR Min temp
    tr.appendChild(generateTableData(`${reading.main.temp_min} &#8451`));

    // TR FOR Max temp
    tr.appendChild(generateTableData(`${reading.main.temp_max} &#8451`));

    // TR FOR temp
    tr.appendChild(generateTableData(`${reading.main.temp} &#8451`));

    // TR FOR Humidity
    tr.appendChild(generateTableData(`${reading.main.humidity} %`));

    // TR FOR wind speed
    tr.appendChild(generateTableData(`${reading.wind.speed} km/h`));

    return tr;
}
function printHourlyData(hourlyData) {
    console.log(hourlyData)
    clearElement(tableResult);

    const table = document.createElement("table");
    table.classList.add("table");
    table.innerHTML += `
    <thead>
        <tr>
            <th scope="col">Icon</th>
            <th scope="col">Date</th>
            <th scope="col">Min temperature</th>
            <th scope="col">Max temperature</th>
            <th scope="col">Temperature</th>
            <th scope="col">Humidity</th>
            <th scope="col">Windspeed</th>
        </tr>
    </thead>
    `

    const tbody = document.createElement('tbody');
    hourlyData.forEach((reading) => {
        const tr = createHourlyRow(reading);

        // APPEND THE ROW IN THE TBODY
        tbody.appendChild(tr);
    })

    table.appendChild(tbody);

    tableResult.appendChild(table);
}

// ***** INVOKE THE FORECAST API FUNCTION *****
searchForecast();

// **** SINGLE PAGE APPLICATION IMPLEMENTATION ****
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


// LIGHT-DARK Mode TY Bootstrap
document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})
