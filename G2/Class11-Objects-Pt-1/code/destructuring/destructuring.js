console.log("====================== DESTRUCTURING ======================");
// => breaking down a complex structure into simpler parts
// => cleaner syntax to get items from arrays, or property-values from objects, and put them into distinct variables

let userObj = {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 28,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
        "color": "Brown",
        "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
        },
        "country": "United States"
    }
}

console.log("");
console.log("============== Object Destructuring ==============");


// ===> Example: take id, firstName, lastName (WITHOUT DESTRUCTURING)
// const id = userObj.id;
// const firstName = userObj.firstName;
// const lastName = userObj.lastName;
// console.log(id, firstName, lastName);

// ===> Example: take id, firstName, lastName (WITH DESTRUCTURING)
let { id, firstName, lastName } = userObj;
// id = 10;
console.log(id, firstName, lastName);


// ===> Example: take firstName, lastName, age (WITH DESTRUCTURING)
const { userFirstName, userLastName, age } = userObj;
console.log(userFirstName, userLastName, age);
// NOTE: We must use the same key-names (property names) !!!  

// *However, there is workaround syntax even for that (BONUS)* 
// Syntax: { propertyName : ourCustomVariableName } = ourObject
const { firstName: userFirstNameCustom } = userObj;
console.log(userFirstNameCustom);


// ===> Example: take address latitude and longitude (WITHOUT DESTRUCTURING)
let latitude = userObj.address.coordinates.lat;
let longitude = userObj.address.coordinates.lng;
console.log(latitude, longitude);

// ===> Example: take address latitude and longitude (WITH DESTRUCTURING)
// const { lng, lat } = userObj.address.coordinates;
// console.log(lat, lng);

// ===> Example: take address city, latitude and longitude (WITH DESTRUCTURING)
const { city, coordinates: { lat, lng } } = userObj.address;
console.log(city, lat, lng);


console.log("");
console.log("============== Parameters Destructuring ==============");

// ===> Example: without destructuring
function getUserInfo(user) {
    return `${user.firstName} ${user.lastName}`;
}

console.log(getUserInfo(userObj));

// ===> Example: with parameters destructuring
function getUserInfoDest({ firstName, lastName, age }) {
    return `${firstName} ${lastName} ${age}`;
}
console.log(getUserInfoDest(userObj));


console.log("");
console.log("============== Array Destructuring ==============");







