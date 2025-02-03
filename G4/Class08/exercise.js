const input = document.getElementById('country-code');
const btn = document.getElementById('btn');

async function getCountryByCode(code) {
	const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	return response.json();
}

btn.addEventListener('click', () => {
	getCountryByCode(input.value)
		.then((country) => {
			console.log(country)

			country[0].borders.forEach((border) => {
				getCountryByCode(border)
					.then((borderCountry) => {
						console.log(borderCountry)
					})
			})
		})
});