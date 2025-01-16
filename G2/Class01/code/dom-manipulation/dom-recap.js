console.log("===================== DOM MANIPULATION =====================");

console.log("");
console.log("============= Selectors =============");

const title = document.querySelector("h1");
const firstParagraph = document.querySelector("[name='Paragraph One']");
const secondParagraph = document.getElementsByTagName("p")[1];
const firstDiv = document.getElementById("first-div")
const secondDiv = document.querySelector(".second-div")
// const secondDiv = document.getElementsByClassName("second-div")[0]
const thirdDiv = secondDiv.nextElementSibling;


console.log("");
console.log("============= Get or Change data of an Element =============");

console.log(title.innerText);
console.log(title.textContent);

title.firstChild.removeAttribute("hidden")
let paragraphCustomAttribute = firstParagraph.getAttribute("customAttribute")
console.log(paragraphCustomAttribute);
firstParagraph.setAttribute("bob", "bobsky"); // add new attribute (bob) and value (bobsky)

title.style.color = "darkred";


console.log("");
console.log("============= Creating and Appending new Elements =============");

// ====== Using document.createElement("element-name") ======
let h2 = document.createElement("h2")
h2.innerText = "H2 created using JS"
h2.style.color = "magenta"
firstDiv.appendChild(h2)

let paragraph = document.createElement("p")
paragraph.innerText = "This is a paragraph"
firstDiv.appendChild(paragraph)

// ====== Using innerHTML ======
// element.innerHTML = "";
secondDiv.innerHTML = "<h2>This is created using innerHtml</h2>";
secondDiv.innerHTML += "<p style='color:magenta;' id='magenta-text'>Hello this is a magenta paragraph</p>"

document.getElementById("magenta-text").style.color = "gold"


thirdDiv.innerHTML = "<ul>"
for (let i = 0; i < 10; i++) {
    thirdDiv.innerHTML += `<li>Item ${i + 1}</li>`
}
thirdDiv.innerHTML += "</ul>"


let thirdDivHtml = "";
thirdDivHtml += "<ul>"
for (let i = 0; i < 10; i++) {
    thirdDivHtml += `<li>Item ${i + 1}</li>`
}
thirdDivHtml += "</ul>"

// debugger
thirdDiv.innerHTML = thirdDivHtml;




