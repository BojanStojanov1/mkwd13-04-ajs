const saveButton = document.getElementById('save-student');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const age = document.getElementById('age');
const email = document.getElementById('email');

const database = [];

/********************************************************************
*********************************************************************
	
	Use functions to split functionality and code responsibility!

*********************************************************************
*********************************************************************/

function Student(firstName, lastName, age, email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.email = email;
}

// this function only handles logging of students
function logStudents() {
	for (let i = 0; i < database.length; i++) {
		console.log(`${i + 1}) ${database[i].firstName}`)
	}
}

// this function only cares about resetting the form
function resetForm() {
	fname.value = '';
	lname.value = '';
	age.value = '';
	email.value = '';
}

saveButton.addEventListener('click', function () {
	// this function only handles the button click and object creation
	// we should not have log or reset functionality here to keep our code clean

	const student = new Student(fname.value, lname.value, age.value, email.value)

	database.push(student);

	logStudents();
	resetForm();
})