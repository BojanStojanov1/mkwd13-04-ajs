//USEFUL TERMINAL COMMANDS
// Make sure to intall node lts and git for windows before attempting to run node
// node -v in the terminal to check if you have node installed
// node filename.js - runs a file in node.js ex: node app.js
// cd (change directory) - shows current directory and can be used to move through the folders ex: cd ./src
// ls (list) - shows the files and folders in the currently opened folder in the terminal
// mkdir (makedirectory) - creates one or multiple folders ex: mkdir src assets
// touch - creates one or multiple files ex: touch app.js index.html app.css
import { v4 as uuid } from "uuid";
import { saveNotesToFile, readNotesFromFile } from "./src/notes.service.js";

console.log("This is a node executed file!");
console.log(uuid());

// Creating a Note Class
class Note {
  id = uuid();
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

// const notes = [
//   new Note("I need to teach the node intro", "Borche"),
//   new Note("Learnig node is pretty easy", "John"),
//   new Note("Using bash is really fun", "Viktor"),
// ];

// saveNotesToFile(notes);
const notesData = readNotesFromFile();

console.log("This is the returned data from the notes file:", notesData);

// !window and document are undefined in node
// console.log("window", window);
// console.log("document", document);

setTimeout(() => {
  console.log("node timeout");
}, 1000);
