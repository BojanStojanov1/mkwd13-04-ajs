const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Array to store the created contacts
let contacts = [];

let editingContactIndex = null;

// Constructor to create NEW contacts
function Contacts(firstNameValue, lastNameValue, phoneNumberValue) {
    this.id = contacts.length + 1;
    this.firstName = firstNameValue;
    this.lastName = lastNameValue;
    this.phoneNumber = phoneNumberValue;
}

function validateInputs(firstName, lastName, phoneNumber) {
    // Return the expression directly
    return !firstName || !lastName || !phoneNumber
}

// Function to render table
function renderTable() {
    let tableBody = document.getElementById('contactTable').querySelector('tbody');

    // Clear existing rows
    tableBody.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {
        let row = document.createElement("tr");

        let firstNameCell = document.createElement('td');
        let lastNameCell = document.createElement('td');
        let phoneNumberCell = document.createElement('td');
        let actionsCell = document.createElement('td');

        firstNameCell.textContent = contacts[i].firstName;
        lastNameCell.textContent = contacts[i].lastName;
        phoneNumberCell.textContent = contacts[i].phoneNumber;



        // Create action buttons
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            console.log(`Button edit of index ${i} was clicked`)
            editContact(i)
        }



        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = function () {
            console.log(`Button delete of index ${i} was clicked`)
            deleteContact(i);
        }

        // Adding the action buttons in the action cell;
        actionsCell.append(editButton, deleteButton)

        // Adding all the cells (td) in the row
        row.append(firstNameCell, lastNameCell, phoneNumberCell, actionsCell);

        // Adding the row in the table body;
        tableBody.appendChild(row);
    }
}


function addContact() {
    // Select elements
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const errorMessage = document.getElementsByClassName('error')[0];


    // Validate inputs
    const isNotValid = validateInputs(firstName, lastName, phoneNumber, errorMessage)

    if (isNotValid) {
        errorMessage.textContent = 'Please enter valid fields'
        return
    }
    errorMessage.textContent = "";

    // Editing the contact
    if (editingContactIndex !== null) {
        contacts[editingContactIndex].firstName = firstName
        contacts[editingContactIndex].lastName = lastName;
        contacts[editingContactIndex].phoneNumber = phoneNumber

        // Reset value of editing index
        editingContactIndex = null
        document.getElementById('cancelBtn').style.display = 'none';
    } else {
        // Create new contact
        let newContact = new Contacts(firstName, lastName, phoneNumber);
        // Add the new contact in the contacts list
        contacts.push(newContact);
    }



    // Clear Inputs
    clearInputs();

    // Render the contacts in the table
    renderTable()
};

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addContact();
});

function deleteContact(indexOfContact) {
    contacts.splice(indexOfContact, 1)
    renderTable()
}

function editContact(indexOfContact) {
    // Assigning the index of the contact that we want to edit
    editingContactIndex = indexOfContact;

    // Consuming the contact to edit by it's index
    let contactToEdit = contacts[indexOfContact];

    document.getElementById('firstName').value = contactToEdit.firstName;

    document.getElementById('lastName').value = contactToEdit.lastName;

    document.getElementById('phoneNumber').value = contactToEdit.phoneNumber;

    // Show the cancel btn
    document.getElementById('cancelBtn').style.display = 'inline';
}

function clearInputs() {
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('phoneNumber').value = "";
}

cancelBtn.addEventListener("click", function(event){
    event.preventDefault();

    clearInputs();

    document.getElementById('cancelBtn').style.display = 'none';

    editingContactIndex = null;
})