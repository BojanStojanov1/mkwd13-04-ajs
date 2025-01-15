const jokeBtn = document.getElementById("jokeBtn");
const jokeContainer = document.getElementById("jokeContainer");

jokeBtn.addEventListener("click", async function () {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_jokeasdasdsd"
    );
    console.log(response);

    if (!response.ok) {
      console.error("The api request failed!");
    }

    const data = await response.json();

    console.log(data);

    jokeContainer.innerHTML = `
    <p>Setup: ${data.setup}</p>
    <p>Punchline: ${data.punchline}</p>
    `;
  } catch (error) {
    console.error(error);
    jokeContainer.textContent = "Oops! Something went wrong, try again later!";
  }
});
