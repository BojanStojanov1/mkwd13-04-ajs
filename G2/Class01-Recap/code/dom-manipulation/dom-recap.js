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

// ***** TEXT *****
console.log(title.innerText); // shows the human-readable text, excludes content hidden by css
console.log(title.textContent); // includes content hidden by css

// ***** ATTRIBUTES *****
title.firstChild.removeAttribute("hidden")
let paragraphCustomAttribute = firstParagraph.getAttribute("customAttribute")
console.log(paragraphCustomAttribute);
firstParagraph.setAttribute("bob", "bobsky"); // add new attribute (bob) and value (bobsky)

// ***** STYLE *****
// element.style.nameOfCssProperty = ""
title.style.color = "darkred"


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

// We can select dynamically added elements as well
document.getElementById("magenta-text").style.color = "gold"

// BAD APPROACH
// Here the browser will auto-generate a closing tag (</ul>). The whole list structure will be broken.
thirdDiv.innerHTML = "<ul>"
for (let i = 0; i < 10; i++) {
    thirdDiv.innerHTML += `<li>Item ${i + 1}</li>`
}
thirdDiv.innerHTML += "</ul>"

// GOOD APPROACH
// Instead you can build a string containing the needed html, and then just assign it to the element's innerHTML
let thirdDivHtml = "";
thirdDivHtml += "<ul>"
for (let i = 0; i < 10; i++) {
    thirdDivHtml += `<li>Item ${i + 1}</li>`
}
thirdDivHtml += "</ul>"

debugger
// debugger => keyword that tells the browser to stop execution of code at that line
// NOTE: Dev tools must be oppened in the browser in order for the debugger to work

thirdDiv.innerHTML = thirdDivHtml;
