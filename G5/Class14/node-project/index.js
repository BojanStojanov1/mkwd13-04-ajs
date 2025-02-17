// To init a nodejs project
// we run the command

// npm init => inits a nodejs project
// node_modules => the code of the external libraries/dependencies that we installed, we do not push it to gihub!!!
// npm install => it will install all necessery dependencies that are needed for a project to run, meaning it will create the folder node_modules for us



const colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

const myLogger = (textLog, status) => {
    if(status === "success"){
        console.log(`${textLog}`.green)
        return
    }
    else if(status === "error"){
        console.log(`${textLog}`.red)
        return
    }

    console.log(`${textLog}`.yellow)
}

myLogger('my log')
myLogger('my log success', 'success')