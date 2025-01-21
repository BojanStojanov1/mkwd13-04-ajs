console.log("================ JSON (JavaScript Object Notation) ================");
// JSON (JavaScript Object Notation) is a lightweight data format that is easy for humans to read and write and easy for machines to parse and generate 
// It is widely used for exchanging data between a client and server in web applications

// https://github.com/qa-codecademy/mkwd13-04-ajs/blob/main/shared_data/students.json


console.log("");
console.log("================ Create JSON from JavaScript Object ================");
// Creating a JSON string from a JavaScript object is called "serialization"
// This is useful for sending data to a server (or saving it to a file)
// JSON.stringify(JSObject)

let jsObject = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 34,
    isStudent: true,
    favouriteSubjects: [
        "JavaScript",
        "C#"
    ],
    printInfo: function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
    }
}

console.log(jsObject);
jsObject.printInfo();
console.log(typeof jsObject);

// ===> Serialize JavaScript object to JSON 
let jsonString = JSON.stringify(jsObject);

console.log(jsonString);
console.log(typeof jsonString);
console.log(jsonString.firstName); // undefined
// NOTE: Methods are not serialized !!!


console.log("");
console.log("================ Create JavaScript Object from JSON ================");
// Converting a JSON string into a JavaScript object is called "deserialization"
// This is useful when receiving JSON data from an API or reading JSON from a file.
// JSON.parse(jsonString)

let courseJson = `
    {
        "trainer": "John Doe",
        "assistant": "Jane Doe",
        "students": [
            "Bob",
            "Samantha",
            "Chris",
            "Jill",
            "Greg",
            "Maria",
            "Tom",
            "Sue"
        ],
        "academy": "Code"
    }
`;

// ===> Deserialize JSON to JavaScript object  
let jsonObject = JSON.parse(courseJson);

console.log(jsonObject);
console.log(jsonObject.trainer);

// BONUS: This is how the courseJson json would look like in an XML format 
/*
    <course>
        <trainer>John Doe</trainer>
        <assistant>Jane Doe</assistant>
        <students>
            <student>Bob</student>
            <student>Samantha</student>
            <student>Chris</student>
            <student>Jill</student>
            <student>Greg</student>
            <student>Maria</student>
            <student>Tom</student>
            <student>Sue</student>
        </students>
        <academy>Code</academy>
    </course>
*/