let student = new Object();

//create - completely new object that is a copy from the first object
let dog = {
    isHappy: true,
    bark: function(){
        console.log("AF AF");
    }
}
console.log(dog);

let barnie = Object.create(dog);
console.log(barnie);

barnie.name = "Barnie";
console.log(dog);
console.log(barnie);

//assign 
let addressInfo = {
    street: "Dog street",
    streetNumber: 50
}

console.log(dog.street); //undefined

//the first param is the object that will get all the prop and methods from the obj passed as second param
let dogUpdate = Object.assign(dog, addressInfo);//the dog will have its own properties street and streetNumber
console.log(dog);
console.log(addressInfo);

console.log(dogUpdate); //dogUpdate and dog are referencing the same object

dogUpdate.isHappy = false; //it will affect dog
console.log(dog);
console.log(dogUpdate);

console.log("=========================================");

//keys - the name of the keys from our key-value pairs (of all members (prop or methods))
let sparky = {
    name: "Sparky",
    isHappy: true,
    bark: function(){
        console.log("BARK BARK");
    }
}

console.log(Object.keys(sparky));
console.log(Object.keys(sparky)[1]);

sparky.age = 4;
console.log(sparky.age);

sparky['age'] = 6;
console.log(sparky.age);

console.log(Object.keys(sparky));

sparky[Object.keys(sparky)[3]] = 8;
console.log(sparky.age);

//values - the values of all members (prop or methods)
sparky.printValues = function(){
    Object.values(this).forEach(x => console.log(x));
}

sparky.printValues();

console.log(Object.values(sparky));
console.log(Object.values(sparky)[2]);
Object.values(sparky)[2](); //in Object.values(sparky)[2] we have the impl of the bark function and with () we can call it


//FREEZE - lock the object, we cannot add new prop nor methods and we cannot change the values of the existing properties nor methods
let luna = {
    name: "Luna",
    friend: "Sparky"
}
Object.freeze(luna);

luna.friend = "Barnie";
console.log(luna.friend); //Sparky - we cannot change the existing prop nor methods'

luna.age = 5;
console.log(luna.age); //undefined - we cannot add prop nor methods

//SEAL - we can change the existing properties and methods, but we cannot add new ones

let hera = {
    name:"Hera",
    friend: "Luna"
}

console.log(hera);

Object.seal(hera);
hera.friend = "Sparky";
console.log(hera.friend); //Sparky - we can change the existing values
hera.age = 6;
console.log(hera.age); //undefined - we cannot add new prop nor methods

