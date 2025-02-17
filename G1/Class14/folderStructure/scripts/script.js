import CodeStudent from "../modules/models/codeStudent.js";
import Student from "../modules/models/student.js";
import { printStudents, checkIfStudentIsOnCodeAcademy } from "../modules/services/studentService.js";


let student = new Student(1, 'Trajan');
let codeStudent = new CodeStudent(2, 'Filip');


printStudents([student, codeStudent]);
checkIfStudentIsOnCodeAcademy(codeStudent);
checkIfStudentIsOnCodeAcademy(student);