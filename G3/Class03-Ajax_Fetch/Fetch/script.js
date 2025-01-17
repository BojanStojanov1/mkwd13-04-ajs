// https://v2.jokeapi.dev/joke/Any?amount=2
function getJokes(jokesUrl, jokesCount = 1) {
  fetch(`${jokesUrl}?amount=${jokesCount}`)
    .then(function (response) {
      const parsedResponse = response.json();
      return parsedResponse;
    })
    .then(function (data) {
      console.log(data);
      const jokesContainer = document.getElementById("jokesContainer");
      // Clear existing jokes
      jokesContainer.innerHTML = "";
      if (jokesCount === 1) {
        // Only one joke selected
        createJokeCard(jokesContainer, data);
      } else {
        for (const joke of data.jokes) {
          createJokeCard(jokesContainer, joke);
        }
      }
    })
    .catch(function (error) {
      console.log("Error fetching jokes", error);
    });
}

// Render joke/s
function createJokeCard(container, jokeObject) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h2");
  title.textContent = `Category: ${jokeObject.category}`;
  card.appendChild(title);

  // Different implementation depending on the joke type
  if (jokeObject.type === "single") {
    const jokeText = document.createElement("p");
    jokeText.textContent = jokeObject.joke;
    card.appendChild(jokeText);
  } else {
    const setupText = document.createElement("p");
    setupText.textContent = jokeObject.setup;

    const deliveryText = document.createElement("p");
    deliveryText.textContent = jokeObject.delivery;
    card.appendChild(setupText);
    card.appendChild(deliveryText);
  }
  container.appendChild(card);
}

// getJokes("https://v2.jokeapi.dev/joke/Any", 5);

const getJokesButton = document.getElementById("getJokesButton");
getJokesButton.addEventListener("click", function () {
  const jokesCount = document.getElementById("jokesCount").value;
  const parsedJokesCount = parseInt(jokesCount);
  getJokes("https://v2.jokeapi.dev/joke/Any", parsedJokesCount);
});
