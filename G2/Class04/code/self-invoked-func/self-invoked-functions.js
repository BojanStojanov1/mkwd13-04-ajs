console.log("===================== SELF-INVOKED FUNCTIONS =====================");
// Self-Invoked Functions are functions that execute immediately after being defined
// They are used with Anonymous functions

(function () {
    console.log("This will be executed immediately!");
})();

// ===> With parameters and Arrow function
((num1, num2) => console.log(num1 + num2))(100, 300);


// ===> Fetch and render something initially from API

// https://dummyjson.com/products/1
(() => {
    const productUrl = "https://dummyjson.com/products/1";
    const productContainer = document.getElementById("product-container");
    fetch(productUrl)
        .then(response => response.json())
        .then(product => {
            console.log(product);
            productContainer.innerHTML = `
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            `;
        });
})();

// NOTE: Better way is to use the event DOMContentLoaded for this scenario
// document.addEventListener("DOMContentLoaded", () => {...})

// ===> Here the named function behaves as an anonymous and won't be reusable (will be executed immediately, once)
(function sayHello(name) {
    console.log(`Hello ${name}`);
})("Jane Doe");
// sayHello("Buddy"); // ERROR