class Vehicle{
    constructor(id, name, seriesNum, price){
       // debugger
        this.id = id;
        this.name = name;
        this.seriesNum = seriesNum;
        this.price = price;
    }
    printVehicle(){
        console.log(`Vehicle ${this.name} ${this.seriesNum} - ${this.price} EUR`);
    }
}

//CLASSES -> templates
//OBJECTS -> instances

let vehicle = new Vehicle(1, "opel", "34134", 15000); //constructor is called
console.log(vehicle);
console.log(vehicle.name);
vehicle.printVehicle(); //vehicle is created from the class Vehicle which has the method printVehicle

//INHERITANCE

//1. extends
//2. super
class WheeledVehicle extends Vehicle{
    constructor(id, name, seriesNum, price, numOfWheels){ //with the constructor we initialize the values of our properties
       // debugger
        //super => constructor og Vehicle(constructor of the parent)
        //initilize and inherit properties
        super(id, name, seriesNum, price); //here the constructor of Vehicle is called

        //specifiv properties for WheeledVehicle
        this.numOfWheels = numOfWheels;
    }
    driveWheeledVehicle(){
        console.log(`Drive carefully the ${this.name}`);
    }
}

let bike = new WheeledVehicle(2, "myBike", "35223", 200, 2); //all the properties belong directly to our bike object
console.log(bike);

//STATIC
class Car extends WheeledVehicle{
    constructor(id, name, seriesNum, price, numOfWheels, plateNumber, hasAC){
        //debugger
        super(id, name, seriesNum, price, numOfWheels); //call the parent constructor (WheeledVehicle)
        this.plateNumber = plateNumber;
        this.hasAC = hasAC;
    }
    buyCar(money){  
        money >= this.price ? console.log("Congrats! You bought a car!") : console.log("You don't have enough money to buy this car");
    }

    //belongs to the class, not to the object (to a concrete instance)
    static addAirConditiong(carObject){
        if(carObject.hasAC){
            console.log("The car already has ac");
        }else{
            carObject.hasAC = true;
            carObject.price+= 500;
        }
    }
    static print(){
     console.log("Hello from Car class");
    }

    static isRentable = false;
    static numberOfManufacturedCars = 0;
}

let car = new Car(5, "BMW", "222", 50000, 4, "SK1234AB", false);;
console.log(car);

car.buyCar(20000);
Car.addAirConditiong(car);
Car.print();

Car.isRentable = true;
console.log(Car.isRentable);

//GETTERS AND SETTERS

class ElectricCar extends Car{
    constructor(id, name, seriesNum, price, numOfWheels, plateNumber, hasAC, owner, numOfDoors){
        super(id, name, seriesNum, price, numOfWheels, plateNumber, hasAC);
        debugger
        this.owner = owner; //this will call the setter
        this.numOfDoors = numOfDoors;
    }
    get owner(){
        debugger
        console.log("we are getting the value of the owner");
        return this._owner;
    }

    set owner(ownerName){
        debugger
        console.log("we are setting the value of owner");
        console.log("we will not accept an empty string");
        !ownerName ? this._owner = "no owner" : this._owner = ownerName;
    }
}

let electricCar = new ElectricCar(6, "tesla", "4232", 50000, 4, "SK1234AB",true, "Petko", 3);
electricCar.owner = "Stefan"; //this will call set
console.log(electricCar.owner); //this will call get
