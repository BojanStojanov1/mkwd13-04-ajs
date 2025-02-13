function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum =  seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Info ${this.id} ${this.name} ${this.price}`);
    }
}

function WheeledVehicle(numberOfWheels, name){
    this.numberOfWheels = numberOfWheels;
    this.name = name;
    this.drive = function(){
        console.log("You are driving a wheeled vehicle. Drive carefully!");
    }
}

let example = new WheeledVehicle(4, "BMW");
console.log(example);

//WheeledVehicle.prototype = Object.create(new Vehicle());
WheeledVehicle.prototype = Object.create(new Vehicle(2, "opel", "555", 10000)); //we have a concrete object vehicle that is set as a prototype for every instance of wheeled vehicle that we will create

let wheeledVehicle = new WheeledVehicle(4, "Peugeot");
console.log(wheeledVehicle);
console.log(wheeledVehicle.id); //2
console.log(wheeledVehicle.numberOfWheels); //4
console.log(wheeledVehicle.price); //10000
wheeledVehicle.price = 15000;
console.log(wheeledVehicle.price);

let wheeledVehicle2 = new WheeledVehicle(4, "BMW");
console.log(wheeledVehicle2);

let wheeledVehicle3 = new WheeledVehicle(4, "Mercedes");
console.log(wheeledVehicle3);

//extend protoype
WheeledVehicle.prototype.stop = function(){
    console.log("The vehicle has stopped");
}

wheeledVehicle.stop();
wheeledVehicle3.stop();

let bike = new WheeledVehicle(2, "Bike");
console.log(bike);
bike.stop();