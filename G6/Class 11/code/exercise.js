function Academy(name, students, subjects, start, end){
    this.name = !name ? "Unnamed" : name; //(!name is actually name===undefined || name ===null)
    this.students = !students  ? [] : students;
    this.subjects = !subjects ? [] : subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10; //with this.subjects we are working with the subjects prop of our object, not the subjects that was sent as param. This way if null or undefined was sent and we try subjects.length we won't get an errror, becuse we made the check and gave this.subjects an [] as value in that case
    this.printStudents =  function(){
        this.students.forEach(student => console.log(student)); //again, here we use this.students so that we cannot get null.forEach or undefined.forEach (an error)
    }
    this.printSubjects = function(){
        this.subjects.forEach(subject => console.log(subject));
    }
}

function Subject(title, isElective, academy, students){
    this.title = !title ? "Unnamed" : title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = !students ? [] : students;
    this.numberOfClasses = 10;//default value
    this.overrideClasses = function(numOfClasses){
        // if(numOfClasses < 3){
        //     return;
        // }
        // this.numberOfClasses = numOfClasses;

        //if numOfClass < 3 then nothiing should change, so the new value of this.numberOfClasses should be itslef, else this.numberOfClasses should get the new value of numOfClasses
        this.numberOfClasses = numOfClasses < 3 ? this.numberOfClasses : numOfClasses;
    }
}

let advancedJS = new Subject("Advanced JS", false, "Qinshift", []);
advancedJS.overrideClasses(15);
console.log(advancedJS.numberOfClasses); //15
advancedJS.overrideClasses(1); //1<3
console.log(advancedJS.numberOfClasses); //15

function Student(firstName, lastName, age){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){ //by reference
        this.academy = academy; //by reference

        //we need to add the student in the academys list of students
        //here academy is passed by reference
        //that means that whatever change we do to this.academy will affect the original academy that was sent
        this.academy.students.push(this); //this here is the student object that we are working with
    }
    this.startSubject = function (subjectObject){
        if(this.academy == null){
            console.log("The student must be assigned to an academy");
            return;
        }
        //if filter returned an empty array that means that in the academy there is no such subject
        //else if the filter returned an array with some elemenet, there is a subject with that title
        if(this.academy.subjects.filter(x => x.title == subjectObject.title).length == 0){
            console.log(`The subject is not a part of ${this.academy.name}`);
            return;
        }
        if(this.currentSubject != null){
            this.completedSubjects.push(this.currentSubject); //for ex. you are currently listening to advancedJS. When you start basicC#, advancedJS should be added to your list of completed subjects
        }
        this.currentSubject = subjectObject;
        this.currentSubject.students.push(this);//here we have the subject passed by reference and we can add the student that we are currenttly working with (this) as a member of its property the array of students that are having that subject
    }
}

let cSharp = new Subject("C#", false, "Qinshift", []);
let qinshift = new Academy("Qinshift", [], [advancedJS, cSharp], new Date(), new Date());
let student = new Student("Petko", "Petkovski", 25);
console.log(student);
console.log(qinshift);
student.startAcademy(qinshift);

console.log(student);
console.log(qinshift);

student.startSubject(advancedJS);
console.log(student);
console.log(advancedJS);
//15 classes go by and advancedJS is completed
//it is time to move on to the next subject
student.startSubject(cSharp);
console.log(student);
console.log(cSharp);



