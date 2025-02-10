// Function constructor approach
// function Animal(name, age){
//     this.name = name;
//     this.age = age;
// }

// *** ENCAPSULATION *** - Wrapping properties and methods in a class to restrict direct access
class Animal {
    // carnivore // eats meat
    // herbivore // eats plants
    // omnivore // eats plants + meat
    #diet; // Private property, cannot be acccessed with dot NOTATION

    // What is constructor?
    constructor(name, age, diet){
        this.animalName = name; // public property
        this.animalAge = age // public property
        this.#diet = diet
    };

    // same applies to regular methods(functions)
    describe = () => {
        return `${this.animalName} is ${this.animalAge} years old.`
    };

    // Getter (costum getter)
    returnDiet(){
        return this.#diet
    }

    // Setter (costum setter)
    setDiet(diet){
        if(!diet){
            throw new Error('You must provide diet')
        }
        this.#diet = diet
    }
 
    // Getter for diet
    get diet(){
        return this.#diet
    }

    // Setter for diet
    set diet(newDiet){
        if(!newDiet){
            throw new Error('You must provide a diet')
        }
        this.#diet = newDiet
    }
};

const animal1 = new Animal("Lion", 4, "carnivore");

console.log(animal1);
console.log(animal1.animalName)
console.log(animal1.describe());
// console.log(animal1.#diet) // Error: Private field cannot be accessed outside a class/object
console.log(animal1.returnDiet())


// -------------------------------------------------------

// *** INHERITENCE *** - A child class inherits properties and methods from a parent class

class Dog extends Animal {
    constructor(name, age, breed, diet){
        super(name, age, diet) // Call the parent class constructor
        this.breed = breed; // New property specific to Dog
    }
}

const dog = new Dog("Buddy", 3, "Pit-Bull", "Omnivore");
console.log(dog)
console.log(dog.describe());

class Retriever extends Dog {
    constructor(color, lovesWater, name, age, breed = 'Retriever', diet = 'Omnivore'){
        super(name, age, breed, diet) // Calls the parent class constructor (Dog)
        this.color = color // Specific to Retriever
        this.lovesWater = lovesWater // Specific to Retriever
    }

    // method specific for Retriever
    swim(){
        if(this.lovesWater){
            console.log(`${this.animalName} loves swimming and diving`)
        }else {
            console.log(`${this.animalName} hates the water!`)
        }
    }
};

const retriever = new Retriever('Golden', true, 'Rex', 6);
console.log(retriever);
retriever.swim();

// -------------------------------------------------------

// *** ABSTRATION *** - Hiding unnecessary(implementation) details, showing only essentials features
class Bird extends Animal {
    constructor(name, age, diet, canFly){
        super(name, age , diet)
        this.canFly = canFly
    }

    // Abstracted behaviour
    fly(){
        if(this.canFly){
            return `${this.animalName} can fly!`
        }
        return `${this.animalName} cannot fly!`
    }

    // *** POLYMORPHISM *** = Object taking many forms (overriding methods);
    describe = () => {
        return `${this.animalName} is a very mysterious bird who is seen only few times during the year`
    }
};

const bird = new Bird('Sparrow', 1, 'Herbivore', true);
console.log(bird.fly())
console.log(bird.describe())

console.log('--- GETTERS/SETTERS ---')
const eagle = new Bird('Eagle', 3, 'carnivore', true);

// using costum getter/setter
console.log(eagle.returnDiet()) // costum getter
eagle.setDiet('omnivor'); // costum setter (sets new value to a property)
console.log(eagle.returnDiet()) // costum getter

console.log('-- USING GET/SET --')
// using get/set from class
console.log(eagle.diet);
// eagle.diet = "" // Activates the setter. This will throw error since we check if the value is truthy

eagle.diet = "carnivore"
console.log(eagle.diet)