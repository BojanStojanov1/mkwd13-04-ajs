let btn = document.getElementById("myBtn");
let colorInput = document.getElementById("color");
let fontSize =  document.getElementById("fontSize");
let textInput =  document.getElementById("text");
let result = document.getElementById("result");

btn.addEventListener("click", function(){
    result.innerHTML = ""; //clear the previous result
    if(!colorInput.value){
        console.log("You must enter a color");
        return;
    }
    if(!fontSize.value){
        console.log("You must enter a font size");
        return;
    }
    if(!parseFloat(fontSize.value)) //parseFloat parses the value to a decimal number
    {
        console.log("You must enter a number for font size");
        return;
    }
    if(!textInput.value){
        console.log("You must enter some text input");
        return;
    }
    //pizza,fries,cake -> includes a comma
    //pizza fries -> does not include a comma
    if(!textInput.value.includes(",")){ //if the text does not contain ,
        console.log("You must enter several items");
        return;
    }
    let list = document.createElement("ul");
    //["pizza", "fries", "cake"];
    let items = textInput.value.split(","); //splits the text by comma and returns an array of strings
    for(let item of items){
        let listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.style.color = colorInput.value;
        list.style.fontSize = fontSize+"px";
        list.appendChild(listItem); 
    }
    result.appendChild(list);

    //reset the values of the inputs
    colorInput.value = "";
    fontSize.value = "";
    textInput.value = "";
})