## Reminder App

- Create a reminder app
- There should be:
  - An input for entering the title
  - An input for entering priority
  - An input for color
  - A textarea for adding a description
  - A button for adding the reminder
  - A button for showing all reminders
- When the button for adding is clicked an object needs to be created with the properties from the inputs ( title,
  priority, color, and description )
- The object should then be added to an array of reminders
- When the button for showing all reminders is clicked it should show a table with title, priority, and description
  columns
- The title should be the color of the "color" property

## Homework changes

- When user clicks "Add" the new reminder is added in the array of reminders, but it is not shown in the table
  - Show the message: "Table needs to be updated" above the table, whenever user adds a new reminder
  - Hide the message after user updates the table (after "Show All" click)
- If user clicks "Add" multiple times and then "Show All" the table shows empty rows

  - Add validation to only push the reminder to the array if all fields have value
  - Add validation message below each corresponding input

    - Step by step scenario:

      1. user fills all values except title
      2. user clicks on "Add"
      3. don't push the reminder to the list
      4. show message "Required field" below the title field

      - NOTE: THIS HAS TO BE DONE FOR ALL FIELDS

BONUS: Add Edit/Delete functionality for each table row.
