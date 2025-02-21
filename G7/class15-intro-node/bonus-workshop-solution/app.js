console.log("works");

const app = () => {
  const COUNTRIES_ALL_URL = "https://restcountries.com/v3.1/all";
  const COUNTRIES_NAME_URL = "https://restcountries.com/v3.1/name";
  const EUROPE_URL = "https://restcountries.com/v3.1/region/europe";
  const MECEDONIA_URL = "https://restcountries.com/v3.1/name/macedonia";

  const searchInputEl = document.querySelector("#searchInput");
  const searchBtn = document.querySelector("#searchBtn");
  const cardsContainerEl = document.querySelector(".cards-container");
  const europeBtn = document.querySelector("#europeBtn");
  const neighbourBtn = document.querySelector("#neighbourBtn");
  const macedoniaBtn = document.querySelector("#macedoniaBtn");

  let countryData = [];

  const toggleSpinner = show => {
    const spinnerContainerEl = document.querySelector(".spinner-container");

    if (show) {
      spinnerContainerEl.classList.remove("hide");
    } else {
      spinnerContainerEl.classList.add("hide");
    }
  };

  const fetchCountries = async url => {
    toggleSpinner(true);

    try {
      const res = await fetch(url);

      if (res.status === 404) throw "Country Not Found";

      const data = await res.json();

      toggleSpinner(false);

      return data;
    } catch (error) {
      toggleSpinner(false);
      throw new Error(error);
    }
  };

  const renderCountryData = (countries, element) => {
    element.innerHTML = countries
      .map(country => {
        const languages = country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A";

        const currencies = country.currencies
          ? Object.values(country.currencies)
              .map(obj => obj.name)
              .join(", ")
          : "N/A";

        console.log(currencies);

        return `
        <div class="card">
          <div class="card-flag">
            <img src="${country.flags.png}" alt="a country flag" />
          </div>
          <div class="card-info">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population}</p>
            <p>Capital: ${country.capital ? country.capital[0] : "N/A"}</p>
            <p>Area: ${country.area} km<sup>2</sup></p>
            <p>Languages: ${languages}</p>
            <p>Currencies: ${currencies}</p>
          </div>
        </div>`;
      })
      .join("");
  };

  const renderErrorMsg = (error, element) => {
    element.innerHTML = `<h2 class="error">${error}</div>`;
  };

  searchBtn.addEventListener("click", async () => {
    try {
      const searchValue = searchInputEl.value;

      if (searchValue) {
        countryData = await fetchCountries(
          `${COUNTRIES_NAME_URL}/${searchValue}`
        );
      } else {
        countryData = await fetchCountries(COUNTRIES_ALL_URL);
      }

      console.log(countryData);
      renderCountryData(countryData, cardsContainerEl);
    } catch (error) {
      //Render the error msg here
      renderErrorMsg(error, cardsContainerEl);

      console.log(error);
    }

    searchInputEl.value = "";
  });

  europeBtn.addEventListener("click", async () => {
    try {
      countryData = await fetchCountries(EUROPE_URL);

      renderCountryData(countryData, cardsContainerEl);
    } catch (error) {
      renderErrorMsg(error, cardsContainerEl);
    }
  });

  macedoniaBtn.addEventListener("click", async () => {
    try {
      countryData = await fetchCountries(MECEDONIA_URL);

      renderCountryData(countryData, cardsContainerEl);
    } catch (error) {
      renderErrorMsg(error, cardsContainerEl);
    }
  });

  neighbourBtn.addEventListener("click", async () => {
    try {
      countryData = await fetchCountries(EUROPE_URL);

      //Filter out only the countries that are neighbours to macedonia
      const mkdBorders = countryData.find(
        country => country.cca3 === "MKD"
      )?.borders;

      countryData = countryData.filter(country =>
        mkdBorders.includes(country.cca3)
      );

      renderCountryData(countryData, cardsContainerEl);
    } catch (error) {
      renderErrorMsg(error, cardsContainerEl);
    }
  });
};
app();
