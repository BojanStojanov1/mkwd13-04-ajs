// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'move.inc';

//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, Price: ${this.price}`);
//     }
// }

// let vehicle = new Vehicle(1, 'Yugo', 123, 100);
// // console.log(vehicle);

// let wheeledVehicle = Object.create(new Vehicle(1, 'Yugo', 12345, 200));
// // console.log(wheeledVehicle);

// wheeledVehicle.drive = function() {
//     console.log('Wroomm!');
// }


// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// // console.log(car);
// // console.log(`---- ${car.name} ----`);
// // car.drive();
// // car.printVehicle();


// let wheeledVehicle1 = {};
// wheeledVehicle1.__proto__ = new Vehicle(15, 'Mazda', '331s', 1000);
// // console.log(wheeledVehicle1);

// // console.log(wheeledVehicle1.name);
// // wheeledVehicle1.__proto__.printVehicle();

// wheeledVehicle1.name = 'Toyota';
// // wheeledVehicle1.__proto__.printVehicle();
// // console.log(wheeledVehicle1.name);

// wheeledVehicle1.printVehicle = function() {
//     console.log('-- Toyota --');
// }

// wheeledVehicle1.printVehicle();
// wheeledVehicle1.__proto__.printVehicle();


function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = 'move.inc';

    this.printVehicle = function() {
        console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
    }
}

function WheeledVehicle(wheels, name) {
    this.wheels = wheels;
    this.name = name;

    this.drive = function () {
        console.log(`Driving on ${this.wheels} wheels`);
    }
}

WheeledVehicle.prototype = new Vehicle();

let car = new WheeledVehicle(4, 'Yugo');
car.price = 1000;
car.id = 1;
car.batchNo = '111a';

car.printVehicle();
console.log(car);

WheeledVehicle.prototype.stop = function () {
    console.log(`The vehicle ${this.name} stopped`);
};

car.stop();
car.__proto__.name = 'Some other name';
