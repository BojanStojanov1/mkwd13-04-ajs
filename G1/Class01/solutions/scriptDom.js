// ---------------Random color page--------------------
function generateColorNumber() {
    return Math.floor(Math.random() * 255);
}

function generateRgbArray() {
    let rgbArray = [];
    for(let i = 0; i < 3; i++) {
        let color = generateColorNumber();
        rgbArray.push(color);
    }
    return rgbArray;
}

function rgbArrayToString(rgbArray) {
    let rgb = 'rgb(';
    for(let i = 0; i < rgbArray.length; i++) {
        rgb += `${rgbArray[i]}`;
        if(i !== rgbArray.length - 1) {
            rgb += ',';
        }
    }
    rgb += ')';
    return rgb;
}

function generateRandomColorForElement(element) {
    let rgbArray = generateRgbArray();
    let rgbColor = rgbArrayToString(rgbArray);
    element.style.backgroundColor = rgbColor;
    element.innerText = rgbColor;
}

let element = document.getElementById('main');
// generateRandomColorForElement(element);
// ---------------Random color page--------------------


// ---------------Title Generator--------------------
function generateH1Element() {
    let h1 = document.createElement('h1');
    return h1;
}

function getInputValues() {
    let inputs = document.getElementsByTagName('input');
    let result = {};
    for (let input of inputs) {
        result[input.name] = input.value;
    }
    return result;
}

function generateH1(element) {
    let values = getInputValues();
    let h1Element = generateH1Element();
    h1Element.style.color = values.color;
    h1Element.style.fontSize = values.fontSize + 'px';
    h1Element.innerText = values.text;

    element.appendChild(h1Element);
}

document.getElementById('btn')
    .addEventListener('click', function() {
        let contentDiv = document.getElementById('content');
        generateH1(contentDiv);
    });



// ---------------Title Generator--------------------

// ---------------Student constructor function---------------

function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = birthYear;
    this.academy = academy ? academy : 'N/A';
    this.grades = grades ? grades : [];

    this.getAge = function() {
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.dateOfBirth;
    }

    this.getInfo = function() {
        let academyInfo = '';
        if (this.academy === 'N/A') {
            academyInfo = 'and its not part of any academy';
        } else {
            academyInfo = `from the academy ${academy}!`;
        }
        return `This is student ${firstName} ${lastName} ${academyInfo}`;
    }

    this.getGradesAverage = function() {
        if(this.grades.length === 0) {
            return 0;
        }
        let average = 0;
        for(let grade of this.grades) {
            average += grade;
        }
        return Math.floor(average / this.grades.length);
    }
}

let student1 = new Student('Trajan', 'Stevkovski', 1993);
let student2 = new Student('Filip', 'Zlatanovski', 1997, 'QA');
let student3 = new Student('Bob', 'Bobski', 1999, 'QA', [2,3,4,5,6,7]);

let studentsArray = [student1, student2, student3];

for(let student of studentsArray) {
    console.log('Student age: ' + student.getAge());
    console.log('Student info: ' + student.getInfo());
    console.log('Student average grades: ' + student.getGradesAverage());

}

// ---------------Student constructor function---------------