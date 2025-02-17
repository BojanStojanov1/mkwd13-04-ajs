// COMMON JS
// Nativly supported by nodejs


// fs => file system
// inner-built module in NODEJS
const fs = require('fs');

// custom module
const { iterateMovies } = require('./helper.js');

// external module (already craeted by someone-else)
// npm => node package manager


// Writes in the file system
// overwriting all previous conent
// if the file does not exist it will create it.
function writeIntoFile(filePath, content){
    fs.writeFileSync(filePath, content);
};


writeIntoFile('dummy.txt', 'Hey I just wrote in a file using node.js!')

writeIntoFile('dummy.txt', 'This is a new content');

writeIntoFile('dummy.txt', 'This is third content');

const appendIntoFile = (filePath, content) => {
    fs.appendFileSync(filePath, content);
}

appendIntoFile('dummy.txt', '\nThis is appeneded content!');
appendIntoFile('dummy.txt', '\nNode js is awesome!');

// writeIntoFile('dummy.txt', 'I overwrote everything') // This will overwrite all content

iterateMovies(['Movie1', 'Movie2', 'Movie3'])
