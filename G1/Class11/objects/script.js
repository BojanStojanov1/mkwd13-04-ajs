function Dog(color, age, name, favoriteFoods) {
    this.name = name === undefined ? 'unnamed' : name;
    this.color = color;
    this.age = age;
    this.hasOwner = false;
    this.owner = null;
    // we can use falsy values to check for undefined
    this.favoriteFoods = favoriteFoods === undefined ? [new Food('bacon', 'red')] : favoriteFoods; 

    this.bark = function() {
        console.log('bark bark bark');
    }

    this.adopt = function(owner) {
        if(!this.hasOwner) {
            this.hasOwner = true;
            this.owner = owner;
            this.owner.hasDog = true;
            console.log(`The dog ${this.name} has a new owner ${this.owner.name}`);
        } else {
            console.log('This dog is already adopted');
        }
    }

    this.eat = function(food) {
        this.favoriteFoods.forEach(fav => {
            if(fav.name.toLowerCase() === food.name.toLowerCase()) {
                console.log('** My favorite food **');
                console.log('');
            }
        });
        console.log('Nom nom nom');
    }
}

function Food(name, color) {
    this.name = name;
    this.color = color;
}

function Owner(name, age, hasDog = false) {
    this.name = name;
    this.age = age;
    this.hasDog = hasDog;
}

let sparky = new Dog('brown', 1, 'Sparky', [
    new Food('apple', 'red'),
    new Food('beef', 'yellow')
]);
console.log(sparky);

let doggy = new Dog();
console.log(doggy);

let owner = new Owner('Trajan', 23);

sparky.adopt(owner);
console.log(sparky);

let food = new Food('beef', 'green');
sparky.eat(food);