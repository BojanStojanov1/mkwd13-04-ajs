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
      `The student ${this.firstName} is studying in the ${this.academyName} academy`
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

//  DesignStudent

// - isStudentOfTheMonth - boolean
// - attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

class DesignStudent extends Student {
  constructor(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    super(firstName, lastName, age, "design", studentId);

    this.isStudentOfTheMonth = isStudentOfTheMonth;
  }

  attendAdobeExam() {
    console.log(`The student ${this.firstName} is doing an Adobe exam!`);
  }
}

const bob = new DesignStudent("Bob", "Bobsky", 23, 4, false);

console.log(bob);

console.log(bob.getFullName());

bob.study();
bob.attendAdobeExam();

//  CodeStudent

// - hasIndividualProject - boolean (not settable, default is false)
// - hasGroupProject - boolean (not se ttable, default  is false)
// - doProject(type) - method that accepts string. If the string is `individual` or `group` it  should write  that the person is working on the project of that type and set the value to `true` on the property of the project

class CodeStudent extends Student {
  hasIndividualProject = false;
  hasGroupProject = false;

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age, "code", studentId);
  }

  doProject(type) {
    if (type === "individual") {
      console.log("The student is working on an individual project");
      this.hasIndividualProject = true;
    }

    if (type === "group") {
      console.log("The student is working on a group project");
      this.hasGroupProject = true;
    }
  }
}

const bill = new CodeStudent("Bill", "Gates", 28, 5);

console.log(bill);

bill.study();

bill.doProject("individual");
bill.doProject("group");

console.log(bill);

//  NetworkStudent

// - academyPart - number
// - attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, studentId, academyPart) {
    super(firstName, lastName, age, "networking", studentId);

    this.academyPart = academyPart;
  }

  attendCiscoExam() {
    console.log(`The student ${this.firstName} is doing a cisco exam!`);
  }
}

const ted = new NetworkStudent("Ted", "Tedsky", 32, 6, 2);

console.log(ted);

ted.study();

ted.attendCiscoExam();
