console.log("solutions are online");

/*
Create a function that render information about a movie, destructure the movie object in the argument list so that the . ( dot ) operator is not needed, after that render the movie in the html.
*/

const movie = {
  title: "Saving Private Ryan",
  director: "Steven Spielberg",
  country: "USA",
  year: 1999,
  productionInfo: {
    budget: "70 million",
    producer: "Ian Bryce",
  },
};

const renderMovie = ({
  title,
  director,
  country,
  year,
  productionInfo: { budget, producer },
}) => {
  document.querySelector(".movie-container").innerHTML = `
        <p>title: ${title}</p>
        <p>director: ${director}</p>
        <p>country: ${country}</p>
        <p>year: ${year}</p>
        <p>budget: ${budget}</p>
        <p>producer: ${producer}</p>
    `;
};

renderMovie(movie);
