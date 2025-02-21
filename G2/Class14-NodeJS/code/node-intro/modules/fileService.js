const fs = require('fs'); // Import Node.js built-in file system module
const fileName = "test.txt" // Define the filename to work with

module.exports = {
    // Function to create or overwrite a file with new text
    addText: function (text) {
        try {
            fs.writeFileSync(fileName, text)
            console.log("The file was created and text was written!");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    },
    // Function to append text to an existing file
    appendText: function (text) {
        try {
            fs.appendFileSync(fileName, text);
            console.log("Text was appended to the file!");
        } catch (error) {
            console.error("Error appending to file:", error);
        }
    },
    // Function to read the contents of the file
    readText: function () {
        try {
            return fs.readFileSync(fileName, { encoding: 'utf-8' })
        } catch (error) {
            console.error("Error reading file:", error);
            return null;
        }
    }

}