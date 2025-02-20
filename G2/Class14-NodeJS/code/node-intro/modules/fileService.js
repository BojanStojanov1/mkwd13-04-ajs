const fs = require('fs');
const fileName = "test.txt"

module.exports = {
    addText: function (text) {
        try {
            fs.writeFileSync(fileName, text)
            console.log("The file was created and text was written!");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    },
    appendText: function (text) {
        try {
            fs.appendFileSync(fileName, text);
            console.log("Text was appended to the file!");
        } catch (error) {
            console.error("Error appending to file:", error);
        }
    },
    readText: function () {
        try {
            return fs.readFileSync(fileName, { encoding: 'utf-8' })
        } catch (error) {
            console.error("Error reading file:", error);
            return null;
        }
    }

}