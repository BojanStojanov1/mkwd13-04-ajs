const button = document.getElementById("btn");
const color = document.getElementById("color");
const size = document.getElementById("size");
const text = document.getElementById("text");

function createh1(color, size, text) {
	let h1 = document.createElement("h1");

	h1.innerText = text;
	h1.style.color = color;
	h1.style.fontSize = `${size}px`;

	document.body.appendChild(h1)
}

function resetForm() {
	color.value = '';
	size.value = '';
	text.value = '';
}

button.addEventListener("click", function () {
	const colorValue = color.value;
	const sizeValue = size.value;
	const textValue = text.value;

	createh1(colorValue, sizeValue, textValue);
	resetForm();
})