const body = document.querySelector("#body");

/*
	const randomNumber = Math.floor(Math.random() * 256);
	
	1. Here we have multiple uses of methods provided by the Math object
		- Math.random() creates a random decimal number between 0 and 1
			- ex: Math.random() => 0.28447815969214285
		- We mulitply with 256 as this would give us a random decimal number between 0 and 255 instead of 0 and 1
			- the result is still decimal
			- ex: Math.random() * 256 => 162.1116550911459
		- RGB values can be integers between 0 and 255 only, no decimals
		- We use Math.floor() method to round the number to the lower number
			- ex:
				1) let random = Math.random() * 256 => 162.1116550911459
				2) let rounded = Math.floor(random) => 162;
			- we can also use Math.ceil()
				1) let random = Math.random() * 256 => 162.1116550911459
				2) let rounded = Math.floor(random) => 163;
				- this can introduce bugs
					- if Math.random() generates 255.1116574511452
					- the rounded value would be 256
						- 256 is invalid RGB value
*/

const colorR = Math.floor(Math.random() * 256);
const colorG = Math.floor(Math.random() * 256);
const colorB = Math.floor(Math.random() * 256);

body.textContent = `RGB(${colorR}, ${colorG}, ${colorB})`;

body.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
body.style.color = "white";
body.style.textAlign = "center";
body.style.paddingTop = "49vh"