let fName = "Kate";

function getFullName(firstName, lastName){
    console.log(firstName);
    let number = 10;
    if(firstName.length > 5){
        //block scope
        let blockResult = `${firstName} ${lastName}`;

        if(3>2){
            console.log(blockResult);
        }
        console.log(blockResult);
        console.log(number);
    }
    //console.log(blockResult); => error, block scope, blockResult exists only in the if statemnt 
     console.log(fName); //global scope, we can access the fName 

     console.log(number);
}

getFullName("Tijana", "Stojanovska");
console.log(fName); //global scope, we can access the fName 

//console.log(number); //function scope, the number cannot be accessed outside of the function where it was declared