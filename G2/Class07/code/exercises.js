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
        const maleFromSkopjeFullNames = students.filter(s => s.gender === "Male" && s.city === "Skopje" && s.age > 18).map(s => `${s.firstName} ${s.lastName}`);
        console.log(maleFromSkopjeFullNames);


        // NOTE: You can write chained functions in multiple lines for better readability !!!


        // The average grades of all female students over the age of 24
        const avgGradeFemaleOver24 = students
            .filter(s => s.gender === "Female" && s.age > 24)
            .map(s => s.averageGrade);
        console.log(avgGradeFemaleOver24);

        // All male students with a name starting with B and average grade over 2
        const maleStartingWithBAvgGrade = students.filter(s => s.gender === "Male" && s.firstName.startsWith("B") && s.averageGrade > 2);
        console.log(maleStartingWithBAvgGrade);

        // Student emails of all female students with age between 20 and 30 years, ordered ascending
        const femaleEmails = students
            .filter(s => s.gender === "Female" && s.age >= 20 && s.age <= 30)
            .map(s => s.email)
            .sort(); // sorts ascending by default
        console.log(femaleEmails);

        // Students full names of students above 40, ordered descending
        const studentsAbove40Desc = students
            .filter(s => s.age > 40)
            .map(s => `${s.firstName} ${s.lastName}`)
            .sort((a, b) => b.localeCompare(a));
        console.log(studentsAbove40Desc);

        // Count of students using google mail
        const googleMailCount = students.filter(s => s.email.includes("@gmail") || s.email.includes("@google")).length;
        console.log(googleMailCount); // 15

        // The average age of female students living in Skopje
        const femaleStudentsInSkopje = students.filter(s => s.gender === "Female" && s.city === "Skopje");
        const ageSum = femaleStudentsInSkopje.reduce((acc, curr) => acc + curr.age, 0);
        const averageAge = ageSum / femaleStudentsInSkopje.length;
        console.log(averageAge); // 23.25
    });
