// https://swapi.py4e.com/api/films/
async function fetchFilms(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch films");
    }
    const data = await response.json();
    console.log(data);
    // RENDER FILMS
    renderFilms(data.results);
  } catch (error) {
    console.log("Error", error.message);
  }
}

// Function to render the fimls dynamically
function renderFilms(films) {
  const filmsContainer = document.getElementById("filmsContainer");
  filmsContainer.innerHTML = "";

  for (const film of films) {
    const card = document.createElement("div");
    card.classList.add("film-card");

    const title = document.createElement("h2");
    title.textContent = film.title;

    const openingCrawl = document.createElement("p");
    openingCrawl.textContent = film.opening_crawl;

    card.appendChild(title);
    card.appendChild(openingCrawl);

    filmsContainer.appendChild(card);
  }
}

function clearContent() {
  const filmsContainer = document.getElementById("filmsContainer");
  filmsContainer.innerHTML = "";
}

document
  .getElementById("fetchFilmsButton")
  .addEventListener("click", function () {
    fetchFilms("https://swapi.py4e.com/api/films/");
  });

document
  .getElementById("clearFilmsButton")
  .addEventListener("click", function () {
    clearContent();
  });
