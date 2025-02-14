function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function(){
        console.log(`Info ${this.id} ${this.name} ${this.price}`);
    }
}

let vehicle = new Vehicle(1, "Opel", "123", 15000);
console.log(vehicle);

let wheeledVehicle = Object.create(vehicle); 
console.log(wheeledVehicle);

//add new specific properties only for wheeled vehicle
wheeledVehicle.numberOfWheels = 4; //only wheeledVehicle will have this property
console.log(vehicle);
console.log(wheeledVehicle.name); //vehicle
console.log(wheeledVehicle.price); //vehicle
console.log(wheeledVehicle.numberOfWheels); //wheeledVehicle

//override values
wheeledVehicle.name = "Opel Corsa";
console.log(vehicle); //the name will be Opel ->unchanged
console.log(wheeledVehicle.name); //Opel Corsa

let car = Object.create(wheeledVehicle);
car.plateNumber = "SK1234AA";
console.log(car);

let bike = Object.create(wheeledVehicle);
console.log(bike);
bike.numberOfWheels = 2;//override the value from the wheeledVehicle
console.log(bike);
console.log(bike.numberOfWheels); //2 -> from bike
console.log(bike.name); //Opel Corsa -> from wheeled vehicle
console.log(bike.price); //15000 -> from vehicle

console.log("=======Prototypes=========");
console.log(wheeledVehicle.__proto__); //vehicle
console.log(wheeledVehicle.__proto__.price); //vehicle.price

console.log(car.__proto__); //wheeledVehicle
console.log(car.__proto__.__proto__); //vehicle
console.log(car.__proto__.name); //wheeledVehicle.name
console.log(car.__proto__.__proto__.name) //vehicle.name

vehicle.name = "Renault";
console.log(car.__proto__.__proto__.name); //vehicle.name -> Renault
console.log(car.name); //Opel Corsa

wheeledVehicle.seriesNum = "55555";
console.log(car.__proto__.seriesNum); //55555
console.log(car.seriesNum); //55555 (car does not have its own series number, so it looks from the reference from its prototype and gets the value from wheeledVehicle)
console.log(wheeledVehicle.seriesNum); //55555 (wheeledVehicle)
console.log(vehicle.seriesNum); //123 (vehicle)
console.log(car.__proto__.__proto__.seriesNum); //123 (vehicle)