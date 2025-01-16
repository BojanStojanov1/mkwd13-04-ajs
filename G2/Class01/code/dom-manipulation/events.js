console.log("");
console.log("===================== EVENTS =====================");

// Find the element on which you want to add an event listener
const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");

buttonOne.addEventListener("click", function () {
    console.log("Button 1 has been clicked!");
})

buttonTwo.addEventListener("click", function (event) {
    console.log("Button 2 has been clicked!");
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.dataset);
})

function handleClick(e) {
    console.log(e);
    console.log("Button 3 has been clicked!");
}

buttonThree.addEventListener("click", handleClick)