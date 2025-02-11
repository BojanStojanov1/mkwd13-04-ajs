console.log("Document type:");
console.log(typeof(document)); //object
console.log("Get element by id");
console.log(typeof(document.getElementById)) //function
console.log("Empty array type");
console.log(typeof([])); //object
console.log("Console type");
console.log(typeof(console)); //object
console.log("Console log type");
console.log(typeof(console.log)); //function
console.log("Window type");
console.log(typeof(window)); //object

console.log(window);

console.log("Hello");
window.console.log("Hello");

// alert("Hi");
// window.alert("Hi");

console.log(window.JSON.stringify({a:7}));
console.log(JSON.stringify({a:7}));

console.log("====Functions=====")

function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello("Ana");
window.sayHello("Marko");

console.log("======var vs let======");
//when we use var, the variable is a part of window
var firstVariable = 5;
console.log(firstVariable);
console.log(window.firstVariable);

//when we use let, the variable is not a part of window
let secondVariable = 7;
console.log(secondVariable);
console.log(window.secondVariable); //undefined

const a = 7;
//a = 5; -> TypeError: Assignment to constant variable. We cannot change the value of a const variable
console.log(a);

console.log("========Constructors==========");
function Food(name, color){
    this.name = name;
    this.color = color;
    this.compare = function(food){
        debugger
        return this.name === food.name && this.color === food.color;
    }
}

function Dog(name, color, age, favouriteFood){
    this.name = !name ? "Unnamed" : name; //if name has no value -> unnamed, else if name has value -> name
    this.color = color;
    this.age = age;
    this.hasOwner = false; //default value
    this.favouriteFood = !favouriteFood ? [new Food("Bacon", "red"), new Food("Bread", "white")] : favouriteFood;
    this.bark = function(){
        console.log("Bark Bark");
    }
    this.isMyFavouriteFood =  function(food){ 
        let isFound = this.favouriteFood.filter(f => f.name == food.name && f.color == food.color).length > 0;
        if(isFound){
            console.log(`One of my favourite meals is ${food.name}`);
        }else{
            console.log(`I don't prefer ${food.name}`);
        }
    }
}

let barnie = new Dog("Barnie", "brown", 3, [new Food("Beef", "red"), new Food("Apple", "Yellow")]);
console.log(barnie);
barnie.isMyFavouriteFood(new Food("Bacon", "red"));
barnie.isMyFavouriteFood(new Food("Beef", "red"));

let sparky = new Dog("Sparky", "white", 5);
console.log(sparky);

barnie.bark();
sparky.bark();

sparky.bark = function(){
    console.log("Barking....");
}

barnie.bark();
sparky.bark();

console.log("=====comparison=======");
let apple = new Food("apple", "red");
let anotherApple = new Food("apple", "red");

//comparison by reference
console.log(apple === anotherApple); //false, apple and anotherApple are referecing different objects

let areIdentical = apple.compare(anotherApple); //we can use the method compare from our objects to compare the properties of the objects
console.log(`Are apples identical: ${areIdentical}`);

let yellowApple= new Food("apple", "yellow");
console.log(apple.compare(yellowApple));

let redApple = apple;
console.log(apple === redApple);

let tmpA = 5;
let tmpB = 5;
let tmpC = tmpA; //by value
console.log(tmpA === tmpB); //comparison by value when comparing primitive types

let array1= [1,2];
let array2 = [1,2];
console.log(array1 === array2); //comparison by reference

let array3 = array1; //array1 is passed by reference. Both arrays reference the same array. Every change of array1 affects array3 and vice versa
console.log(array1 === array3); //true, comparison by refernce, both arrays have the same reference
