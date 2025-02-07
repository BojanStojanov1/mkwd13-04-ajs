console.log("objects recap is up");

//Ways of creating an object

//Literal notation
const car = {
  brand: "Honda",
  model: "Civic",
  year: 2008,
  horsePower: 200,

  printCarInfo() {
    console.log(
      `Make: ${this.brand}, Year: ${this.year}, Horsepower: ${this.horsePower}`
    );
  },
};

//Two ways of accessing props in an object
console.log(car.year);
console.log(car["year"]);

car.printCarInfo();

//Constructor Function

// function Person(firstName, lastName, age, country) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.country = country;
//   //Creating a custom property that is not a diret 1 to 1 from the parameters
//   this.fullName = `${this.firstName} ${this.lastName}`;
//   this.isUser = true;

//   this.printFullName = function () {
//     console.log(this.fullName);
//   };
// }

//Classes

class Person {
  constructor(firstName, lastName, age, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.isUser = true;
  }

  changeFirstName(newName) {
    if (typeof newName !== "string" || newName.length < 3) return;

    this.firstName = newName;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  changeLastName(newName) {
    if (typeof newName !== "string" || newName.length < 3) return;

    this.lastName = newName;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  printFullName() {
    console.log(this.fullName);
  }
}

const john = new Person("John", "Doe", 32, "USA");
const jane = new Person("Jane", "Doe", 24, "Germany");

john.changeFirstName(321);
jane.changeLastName("Roberts");

john.printFullName();
jane.printFullName();

console.log(john, jane);
