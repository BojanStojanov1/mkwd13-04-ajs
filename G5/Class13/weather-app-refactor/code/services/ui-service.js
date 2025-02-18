class UIService {
    constructor(html) {
        this.html = html
    }

    #_clearInput() {
        this.html.searchInput.value = ""
    };

    #_convertToIsoString(timestamp) {
        return new Date(timestamp).toISOString()
    };

    #_aggregateForecastResult(result) {
        // D.R.Y => Don't repeat yourself
        console.log('1', result)
        let sunriseTime = this.#_convertToIsoString(result.city.sunrise * 1000);
        let sunsetTime = this.#_convertToIsoString(result.city.sunset * 1000);
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

    #_clearElement(element) {
        element.innerHTML = ''
    }

    #_appendContent(forecast, element) {
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




    #_generateTableData = (content) => {
        const td = document.createElement("td");
        td.innerHTML = content || "";

        return td
    };

    // **** HOURLY TABLE PRINTING IMPLEMENTATION ****

    #_createHourlyRow = (reading) => {
        const tr = document.createElement("tr");


        // TR FOR ICON
        const td1 = this.#_generateTableData();
        const img = document.createElement('img');
        const iconSrc = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`
        img.src = iconSrc
        td1.appendChild(img);
        tr.appendChild(td1);

        // TR FOR DATE
        tr.appendChild(this.#_generateTableData(reading.dt_txt))

        // TR FOR Min temp
        tr.appendChild(this.#_generateTableData(`${reading.main.temp_min} &#8451`));

        // TR FOR Max temp
        tr.appendChild(this.#_generateTableData(`${reading.main.temp_max} &#8451`));

        // TR FOR temp
        tr.appendChild(this.#_generateTableData(`${reading.main.temp} &#8451`));

        // TR FOR Humidity
        tr.appendChild(this.#_generateTableData(`${reading.main.humidity} %`));

        // TR FOR wind speed
        tr.appendChild(this.#_generateTableData(`${reading.wind.speed} km/h`));

        return tr;
    }

    printResult(result) {
        this.#_clearElement(this.html.forecastResult);
        const forecast = this.#_aggregateForecastResult(result);

        this.#_appendContent(forecast, this.html.forecastResult);
        this.#_clearInput();
    };

    printHourlyData(hourlyData) {
        this.#_clearElement(this.html.tableResult);

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
            const tr = this.#_createHourlyRow(reading);

            // APPEND THE ROW IN THE TBODY
            tbody.appendChild(tr);
        })

        table.appendChild(tbody);

        this.html.tableResult.appendChild(table);
    }
};

export { UIService };