console.log("I am in nodejs runtime env.");


const add = (a, b) => {
    return a + b
};

const addResult = add(4 ,3);
console.log(addResult)

console.log('Hey I will refresh now');
console.log(add(10, 20));

const person = {
    name: 'john',
    lastname: 'doe'
}

console.log(person)