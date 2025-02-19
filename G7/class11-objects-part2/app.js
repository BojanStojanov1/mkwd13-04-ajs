console.log("it is working");

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
};

const names = ["test", "best", "rest"];

console.log(person);
console.log(names);

//1. Inheritance ussing prototypes in JS

function Vehicle(name, price, serialNumber) {
  this.name = name;
  this.price = price;
  this.serialNumber = serialNumber;

  this.printVehicleStats = function () {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Serial #: ${this.serialNumber}`
    );
  };
}

const vehicleOne = new Vehicle("Yacht", 100000, "A12341231231");

console.log(vehicleOne);

vehicleOne.printVehicleStats();

function WheeledVehicle(name, price, serialNumber, numberOfWheels) {
  this.numberOfWheels = numberOfWheels;

  this.__proto__ = new Vehicle(name, price, serialNumber);
}

const truck = new WheeledVehicle("Truck", 32000, "A23123123123", 18);

console.log(truck);

truck.printVehicleStats();

console.log(truck.__proto__);

function Car(
  name,
  price,
  serialNumber,
  numberOfWheels,
  numberOfDoors,
  euroStandard,
  brand
) {
  this.numberOfDoors = numberOfDoors;
  this.euroStandard = euroStandard;
  this.brand = brand;

  this.__proto__ = new WheeledVehicle(
    name,
    price,
    serialNumber,
    numberOfWheels
  );

  this.printCarInfo = function () {
    console.log(
      `Car has ${this.numberOfDoors} doors, Is euro standrd ${this.euroStandard} and is made by ${this.brand}`
    );
  };
}

const vwPassat = new Car("Passat", 3500, "A23123123", 4, 5, 4, "Volkswagen");

console.log(vwPassat);

vwPassat.printVehicleStats();

//2. Classes
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  printPersonInfo() {
    console.log(this.fullName, this.age);
  }
}

const personOne = new Person("Bob", "Bobsky", 45);

console.log(personOne);

personOne.printPersonInfo();

//extends is the keyword for inheritance in classes

class Professional extends Person {
  constructor(firstName, lastName, age, yearsOfExperience, industry) {
    super(firstName, lastName, age);

    this.yearsOfExperience = yearsOfExperience;
    this.industry = industry;
  }

  printWorkerInfo() {
    console.log(
      `${this.fullName} works in the ${this.industry} industry, and has ${this.yearsOfExperience} years of experience`
    );
  }
}

const workerOne = new Professional("Jack", "Dorsey", 54, 15, "Construction");

console.log(workerOne);

workerOne.printPersonInfo();
workerOne.printWorkerInfo();

class Programmer extends Professional {
  constructor(firstName, lastName, age, yearsOfExpeience, languages, jobTitle) {
    //It is going to create an instance of the parent class
    super(firstName, lastName, age, yearsOfExpeience, "IT");

    this.languages = languages;
    this.jobTitle = jobTitle;
  }

  printProgrammerInfo() {
    console.log(
      `${this.fullName}'s current job title is ${
        this.jobTitle
      } and they know the following languages: ${this.languages.join(", ")}`
    );
  }
}

const randomCoder = new Programmer(
  "Anjan",
  "Petel",
  32,
  0.5,
  ["PHP", "Javascript", "Java", "Haskell"],
  "Software Engineering Intern"
);

console.log(randomCoder);

randomCoder.printPersonInfo();
randomCoder.printWorkerInfo();
randomCoder.printProgrammerInfo();

console.log(randomCoder instanceof Programmer);
console.log(randomCoder instanceof Professional);
console.log(workerOne instanceof Programmer);
console.log(workerOne instanceof Person);

class Doctor extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExpeience,
    specialization,
    isCertified
  ) {
    super(firstName, lastName, age, yearsOfExpeience, "Medicine");

    this.specialization = specialization;
    this.isCertified = isCertified;
  }

  helpPatient(patientName) {
    if (this.isCertified) {
      console.log(`Dr.${this.lastName} is treating ${patientName}`);
    } else {
      console.log(
        `${this.fullName} can't help ${patientName} because they are not certified`
      );
    }
  }

  //static methods should not use this
  static checkCertification(doctor) {
    if (doctor instanceof Doctor) {
      if (doctor.isCertified) {
        return "Doctor is certified";
      } else {
        return "Doctor is not certified";
      }
    } else {
      return "INVALID DATA";
    }
  }
}

const doctorRob = new Doctor("Rob", "Robson", 56, 30, "Trauma Surgeon", true);

doctorRob.printWorkerInfo();

doctorRob.helpPatient("Bob Bobsky");

console.log(doctorRob);

const doctorRisto = new Doctor(
  "Risto",
  "Blazhevski",
  55,
  100,
  "Neuro Surgeon",
  false
);

//Static methods are called on the class itself
console.log(Doctor.checkCertification(doctorRob));
console.log(Doctor.checkCertification(doctorRisto));

//Private properties / getters-setters

class BankAccount {
  //Private properties can't be read or updated directly with . or =
  #accountHolder;
  #accountNumber;
  #balance;

  constructor(accountNumber, balance, accountHolder) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolder = accountHolder;
  }

  getAccountHolder() {
    return this.#accountHolder;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }

  updateAccountHolder(newHolder) {
    if (typeof newHolder !== "string" || newHolder.length < 5) return;

    this.#accountHolder = newHolder;
  }

  get balance() {
    console.log("balance getter called");
    return this.#balance;
  }

  set balance(newBalance) {
    console.log("balance setter called");

    if (typeof newBalance !== "number" && !Number.isNaN(Number(newBalance)))
      return;

    this.#balance = newBalance;
  }
}

const accountOne = new BankAccount("1234-5678-9123", 10000, "John Doe");

// console.log(accountOne.#accountNumber);

accountOne.updateAccountHolder("Jane Doe");
accountOne.updateAccountHolder(undefined); //This will not work

console.log(accountOne.getAccountNumber());
console.log(accountOne.getAccountHolder());
// console.log((accountOne.balance = 222));

accountOne.balance = 9999;

accountOne.balance = [];

console.log(accountOne.balance);
