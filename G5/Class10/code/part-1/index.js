const person = {
    familyName: 'Bobski',
    dateOfBirth: '01.01.1990',
    gender: "male",

    printFamilyName: function(){
        console.log(`Family name is: ${this.familyName}`)
    }
}

console.log(person);

console.log('--- Person Bob ---')
const personBob = Object.create(person);
personBob.name = "Bob";
personBob.dateOfBirth = "02.10.1985"


console.log(personBob);
console.log(personBob.name);
console.log(personBob.familyName);
console.log(personBob.dateOfBirth);
console.log(personBob.gender);


console.log('--- Person Ann ---')
const personAnn = Object.create(person);
personAnn.name = "Ann";
personAnn.gender = "female";

console.log(personAnn.name);
console.log(personAnn.familyName);
console.log(personAnn.gender);


console.log('--- Person little Marry ---');

const personMarry = Object.create(personAnn);
personMarry.name = 'Marry';
personMarry.dateOfBirth = '03.05.2024';
personMarry.goesInDayCare = true;

console.log(personMarry);
console.log(personMarry.familyName) // Direct access of a property that was inhertied 2 steps back from person

personMarry.printFamilyName();