const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const LIMIT = 50;

const pokemonContainer = document.getElementById("pokemon-container");

function displayError(message) {
  pokemonContainer.innerHTML = "";

  const errorMsg = document.createElement("p");
  errorMsg.textContent = `Error: ${message}`;
  errorMsg.style.color = "red";
  errorMsg.style.textAlign = "center";
  errorMsg.style.fontSize = "18px";
}

async function fetchPokemons() {
  try {
    const response = await fetch(`${BASE_URL}?limit=${LIMIT}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    const pokemons = data.results;

    // slow because we're pinging the api 50 separate times for each pokemon
    // const allPokemons = [];

    // for (let pokemon of pokemons) {
    //   const pokemonDetails = await fetchPokemonDetails(pokemon.url);
    //   allPokemons.push(pokemonDetails);
    // }

    // a bit faster approach
    // const allPromises = [];

    // for (let pokemon of pokemons) {
    //   allPromises.push(fetchPokemonDetails(pokemon.url));
    // }

    // const allPokemons = await Promise.all(allPromises);

    // fastest approach
    const pokemonDetails = await Promise.all(
      pokemons.map((pokemon) => fetchPokemonDetails(pokemon.url))
    );

    displayPokemons(pokemonDetails);
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    displayError(error.message);
  }
}

async function fetchPokemonDetails(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
    };
  } catch (error) {
    console.error("Error fetching Pokemon details", error);
  }
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const img = document.createElement("img");
  img.src = pokemon.image;
  img.alt = pokemon.name;

  const name = document.createElement("h3");
  name.textContent = pokemon.name;

  card.appendChild(img);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

function displayPokemons(pokemons) {
  pokemonContainer.innerHTML = "";

  for (let pokemon of pokemons) {
    createPokemonCard(pokemon);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPokemons();
});
