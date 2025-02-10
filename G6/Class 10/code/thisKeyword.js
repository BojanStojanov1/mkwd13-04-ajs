console.log(this) //global scope -> window

console.log("====inside a function====");

function greeting(){
    console.log("Hi");
    console.log(this); //window 
}

greeting(); //window.greeting();

console.log("====inside objects (object literals)=======");
let someObject = {
    someProperty: this, //window
    someMethod: function(){
        console.log(this); //someObject
    }
}
console.log(someObject.someProperty);
someObject.someMethod();

console.log("=====constructor functions======");

function SomeTemplate(someString){
    this.description = someString;
    console.log(this);
    this.exampleMethod = function(){
        console.log("Example method");
        console.log(this);
    }
}

//when we use the new keyword for creating an object from the constructor function
//the this keyword references the newly created object
let ourObject = new SomeTemplate("ourString");
ourObject.exampleMethod();

//use as a normal function(without the new keyword)
//not as a constructor function
//in this case this references the global window object
SomeTemplate("test"); //window.SomeTemplate("test");