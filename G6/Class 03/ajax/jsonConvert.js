let academy = {
    trainer: "Tijana Stojanovska",
    assistant: "Murat Koca",
    name: "Qinshift",
    students: ["Viktor", "Ivan", "Sinisa", "Martin"]
};

//serialization (get JSON string from JS object)
let jsonString = JSON.stringify(academy);
console.log(`JSON string: ${jsonString}`);

//parse / deserialization
let jsObject = JSON.parse(jsonString);
console.log(jsObject);
console.log(jsObject.trainer);