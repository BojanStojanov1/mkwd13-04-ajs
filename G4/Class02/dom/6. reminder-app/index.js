const btnAdd = document.getElementById('btnAdd');
const showAll = document.getElementById('showAll');
const title = document.getElementById('title');
const priority = document.getElementById('priority');
const color = document.getElementById('color');
const description = document.getElementById('description');
const result = document.getElementById('result');

const reminders = [];

function Reminder(title, priority, color, description) {
	this.title = title;
	this.priority = priority;
	this.color = color;
	this.description = description;
}

function resetForm() {
	title.value = '';
	priority.value = '';
	color.value = '';
	description.value = '';
}

function clearTable() {
	result.innerHTML = '';
}

btnAdd.addEventListener('click', function () {
	const reminder = new Reminder(title.value, priority.value, color.value, description.value);

	reminders.push(reminder);
	resetForm();
});

showAll.addEventListener('click', function () {
	clearTable();

	const table = document.createElement('table');
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const headerRowTitle = document.createElement('td');
	const headerRowPriority = document.createElement('td');
	const headerRowDescription = document.createElement('td');

	headerRowTitle.innerText = 'Title';
	headerRowPriority.innerText = 'Priority';
	headerRowDescription.innerText = 'Description';

	headerRow.append(headerRowTitle, headerRowPriority, headerRowDescription);
	thead.append(headerRow);
	table.append(thead);

	const tbody = document.createElement('tbody');
	for (const reminder of reminders) {
		const tr = document.createElement('tr');

		const rowTitle = document.createElement('td');
		const rowPriority = document.createElement('td');
		const rowDescription = document.createElement('td');

		rowTitle.innerText = reminder.title;
		rowTitle.style.color = reminder.color;
		rowPriority.innerText = reminder.priority;
		rowDescription.innerText = reminder.description;

		tr.append(rowTitle, rowPriority, rowDescription);
		tbody.append(tr);
	}

	table.append(tbody)

	result.append(table);
})