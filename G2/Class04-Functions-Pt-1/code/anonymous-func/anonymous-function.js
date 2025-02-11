console.log("===================== ANONYMOUS FUNCTIONS =====================");
// Anonymous functions are functions that are defined without a name
// Used when the function does not need to be reusable

// ============= Anonymous function in an event listener  =============

document.querySelector("button").addEventListener("click", function () {
    console.log("Button is clicked!");
})

// ============= Anonymous function in a fetch  =============

// https://jsonplaceholder.typicode.com/posts
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
    .then(function (response) {
        const parsedData = response.json();
        return parsedData;
    })
    .then(function (data) {
        // console.table(data);
    })
    .catch(function (error) {
        console.error("ERROR OCCURED !", error)
    });

// ============= Anonymous function in a variable  =============

let greet = function (name) {
    console.log(`Hello ${name} !`)
}
console.log(typeof greet);
greet("Bob")

let functionTwo = function () {
    console.log("Do something");
}
