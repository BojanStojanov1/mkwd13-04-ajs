const getNumberOfDigits = (num) => {
	if (typeof (num) !== "number") {
		console.error("Please enter a number.");
		return;
	}

	const strNum = num.toString();
	let counter = 0;
	for (let i = 0; i < strNum.length; i++) {
		const asNum = +strNum[i];
		if (!Number.isNaN(asNum)) {
			console.log(strNum[i]);
			counter++;
		}
	}

	return counter;
}

console.log(`The number of digits is ${getNumberOfDigits(-1234)} without the sign and decimal separator.`);

