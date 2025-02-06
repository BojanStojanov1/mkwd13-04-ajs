function Animal(name){
    this.name = name
    this.legs = 4

    this.speak = () => {
        console.log(`${this.name} makes a noise.`);
    }
};

const animalOne = new Animal('Gemy');
console.log(animalOne)
animalOne.speak();

function Dog(name, breed){
    this.name = name;
    this.breed = breed;

    this.speak = () => {
        console.log(`${this.name} says woof woof`)
    }

    this.run = () => {
        console.log('The dog is running!')
    }
}

Dog.prototype = Object.create(new Animal());

const dog = new Dog('Rex', 'German Shepard');
console.log(dog);
dog.speak();
console.log(dog.legs)
dog.run();

function GoldenRetriver(name, lovesWater){
    this.name = name,
    this.breed = 'Golden Retriever',
    this.lovesWater = lovesWater,
    this.isSmart = true

    this.swim = function(){
        console.log(`This puppy loves water and diving`);
    }
}

GoldenRetriver.prototype = Object.create(new Dog());

const goldenRetriever = new GoldenRetriver('Len', true);
console.log(goldenRetriever)

console.log(goldenRetriever.legs)
goldenRetriever.speak()

