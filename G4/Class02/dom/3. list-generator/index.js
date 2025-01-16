const button = document.getElementById("btn");
const color = document.getElementById("color");
const size = document.getElementById("size");
const items = document.getElementById("items");
const body = document.getElementById('body')

/*
	.split()

	A method that we can use to split a string into an array of elements by a given separator
	- separator can be any string that we want

	ex (note, this is a string, not an array): 
		- "one,two,three,four".split(',')
		- result => ['one', 'two', 'three', 'four']

		- "bananas".split('a')
		- result => ['b', 'n', 'n', 's']

		- "15/01/2025".split('/')
		- result => ['15', '01', '2025']
*/

function createul(color, size, items) {
	let ul = document.createElement("ul");
	const values = items.split(',');

	for (const val of values) {
		console.log(val)
		let li = document.createElement('li')
		li.innerText += val;
		li.style.color = color;
		li.style.fontSize = `${size}px`;
		ul.appendChild(li)
	}

	body.append(ul);
}

function resetForm() {
	color.value = '';
	size.value = '';
	items.value = '';
}

button.addEventListener("click", function () {
	const colorValue = color.value;
	const sizeValue = size.value;
	const itemValue = items.value;

	createul(colorValue, sizeValue, itemValue);
	resetForm();
})