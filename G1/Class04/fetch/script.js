let javascriptObj = {
    name: 'Trajan',

    getName: function() {
        console.log('Hello');
    }
}

let jsonObj = {
    "name": "Trajan",
    "lastName": "Stevkovski"
}

let jsObj = JSON.stringify(javascriptObj);
let jsonObjString = JSON.stringify(jsonObj);

console.log(jsObj);
console.log(jsonObjString);

console.log(JSON.parse(jsObj));
console.log(JSON.parse(jsonObjString));

