const fs = require('fs');

const filename = 'jsonDatabase.txt';

const service = {
    addData: function(data) {
        let strData = JSON.stringify(data);
        fs.writeFile(filename, strData, function(error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log('The data is saved');
        });
    },
    appendData: function(data) {
        let readData = this.readData();
        let newData = { ...readData, ...data };
        let strData = JSON.stringify(newData);
        fs.writeFile(filename, strData, function(err) {
            if(err) {
                console.log(err);
                return;
            }
            console.log('The data is successfuly appended to the file');
        })
    },
    readData: function() {
        let strData = fs.readFileSync(filename, { encoding: 'utf-8' });
        return JSON.parse(strData);
    }
};

module.exports = service;