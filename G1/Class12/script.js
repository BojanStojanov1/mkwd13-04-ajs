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


// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = 'move.inc';

//     this.printVehicle = function() {
//         console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
//     }
// }

// function WheeledVehicle(wheels, name) {
//     this.wheels = wheels;
//     this.name = name;

//     this.drive = function () {
//         console.log(`Driving on ${this.wheels} wheels`);
//     }
// }

// WheeledVehicle.prototype = new Vehicle();

// let car = new WheeledVehicle(4, 'Yugo');
// car.price = 1000;
// car.id = 1;
// car.batchNo = '111a';

// car.printVehicle();
// console.log(car);

// WheeledVehicle.prototype.stop = function () {
//     console.log(`The vehicle ${this.name} stopped`);
// };

// car.stop();
// car.__proto__.name = 'Some other name';



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

function WheeledVehicle(id, name, batchNo, price, wheels) {
    this.__proto__ = new Vehicle(id, name, batchNo, price);
    this.wheels = wheels;

    this.drive = function() {
        console.log(`Driving on ${this.wheels} wheels`);
    }
}

function Motorcycle(id, name, batchNo, price, wheels, color) {
     Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.wheels = wheels;
    this.color = color;

    this.driveOnOneWheel = function() {
        console.log('Zoooom');
    }
}

function Tractor(id, name, batchNo, price, wheels, hasEqupment, fuleType) {
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, batchNo,price, wheels));
    this.hasEqupment = hasEqupment;
    this.fuleType = fuleType === 1 ? 'diesel' : 'petrol';
    this.color = 'red';
    this.brand = 'ferguson'
}


let wheeledVehicle2 = new WheeledVehicle(1, 'Yugo', 123456789, 1000, 4);
// console.log(wheeledVehicle2);

let motorcycle = new Motorcycle(1, 'Yamaha', 'z222', 1000, 2, 'red');
// console.log(motorcycle);


let ferguson = new Tractor(1, 'Ferguson', 123, 1200, 4, true, 1);
// console.log(ferguson);


// we can create models without inheritance but..
function Car(id, name, batchNo, price, wheels, hasEqupment, fuleType) {
    this.id = id;
    //...
}

function Tank(id, name, batchNo, price, wheels, hasEqupment, fuleType) {
    this.id = id;
    //...
}


function Airplane(id, price, wheels, color) {
    Object.setPrototypeOf(this, new Vehicle(id, 'Airbus', 'NO123', price));
    this.wheels = wheels;
    this.color = color;
}

// console.log(new Airplane(1, 12300, 3, 'white with blue stripes'));



let serviceConstants = {
    apiToken: '',
    userSecrets: {
        secret1: '',
        secret2: '',
        secret3: '',
    }
}

let service = {
    getUsers: function() {
        console.log('getUsers')
    },

    getUserById: function(id) {
        console.log(id);
    }
}

Object.setPrototypeOf(service, serviceConstants);

console.log(service);

let productsService = {
    getProduct: function() {

    },

    getProducts: function() {

    }
}

Object.setPrototypeOf(productsService, serviceConstants);

console.log(productsService);