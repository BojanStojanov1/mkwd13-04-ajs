// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS

function cleanAllButStrings(array){
    let result =[];
    for(let element of array){
        if(typeof(element) == "string"){
            result.push(element); //push all elements that are of type string
        }
    }
    return result; //after the loop ends -> return the result array
}

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

console.log(cleanAllButStrings(test));

function cleanAllButNumbers(array){
    let result =[];
    for(let element of array){
        if(typeof(element) == "number" && !isNaN(element)){
            result.push(element); //push all elements that are of type number
        }
    }
    return result; //after the loop ends -> return the result array
}

console.log(cleanAllButNumbers(test));

