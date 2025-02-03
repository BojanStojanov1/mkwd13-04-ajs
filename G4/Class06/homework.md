## Homework

```JavaScript
let students1 = [
	{ firstName: "Andrej", lastName: "H", grades: [3, 2, 4], hobby: ['Gym', 'Gaming'], age: 19 },
	{ firstName: "Bojan", lastName: "B", grades: [4, 3, 5], hobby: ['Books', 'Bikes'], age: 33 },
	{ firstName: "Jasmin", lastName: "M", grades: [5, 3, 2], hobby: ['Drawing', 'Football'], age: 15 },
	{ firstName: "Danica", lastName: "J", grades: [4, 3, 4], hobby: ['Cars', 'Movies'], age: 18 },
	{ firstName: "Borce", lastName: "K", grades: [4, 3, 3], hobby: ['Books', 'Trucks'], age: 16 },
	{ firstName: "Arzu", lastName: "I", grades: [5, 4, 4], hobby: ['Drawing', 'Gym'], age: 20 }
];
```

1. Create an array (without modifying the original array) with students that:

   - have average grade above 3
   - first use .map() to remap each student object in new structure (you need to calculate the average grade)
   - use .reduce() wihin each .map() iteration to calculate the grade for every student
   - are older than 18 (use .filter())
   - are interested in 'Gym' or 'Books' (use .includes())

   The result array should be an array with

   - string of names only separated with '|' with CAPITAL letters
   - Example result:

   ```JavaScript
   ['A|N|D|R|E|J', 'B|O|J|A|N', 'A|R|Z|U']
   ```

2. Create a second array (without modifying the original array) with student objects that:

   - have birthYear property (current year - student.age)
   - completely delete the 'hobby' property from each object
   - create new property 'hobbiesAsEmoji' where each hobby string is replaced with corresponding emoji
     - use .findIndex() to find the index of the hobby
     - if found, use .splice() to remove the string and replace it with an emoji
       - Gym -> 🏋️‍♂️
       - Gaming -> 🎮
       - Books -> 📚
       - Bikes -> 🚴
       - Drawing -> 🎨
       - Football -> ⚽
       - Cars -> 🚗
       - Movies -> 🎥
       - Trucks -> 🚚
   - create new property hobbiesAsCsv (csv -> coma-separated value)
     - the property should be a coma separated value with lowercase hobbies
       - 'gym, gaming'
   - delete firstName, lastName, grades and age properties
   - create fullName property for the full name of the student
   - sort the result array alphabetically by student's lastName

   Example result:

   ```JavaScript
   [
   	{
   		fullName: 'Andrej H',
   		birthYear: 2006,
   		hobbiesAsEmoji: [🏋️‍♂️, 🎮],
   		hobbiesAsCsv: 'gym, gaming'
   	}
   ]
   ```
