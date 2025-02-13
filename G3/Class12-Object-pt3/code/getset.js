// Basic getter and setter

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible");
    }
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }

  //   changeCelsius(value) {
  //     this._celsius = value;
  //   }
}

const temp = new Temperature(25);
console.log(temp.celsius);
console.log(temp.fahrenheit);

// temp.celsius = -274; this whill throw an error because the condition is not respected
temp.celsius = 30;
console.log(temp.fahrenheit);

temp.fahrenheit = 68;
console.log(temp.celsius);

// temp.changeCelsius()

// Getter and setter with validation and formatting

class BankAccount {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  // Getter for balance with formatting
  get balance() {
    return `${this._balance.toFixed(2)}`;
  }

  get transactionHistory() {
    return this._transactions.map((transaction) => {
      return `${transaction.type}: $${transaction.amount.toFixed(2)} - ${
        transaction.date
      }`;
    });
  }

  set deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
    this._transactions.push({
      type: "Deposit",
      // amount: amount,
      // ES6 shorthand when property names in objects match, you dont have to explicitly pass the value
      amount,
      date: new Date().toLocaleDateString(),
    });
  }

  set withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    this._transactions.push({
      type: "Withdrawal",
      //   amount: amount,
      // ES6 shorthand when property names in objects match, you dont have to explicitly pass the value
      amount,
      date: new Date().toLocaleDateString(),
    });
  }
}

const account = new BankAccount();
account.deposit = 100;
console.log(account.balance);

account.withdraw = 30;
console.log(account.balance);

console.log(account.transactionHistory);
