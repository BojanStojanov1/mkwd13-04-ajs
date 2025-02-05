function Animal(type, isDomestic){
    this.type = type
    this.isDomestic = isDomestic

    this.walk = function(){
        console.log('Animal is walking')
    }
}

// BIRDS
function Bird(canFly, isDomestic){
    Object.setPrototypeOf(this, new Animal('Birds', isDomestic))
    this.canFly = canFly

    this.speak = () => {
        console.log(`Bird is making noise.`)
    }
    // We can overwrite methods that we inherit
    this.walk = function(){
        console.log('The chicken is walking and eating at the same time')
    }
};

function Chicken(){
    Object.setPrototypeOf(this, new Bird(false, true))
    this.isDinasourDescendants = true;

    this.speak = () => {
        console.log(`The chicken says kukuriku`)
    };

};

const bird = new Bird(true, false);
console.log(bird);
console.log(bird.isDomestic);

const chicken = new Chicken();

console.log(chicken);
chicken.speak();

// We can add methods/parameters on the very first constructor from the prototype chain
// If we do it on another constructor such as Bird, we will get error since we gonna
// break the prototype chain
Animal.prototype.returnType = function(animalType){
    console.log(`Animal is: ${animalType}`)
};

chicken.returnType(chicken.type)

chicken.walk()