// Wrap all html elements that we need in an object
// Note: to access a specific element use the dot notation (ex. html.searchInput)
let html = {
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  resetBtn: document.getElementById("resetBtn"),
  spinner: document.getElementById("spinner"),
  cardContainer: document.getElementById("cardContainer"),
  notification: document.getElementById("notification"),
  btnEurope: document.getElementById("btnEurope"),
  btnNeighbors: document.getElementById("btnNeighbors"),
  btnMacedonia: document.getElementById("btnMacedonia"),
};

// This function is responsible for fetching the data from the server via api request
async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Helper function that formats the country name in a format suitable for wikipedia url (with underscore _)
// ex. https://en.wikipedia.org/wiki/North_Macedonia
function prepareWikiSearchValue(countryName) {
  return countryName.split(" ").join("_");
}

// Function responsible for rendering the country card
function createCard(country) {
  return `
    <div class="column margin-bottom">
      <div class="info-card">
          <img src="${country.flags.png}" alt="${
    country.name.common
  } Flag" class="info-image">
          <div class="info-body">
              <h5 class="info-title">${country.name.common}</h5>
              <p class="info-text">
                ${country.name.common} is a country with a population of ${
    country.population
  } and the capital city is ${country.capital?.[0] || "unknown"}.
              </p>
          </div>
          <div class="info-footer">
              <small class="text-muted">Open on 
                <a href="https://en.wikipedia.org/wiki/${prepareWikiSearchValue(
                  country.name.common
                )}" target="_blank">Wikipedia</a>
              </small>
          </div>
      </div>
    </div>`;
}

// Function that toggles spinner (controlls when it will be displayed, and when it will be hidden)
function toggleSpinner(showSpinner) {
  html.spinner.style.display = showSpinner ? "block" : "none";
}

// Event that handles the initial display of all countries on page load - thats why we use the event DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
  try {
    toggleSpinner(true);
    const countries = await getData();
    countries.forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
  } catch (error) {
    console.error(error);
  } finally {
    // We want to hide the loader regardless if we got a successful response or an error - we don't want to leave it spinning endlessly
    toggleSpinner(false);
  }
});

// Event listener for the "Europe" button - should render only counries whose region is "Europe" (look for the region property in the response data)
html.btnEurope.addEventListener("click", async () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  try {
    const countries = await getData();
    const filteredCountries = countries.filter(
      (country) => country.region === "Europe"
    );
    filteredCountries.forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
  } catch (error) {
    console.error(error);
  } finally {
    // We want to hide the loader regardless if we got a successful response or an error - we don't want to leave it spinning endlessly
    toggleSpinner(false);
  }
});

// Event listener for the "Neighbors" button
html.btnNeighbors.addEventListener("click", async () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  try {
    const countriesData = await getData();
    const filteredCountries = countriesData.filter((country) =>
      country.borders?.includes("MKD")
    );
    filteredCountries.forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
  } catch (error) {
    console.error(error);
  } finally {
    // We want to hide the loader regardless if we got a successful response or an error - we don't want to leave it spinning endlessly
    toggleSpinner(false);
  }
});

// Event listener for the "Macedonia" button
html.btnMacedonia.addEventListener("click", async () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  try {
    const countryData = await getData();
    // Use the find HOF to locate the country Macedonia
    const result = countryData.find((country) =>
      country.name.common.includes("Macedonia")
    );
    if (result) {
      html.cardContainer.innerHTML += createCard(result);
    } else {
      html.notification.innerHTML =
        "<div class='alert-danger'>Country not found</div>";
    }
  } catch (error) {
    console.error(error);
  } finally {
    // We want to hide the loader regardless if we got a successful response or an error - we don't want to leave it spinning endlessly
    toggleSpinner(false);
  }
});

// Finction responsible for handling the searching countries by name
async function searchCountriesByName(countryName) {
  toggleSpinner(true);

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!response.ok) {
      throw new Error("Invalid country name");
    }
    const countries = await response.json();
    html.cardContainer.innerHTML = ""; // Clear previous cards on success
    html.notification.innerHTML = "";
    countries.forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
  } catch (error) {
    html.cardContainer.innerHTML = ""; // Clear previous cards on error
    html.notification.innerHTML =
      "<div class='alert-danger'>You entered an invalid or empty name!</div>";
  } finally {
    toggleSpinner(false);
  }
}

// Event listener for the button responsible for triggering search country by name
html.searchBtn.addEventListener("click", () => {
  searchCountriesByName(html.searchInput.value);
});

// If we want to reset the search, we can add logic for resetting all containers
html.resetBtn.addEventListener("click", () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  html.searchInput.value = "";
});
