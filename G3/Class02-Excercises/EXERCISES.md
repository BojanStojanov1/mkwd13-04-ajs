# DOM Manipulation Exercises

This document lists a series of exercises designed to practice basic DOM manipulation skills. Each exercise includes requirements that guide you through building small JavaScript programs that interact with the Document Object Model (DOM).

---

## Exercise 1: Refresher – Toggle Paragraph Style

**Requirements:**

- Create an HTML page with:
  - A `<p>` element containing some text.
  - A button labeled "Toggle Style".
- When the button is clicked:
  - Toggle a CSS class on the `<p>` element that changes its style (for example, change text color or font size).

---

## Exercise 2: Add List Items Dynamically

**Requirements:**

- Create an HTML page with:
  - An empty unordered list: `<ul id="itemList"></ul>`.
  - A button labeled "Add Item".
- When the button is clicked:
  - Create a new `<li>` element with text "New Item".
  - Append this `<li>` to the `<ul>`.

---

## Exercise 3: Change Background Color Based on Input

**Requirements:**

- Create an HTML page with:
  - An input field `<input id="colorInput" placeholder="Enter a color or hex code" />`.
  - A button labeled "Change Background".
- When the button is clicked:
  - Read the value from the input.
  - Change the page's background color to the entered value.

---

## Exercise 4: Remove First List Item

**Requirements:**

- Create an HTML page with:
  - An unordered list `<ul id="removableList">` containing several `<li>` items.
  - A button labeled "Remove First Item".
- When the button is clicked:
  - Remove the first `<li>` from the list.

---

## Exercise 5: Move an Element to a New Parent

**Requirements:**

- Create an HTML page with:
  - Two `<div>` containers with IDs `container1` and `container2`.
  - A `<p>` element with some text inside `container1`.
  - A button labeled "Move Paragraph".
- When the button is clicked:
  - Move the `<p>` element from `container1` to `container2`.

---

## Exercise 6: Fetch and Display Posts from API

**Requirements:**

- Create an HTML page with:
  - A `<div id="postsContainer"></div>` to display posts.
  - A button labeled "Load Posts".
- When the button is clicked:
  - Fetch posts from the JSONPlaceholder API endpoint: `https://jsonplaceholder.typicode.com/posts`.
  - Display the first 5 posts inside the `postsContainer`.
    - For each post, create an element that shows the post's title and body.
    - Append each post element to the container.
