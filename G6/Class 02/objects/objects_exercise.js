// Create a constructor function for Student objects with:
// Properties:
    // firstName
    // lastName
    // birthYear
    // academy
    // grades - array of numbers
// Methods:
    // getAge() - returns age of student
    // getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    // getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

function Student(fName, lName, bYear, acad, grades){
    // if(!fName){ //if fName has a falsy value -> the negation (!) of a falsy value is truthy so the condition is true
    //     this.firstName = "unnamed";
    // }else{
    //     this.firstName = fName;
    // }
    this.firstName = !fName ? "unnamed" : fName;
    this.lastName = !lName ? "unnamed" : lName;
    this.birthYear = bYear;
    this.academy = !acad ? "unnamed" : acad;
    this.grades = grades;
    this.getAge = function(){
        //VALIDATION
        if (!this.birthYear) { //we need to do the check here, because we don't want to do calculations with invalid data
            return "The student has no birth year"
        } else {
            return (new Date()).getFullYear() - this.birthYear;
        }
    };
    this.getInfo = function(){
        //VALIDATION
        // if(this.firstName == "unnamed"){
        //     return "There is no info about the first name"
        // }
        // if(this.lastName == "unnamed"){
        //     return "There is no info about the last name"
        // }
        // if(this.academy == "unnamed"){
        //     return "There is no info about the academy"
        // }

        if (this.firstName == "unnamed" || this.lastName == "unnamed" || this.academy == "unnamed") {
            return "There is some missing info about the student!";
        } else {
            return `This is a student ${this.firstName} ${this.lastName} from the academy ${academy}`;
        }
    };

    this.getGradesAverage = function(){
        //VALIDATION
        if(!this.grades || this.grades.length == 0){ //null.length will cause an errror
            return "There are no grades";
        }else{
            let sum = 0;
            for(let grade of grades){
                if(isNaN(grade)){
                    continue; //if the grade is not a number -> skip it
                }else{
                    sum += grade;
                }
            }
           return sum/this.grades.length;
        }
    }
}

let students = [new Student("Viktor", "Petrovski"), new Student("Kristijan", "Sofronijoski", 1995, "Qinshift", [5, 5, 4, 3, 5]), new Student("Martin", "Popovski", 1997, "Qinshift")];
console.log(students[0].getInfo());
console.log(students[1].getGradesAverage());
console.log(students[2].getAge());