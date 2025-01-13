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
generateRandomColorForElement(element);