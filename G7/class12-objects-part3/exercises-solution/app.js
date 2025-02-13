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

/*
Given the below arrays, combine them all to create one main array called `plants`, the order is up to the student, after that make every string in the array `UPPERCASE`
*/

const fruits = ["apples", "oranges", "lemons"];

const vegetables = ["broccoli", "carrots", "cabbage"];

const nuts = ["peanuts", "almonds", "walnuts", "hazelnuts"];

const plants = [...fruits, ...vegetables, ...nuts].map(pl => pl.toUpperCase());

console.log(plants);

/*
Create a Person class that has:

- firstName
- lastName
- age
- getFullName - method that returns the full name

Create a Student class that inherits from Person and has:

- academyName
- studentId - number or string
- study - method that writes in the console: The student firstName is studying in the academyName

Create two Student instances
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);

    this.academyName = academyName;
    this.studentId = studentId;
  }

  study() {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName}`
    );
  }
}

const studentOne = new Student("John", "Doe", 45, "Academy for Programming", 1);
const studentTwo = new Student(
  "Jane",
  "Robson",
  32,
  "Academy for Graphic Design",
  2
);

console.log(studentOne, studentTwo);

console.log(studentOne.getFullName(), studentTwo.getFullName());

studentOne.study();
studentTwo.study();
