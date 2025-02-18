function Vehicle(id, name) {
    this.id = id;
    this.name = name;
    this.color = undefined;

    this.printInformation = function() {
        throw new Error('Not implemented');
    }
}

function Car(id, name, hp) {
    Object.setPrototypeOf(this, new Vehicle(id, name));
    this.hp = hp;

    this.printInformation = function() {
        console.log('In car');
    }
}

let car = new Car(1, 'Yugo', 123);
car.printInformation();



Vehicle.prototype.changeColor = function(color) {
    console.log(this);
    console.log(color);
}

// console.log(car);
// car.changeColor('red');




String.prototype.firstLetterUpper = function() {
    console.log(this);
    let newValue = [];
    for(let letter of this) {
        newValue.push(letter.toUpperCase());
    }
    return newValue.toString();
}

let test = 'trajan';
let upperCase = test.firstLetterUpper();
console.log(upperCase);

Array.prototype.runAll = function() {
    for(let item of this) {
        console.log(item);
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let names = ['Trajan', 'Filip'];

numbers.runAll();
names.runAll();