function BaseInfo(id, name){
    debugger
    this.id = id;
    this.name = name;
}

var base = new BaseInfo(1, "Test");

function Vehicle(id, name, seriesNum, price){
    debugger
    // this.id= id;
    // this.name = name;
    Object.setPrototypeOf(this, new BaseInfo(id, name));
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Onfo ${this.id} ${this.name} ${this.price}`);
    }
}

let vehicle = new Vehicle(4, "Test", "5555", 10000);

function WheeledVehicle(id, name, seriesNum, price, numberOfWheels){
    debugger
   //we are saying that every instance of wheeled vehicle has vehicle as prototype
   //and we let it set the values of the properties for each instance in the Vehicle cons function
    Object.setPrototypeOf(this, new Vehicle(id, name, seriesNum, price));
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("You are driving a wheeled vehicle.")
    }
}

let wheeledVehicle = new WheeledVehicle(1, "BMW", "121232", 20000, 4);
console.log(wheeledVehicle);

let wheeledVehicle2 = new WheeledVehicle();
console.log(wheeledVehicle2);

let wheeledVehicle3 = new WheeledVehicle(3, "Mercedes", "11111", 10000, 4);
console.log(wheeledVehicle3);

function Car(id, name, seriesNum, price, numberOfWheels, plateNumber){
    debugger
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, seriesNum, price, numberOfWheels));
    this.plateNumber = plateNumber;
    this.stop = function(){
        console.log("The var stopped!");
    }
}

let car = new Car(2, "Mercedes", "3232", 30000, 4, "SK1234AB");
console.log(car);