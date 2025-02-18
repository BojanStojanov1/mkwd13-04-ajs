class ApiService {
    #_API_KEY = "2095b65c75e8d13fe9e3b0e095b36936";
    #_BASE_URL = "https://api.openweathermap.org/data/2.5/";

    #_searchPollution = async (lat, lon) => {
        const API_URL = `${this.#_BASE_URL}air_pollution?lat=${lat}&lon=${lon}&appid=${this.#_API_KEY}`;

        const response = await fetch(API_URL);
        const result = await response.json();
        return result
    }

    #_searchCityForecast = async (cityName) => {
        const API_URL = `${this.#_BASE_URL}forecast?q=${cityName}&units=metric&appid=${this.#_API_KEY}`

        const response = await fetch(API_URL);
        const result = await response.json();

        return result
    }

    searchForecast = async (cityName = "Skopje") => {
        try {
            // First request for forecast
            const result = await this.#_searchCityForecast(cityName);
            console.log(result)

            const lat = result.city.coord.lat;
            const lon = result.city.coord.lon

            const resultPolution = await this.#_searchPollution(lat, lon);
            // TODO: Calculate the quallity of the AIR
            // Reasource:  https://openweathermap.org/api/air-pollution
            console.log(resultPolution);

            const results = {
                forecast: result,
                pollution: resultPolution
            };

            return results
        }
        catch (error) {
            console.error("Error happened: ", error)
        }
    };
};

export { ApiService }