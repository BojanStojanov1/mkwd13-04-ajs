// function Vehicle(id, name, batch, price) {
//     this.id = id;
//     this.name = name;
//     this.batch = batch;
//     this.price = price;
// }

// function WheeledVehicle(id, name, batch, price, wheels) {
//     Object.setPrototypeOf(this, new Vehicle(id, name, batch, price))
//     this.wheels = wheels;
// }

// let car = new WheeledVehicle(1, 'Yugo', 123, 12300, 4);
// console.log(car);


class Vehicle {
    constructor(id, name, batch, price, showLog = false) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = 'move.inc';

        if(showLog) {
            console.log('Im the constructor of Vehicle');
        }
    }

    printVehicle() {
        console.log(`${this.id}. ${this.name}`);
    }
}

// let vehicle = new Vehicle(1, 'Yugo', '11a', 120, true);
// console.log(vehicle);
// vehicle.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price, true);
        console.log('Im the constructor of WheeledVehicle');
        this.wheels = wheels;
    }

}

// let wheeledVehicle = new WheeledVehicle(1, 'Mazda', 1234, 12345, 4);
// console.log(wheeledVehicle);

class Car extends WheeledVehicle {
    constructor(id, name, batch,price, wheels, doors, ac) {
        super(id, name, batch,price, wheels);
        console.log('Im the constructor of Car');
        this.doors = doors;
        this.ac = ac;

        if(ac) {
            this.price += 400;
        }
    }
}

// let car = new Car(1, 'Yugo', 123, 600, 4, 5, true);
// console.log(car);

class BaseService {
    constructor() { }

    printArray(arr) {
        arr.forEach(element => {
            console.log(element);
        });
    }
}

class BookService extends BaseService {
    constructor() {
        super();
    }

    showNames(arr) {
        this.printArray(arr);
    }

    // get books method

    // update books method

    //....
}

let bookService = new BookService();
bookService.showNames(['Trajan', 'Filip']);

