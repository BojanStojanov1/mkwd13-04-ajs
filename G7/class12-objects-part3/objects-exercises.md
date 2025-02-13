## Task 1

Create a function that render information about a movie, destructure the movie object in the argument list so that the . ( dot ) operator is not needed, after that render the movie in the html.

```js
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
```

## Task 2

Given the below arrays, combine them all to create one main array called `plants`, the order is up to the student, after that make every string in the array `UPPERCASE`

```js
const fruits = ["apples", "oranges", "lemons"];

const vegetables = ["broccoli", "carrots", "cabbage"];

const nuts = ["peanuts", "almonds", "walnuts", "hazelnuts"];
```

## Task 3

Create a Person class that has:

- firstName
- lastName
- age
- getFullName - method that returns the full name

Create a Student class that inherits from Person and has:

- academyName
- studentId
- study - method that writes in the console: The student firstName is studying in the academyName

Create two Student instances
