# Exercises

## Arrays

1. Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
2. Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
3. Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

## Objects

Create a constructor function for Student objects with:

- Properties:
  - firstName
  - lastName
  - birthYear
  - academy
  - grades - array of numbers
- Methods:
  - getAge() : returns age of student
  - getInfo() : returns "This is student firstName lastName from the academy academy!"
  - getGradesAverage() : returns the average of the student grades

Create an array with 3 students

## DOM

Create an HTML page.\
On every refresh the page should pick a random color and change the background of the page.\
The RGB values of the color should be shown in the center of the page on every restart

- Hint: use Math.random() and Math.floor()

## Rock, Paper, Scissors Game

Create a simple rock-paper-scissors game that lets the user play against the computer.
How It Works

- Choices: The user can select rock, paper, or scissors by clicking the buttons.
- Random Computer Choice: The computer randomly selects one of the three choices.

Determine Winner:

- If both choices are the same, it's a tie.
  The winner is determined using the game rules:
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper

Display Result: The result is displayed in the #result div.
