console.log("================== EXERCISE 01 ==================");


fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G2/Class07/students.json")
    .then(response => response.json())
    .then(students => {
        console.log(students);
        /*
            {
            "id": 1,
            "firstName": "Frasquito",
            "lastName": "Koop",
            "email": "fkoop0@ow.ly",
            "gender": "Male",
            "city": "Benzilan",
            "averageGrade": 4,
            "age": 33
            },
        */

        // All students with an average grade higher than 3
        const studentsWithAvgHigherThan3 = students.filter(s => s.averageGrade > 3);
        console.log(studentsWithAvgHigherThan3);

        // All female student names with an average grade of 5
        const femaleStudentsNames = students.filter(s => s.averageGrade === 5 && s.gender === "Female").map(s => `${s.firstName} ${s.lastName}`)
        console.log(femaleStudentsNames);

        // All male student full names who live in Skopje and are over 18 years old

        // The average grades of all female students over the age of 24
        // All male students with a name starting with B and average grade over 2
        // Student emails of all female students with age between 20 and 30 years, ordered ascending
        // Students full names of students above 40, ordered descending
        // Count of students using google mail
        // The average age of female students living in Skopje
    });
