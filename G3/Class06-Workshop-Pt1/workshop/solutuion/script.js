// CONFIGURATION OBJECT
// This object holds configuration settings for different data types (people and starships)
// including the API endpoint URLs, table headers, and functions to extract relevant fields from the data.

const CONFIG = {
  people: {
    // API endpoint for fetching people data
    url: "https://swapi.py4e.com/api/people/",
    // Table headers to display in the UI
    headers: ["Name", "Height", "Mass", "Gender", "Birth Year", "Appearances"],
    // Function to extract specific fields from each person object
    fields: (item) => [
      item.name,
      item.height,
      item.mass,
      item.gender,
      item.birth_year,
      item.films.length, // Number of films the person appears in
    ],
  },
  starships: {
    // API endpoint for fetching starships data
    url: "https://swapi.py4e.com/api/starships/",
    // Table headers to display in the UI
    headers: [
      "Name",
      "Model",
      "Manufacturer",
      "Cost",
      "People Capacity",
      "Class",
    ],
    // Function to extract specific fields from each starship object
    fields: (item) => [
      item.name,
      item.model,
      item.manufacturer,
      item.cost_in_credits,
      item.passengers,
      item.starship_class,
    ],
  },
};

// APPLICATION STATE
// This object keeps track of the current state of the application, such as the current URL being viewed and the type of data being displayed.

const state = {
  currentUrl: null, // The current API URL being displayed
  currentType: null, // The current data type ('people' or 'starships')
};

// UTILITY FUNCTIONS

const displayError = (message) => {
  const content = document.getElementById("content");
  content.innerHTML = `<div class="error">${message}</div>`;
};

const setLoading = (isLoading) => {
  const content = document.getElementById("content");
  if (isLoading) {
    // Add a loading class for styling purposes
    content.classList.add("loading");
    // If no loader exists, create one
    if (!content.querySelector(".loader")) {
      const loader = document.createElement("div");
      loader.className = "loader";
      content.appendChild(loader);
    }
  } else {
    // Remove the loading class and loader element
    content.classList.remove("loading");
    const loader = content.querySelector(".loader");
    if (loader) loader.remove();
  }
};

const fetchData = async (url) => {
  try {
    setLoading(true); // Show loader
    const response = await fetch(url); // Fetch data from API

    if (!response.ok) {
      // If response is not OK, display an error
      displayError("Something went wrong, try again later");
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Parse and return JSON data
    return await response.json();
  } catch (error) {
    // Handle any network or parsing errors
    displayError("Something went wrong, try again later");
    console.error(error);
  } finally {
    setLoading(false); // Hide loader
  }
};

const createTable = (data, type) => {
  // Validate data and type
  if (!data || (type !== "people" && type !== "starships")) {
    displayError("Invalid data type.");
    return;
  }

  const config = CONFIG[type]; // Get configuration for the specified type
  const table = document.createElement("table"); // Create table element

  // Create table header row
  const headerRow = document.createElement("tr");
  config.headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText; // Set header text
    headerRow.appendChild(header); // Append header to header row
  });
  table.appendChild(headerRow); // Append header row to table

  // Create table rows for each data item
  data.forEach((item) => {
    const row = document.createElement("tr");
    config.fields(item).forEach((field) => {
      const cell = document.createElement("td");
      cell.textContent = field; // Set cell text
      row.appendChild(cell); // Append cell to row
    });
    table.appendChild(row); // Append row to table
  });

  return table; // Return the completed table
};

const loadPage = async (url, type) => {
  const data = await fetchData(url); // Fetch data from API
  if (!data) return; // If data is null (error), exit

  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear existing content
  content.appendChild(createTable(data.results, type)); // Append new table

  // Update pagination buttons based on available next/previous pages
  document.getElementById("prevButton").disabled = !data.previous;
  document.getElementById("nextButton").disabled = !data.next;

  // Update application state
  state.currentUrl = url;
  state.currentType = type;
};

// INITIALIZATION FUNCTION
// This immediately invoked function expression (IIFE) sets up event listeners for buttons on the page.

(() => {
  // Event listener for fetching people data
  document.getElementById("fetchPeople").addEventListener("click", () => {
    loadPage(CONFIG.people.url, "people");
  });

  // Event listener for fetching starships data
  document.getElementById("fetchShips").addEventListener("click", () => {
    loadPage(CONFIG.starships.url, "starships");
  });

  // Event listener for the "Previous" pagination button
  document.getElementById("prevButton").addEventListener("click", async () => {
    if (state.currentUrl) {
      const data = await fetchData(state.currentUrl);
      if (data?.previous) loadPage(data.previous, state.currentType);
    }
  });

  // Event listener for the "Next" pagination button
  document.getElementById("nextButton").addEventListener("click", async () => {
    if (state.currentUrl) {
      const data = await fetchData(state.currentUrl);
      if (data?.next) loadPage(data.next, state.currentType);
    }
  });
})();
