//Clear a given array from falsy values

let mixedArray = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

let cleanArray = [];
let falsyArray=[];

function cleanFromFalsy(array){
    for(let item of array){
        if(item){
            cleanArray.push(item)
        }

        // let condition = !item;  ex. let condition = !undefined -> condition = true; let condition = !true -> condition = false
        // if(condition){

        // }

        if(!item){
            falsyArray.push(item);
        } //you can handle this with else
    }
    console.log(cleanArray);
    console.log(falsyArray);
}

cleanFromFalsy(mixedArray);

