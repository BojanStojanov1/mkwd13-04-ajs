console.log("pokemon app is running");

const pokemonListEl = document.querySelector(".pokemon-list");
const pokemonCardEl = document.querySelector(".pokemon-card");

console.log(pokemonListEl, pokemonCardEl);

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

function renderPokemonList(pokemons, listEl) {
  for (let pokemon of pokemons) {
    const pokemonLi = document.createElement("li");

    pokemonLi.innerText = pokemon.name;

    listEl.appendChild(pokemonLi);

    pokemonLi.addEventListener("click", function () {
      fetchPokemonDetails(pokemon.url);
    });
  }
}

function renderPokemonDetails(pokemonDetails, cardEl) {
  cardEl.innerHTML = `
        <h3>${pokemonDetails.name}</h3>
        <img src="${pokemonDetails.sprites.front_default}" alt="a sprite of a pokemon"/>
    `;
}

function fetchPokemons() {
  fetch(POKEMON_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPokemonList(data.results, pokemonListEl);
    });
}

function fetchPokemonDetails(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("Pokemon details data", data);
      renderPokemonDetails(data, pokemonCardEl);
    });
}

fetchPokemons();
