console.log(this); // window


// OBJECT LITERAL
const myPet = {
    whatIsThis: this, // references the windows object
    name: "Kim",
    breed: "unknown dog breed",
    age: 7,

    // NON-ARROW functions HAVE THEIR OWN THIS KEYWORD
    speak: function (message = 'au au') {
        // console.log(this); // the object itself
        console.log(`${this.name} says ${message}`);
    },


    // ARROW FUNCTIONS, DOES NOT HAVE THEIR OWN THIS
    // THEY INHERIT THE THIS KEYWORD FROM THEIR SOROUNDING SCOPE
    run: () => {
        console.log("This in arrow:", this) // window object
        console.log(this.name) // undefined

        const sprint = function () {
            console.log('Dog is sprinting', this)
        }

        sprint()

        const walk = () => {
            console.log('dog walks', this)
        }
        walk()
    },

    // REGULAR FUNCTION HAS THEIR OWN THIS
    eats: function () {
        // ARROW FUNCTION, DOES NOT HAVE THEIR OWN THIS
        // IT INHERITED FROM THE SOROUNDING SCOPE
        // WHICH IS IN THE eats METHOD REFERRING TO THE OBJECT ITSELF
        const eatsTreat = () => {
            console.log("The dog will eat a treat")
            console.log('HERE', this) // the object itself
        }


        eatsTreat()
    }


};

console.log(myPet);
// Accessing object's properties
console.log(myPet.name);
console.log(myPet["breed"]);
myPet.speak();
myPet.speak('grrrr');
console.log(myPet.whatIsThis) // window object

myPet.run() // window object

myPet.eats();

console.log('*** THIS IN EVENTS ***')
const myBtn = document.getElementById('clickBtn');

// Example 1 -> Regular function
// myBtn.addEventListener("click", function(){
//     console.log('Clicked', this); // the element triggering the event
//     console.log(this.id); // clickBtn
//     console.log(this.innerText); // Click me
// });

// Example 2 -> Regular function
myBtn.addEventListener("click", () => {
    console.log('Clicked', this); // window
    console.log(this.id); // undefined
    console.log(this.innerText); // undefined
});

console.log("*** THIS IN CONSTRUCTOR FUNCTIONS ***");

// We cannot create constructor templates
// using function expression

// const Movie = (name) => {
//     this.name = name
// }

// const movieOne = new Movie("Harry Potter");
// console.log('1', movieOne);


function Movie(name, genre, rating, reviews = []) {
    this.reviewsCount = () => {
        console.log('1')
        if (reviews.length === 0) {
            return 'No reviews yet for the movie.'
        }
        return `This movie has ${reviews.length} reviews.`
    }

    this.movieName = name,
    this.movieGenre = genre,
    this.movieRating = rating,
    this.shouldWatch = rating > 6 ? "Should watch the movie" : "Still give it a shot"
    this.reviews = this.reviewsCount()
    
    // this.whatIsThis = this,

    this.info = function () {
        console.log(`Movie name is: ${this.movieName}`)
    }

    this.play = () => {
        console.log(`Movie ${this.movieName} with genre ${this.movieGenre} is playing`)
    }


};

const movieName = new Movie("Harry Potter", "Fantasy", 10);
console.log(movieName);
console.log(movieName.whatIsThis) // Object (movieName)
movieName.info()
movieName.play()


const secondMovie = new Movie("Barbie", "Fantasy", 2, ['Terrible', 'Do not watch']);
console.log(secondMovie)
