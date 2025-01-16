let movies = ["Lord of the rings", "Harry Poter", "Joker", "Besa", "The Godfather"];

let movieName = document.getElementById(`searchInput`);
let btn = document.getElementById(`searchBtn`);

function searchMovie() {
	let h1 = document.createElement(`h1`);
	let movieFound = false;
	for (let i = 0; i < movies.length; i++) {
		if (movieName.value.toLowerCase() == movies[i].toLowerCase()) {
			movieFound = true;
		}

		/****************************************************************************************************
			
			This code works as well, but the else part will be executed always
			JavaScript is fast enough so the user does not see this on the UI
			But it still happens in a split of a second
			Instead, we first need to find the match using a boolean (later we will use a different approach)
			then, based on if we found a match or not, we update the UI

			if (movieName.value.toLowerCase() == movies[i].toLowerCase()) {
				h1.style.color = `green`;
				h1.innerText = `The movie can be rented!`;
				break;
			} else {
				h1.style.color = `red`;
				h1.innerText = `The movie can't be rented :(`;
			}
		*****************************************************************************************************/

	}

	if (movieFound) {
		h1.style.color = `green`;
		h1.innerText = `The movie can be rented!`;
	} else {
		h1.style.color = `red`;
		h1.innerText = `The movie can't be rented :(`;
	}

	document.body.appendChild(h1);
}

btn.addEventListener(`click`, function () {
	searchMovie();
})