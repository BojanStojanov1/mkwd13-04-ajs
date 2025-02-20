// Exporting an object with two methods
module.exports = {
    sayHello: function (name) {
        console.log(`Hello, ${name}! Welcome!`);
    },
    sayBye: function (name) {
        console.log(`Goodbye, ${name}! See you soon!`);
    }
}