const countryInput = document.getElementById("countryInput");
const getDataButton = document.getElementById("getData");

function getCountryByCode(code) {
  return fetch("https://restcountries.com/v2/alpha/" + code).then((response) =>
    response.json()
  );
}

async function getBorderingCountries(borderingCountries) {
  console.log("Neighbours:");

  for (let code of borderingCountries) {
    const country = await getCountryByCode(code);
    console.log(country);
  }
}

getDataButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Country:");

  getCountryByCode(countryInput.value).then((response) => {
    console.log(response);
    getBorderingCountries(response.borders);
  });
});
