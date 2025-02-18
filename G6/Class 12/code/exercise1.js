function Person(firstName, lastName, age) {
    debugger
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    debugger
    //inheritance
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    //specific properties and methods for the student
    this.studentId = studentId;
    this.academyName = academyName;
    this.study = function(){
                                  //person                      //student
        //console.log(`The student ${this.firstName} studies on ${this.academyName}`);
        console.log(`The student ${this.getFullName()} studies on ${this.academyName}`);
    }
}

debugger
let student1 = new Student("Petko", "Petkovski", 25, "Qinshift", 1);
console.log(student1);

let student2 = new Student("Nikola", "Nikolovski", 35, "Qinshift", 2);
console.log(student2);