let dog = {
    name: 'Barky',
    isHappy: true,
    bark: function() {
        console.log('Bark');
    }
}

let dog1 = Object.create(dog);
dog1.isHappy = false;
dog1.name = 'Sparky';
// console.log(dog1);
// dog1.bark();

let dog2 = {
    ...dog
};

dog2.name = 'Jake';
// dog2.bark();
// console.log(dog2);


// ------------------

let person = {
    name: 'Trajan'
}

let address = {
    street: 'Street one',
    number: 12,
    contactPerson: 'Trajan'
}

let personWithAddress = Object.assign(person, address);
// console.log(personWithAddress);

let otherAddress = {
    street: 'Street Two',
    number: 15,
    contactPerson: 'Filip'
}

let updatedAddress = Object.assign(personWithAddress, otherAddress);
// console.log(updatedAddress);

let personWithAddressSpread = {
    ...person,
    ...address
}
// console.log(personWithAddressSpread);
let updatedAddressSpread = {
    ...personWithAddressSpread,
    ...otherAddress
}
// console.log(updatedAddressSpread);

// -------------------------

let apiSecrets = {
    apiKey: 'some value',
    userToken: '',
    userSecrets: '',
    encoding: '',
    font: ''
};

Object.freeze(apiSecrets);

apiSecrets.apiKey = 'new value';
delete apiSecrets.font;
// apiSecrets.url = 'some url';
// console.log(apiSecrets);

// console.log(Object.isFrozen(apiSecrets));

// ------------------------------

let apiSecrets1 = {
    apiKey: 'some value',
    userToken: '',
    userSecrets: '',
    encoding: '',
    font: ''
};

Object.seal(apiSecrets1);

apiSecrets1.font = 'new font';
apiSecrets1.url = 'new Url';
// console.log(apiSecrets1);

// ------------------------------

let obj = {
    firstName: 'Trajan',
    lastName: 'Stevkovski',
    age: 33,
    academy: 'Web development',
    courses: ['Javascript', 'C#', '.Net', 'Node.js']
};

// for(let course of obj.courses) {
//     console.log(course);
// }

// for (let key in obj) {
//     console.log(key);
// }

// let keysArray = Object.keys(obj);
// console.log(keysArray);

// console.log(Object.values(obj));

// for (let key in obj) {
//     console.log('Key: ', key);
//     console.log('Value: ', obj[key]);
// }

// for(let [key, value] of Object.entries(obj)){
//     console.log(key);
//     console.log(value);
// }


function fibonacci(number) {
    if(number <= 1) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

// console.log(new Date());
// let firstResult = fibonacci(45);
// console.log(firstResult);
// console.log(new Date());

let results = {
    0: 1,
    1: 1
}

function fibonacciImproved(n) {
    if(results[n]) {
        return results[n];
    }

    let result = fibonacciImproved(n - 1) + fibonacciImproved(n - 2);
    results[n] = result;
    return result;
}

// console.log(new Date());
// let secondResult = fibonacciImproved(100);
// console.log(secondResult);
// console.log(results);
// console.log(new Date());