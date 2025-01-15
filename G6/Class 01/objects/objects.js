//Object literal
let dog = {
    name: "Sparky",
    color: "Brown",
    age: 1,
    favoriteFood: ["Bacon", "Carrot"],
    bark: function(){
        console.log("BARK BARK BARK");
    },
    eat: function() {
        console.log("NOM NOM NOM");
    }
}

dog.bark(); //BARK BARK BARK
console.log(`${dog.name} - ${dog.color}`);
dog.bark = function(){
    console.log("AV AV AV");
}
//we can change the methods and properties values of the object
dog.bark(); //AV AV AV
dog.age = 2;
console.log(dog.age);

//new Object()
let dog1 = new Object();
dog1.name = "Sparky";
dog1.color = "Brown";
dog1.age = 1;
dog1.favoriteFood = ["Bacon", "Carrot"];
dog1.bark = function(){
    console.log("BARK BARK BARK");
}
dog1.eat = function() {
    console.log("NOM NOM NOM");
}

console.log(dog1.name);
dog.bark(); //AV AV AV
dog1.bark(); //BARK BARK BARK

//ternary operator

if(3>2){
    console.log("yay");
}else{
    console.log("meh");
}
             // condition ? if the condition is true : else if the condition is false
let message =  3>2 ? console.log("yay") : console.log("meh");

//Constructor
function Dog(name, color, age, favoriteFood){
    // if(name == undefined){
    //     this.name = "unnamed"
    // }else{
    //     this.name = name;
    // }
    //this.name = !name ? "unnamed" : name; //ternary operator
    this.name = name == undefined ? "unnamed" : name;
    this.color = color;
    this.age = age == undefined ? 0 : age;
    this.hasOwner = false; //default value, we don't send it - every object will have the default value
    this.favoriteFood = favoriteFood == undefined ? [] : favoriteFood;
    this.bark = function(){
        console.log("BARK BARK BARK");
    }
    this.eat = function() {
        console.log("NOM NOM NOM");
    }
}

let Luna = new Dog("Luna", "Golden", 3, ["Bacon", "Carrot"]);
console.log(Luna.name);

let sparky = new Dog();
console.log(sparky.name);

let hera = new Dog("Hera", "Black");
console.log(hera.name); //Hera
console.log(hera.age); //0
console.log(hera.favoriteFood); //[]