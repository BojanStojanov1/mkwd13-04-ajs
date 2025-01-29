// console.log("*** SIMPLE EXAMPLE ***");

// function stepOne(callback){
//     console.log("Step 1");
//     callback();
// };

// function stepTwo(callback){
//     console.log("Step 2");
//     callback();
// };

// function stepThree(callback){
//     console.log("Step 3");
//     callback()
// };

// stepOne(function(){
//     stepTwo(function(){
//         stepThree(() => console.log('finnaly in step 3.5'))
//     });
// });

// console.log("*** COMPLEX ***");
// /**
//  * callbacks are good in the part where we can have
//  * controlled structure of execution of our code
//  * 
//  * 
//  * the is a catch:
//  * if we chain a lot of callback functions we can get into callback hell
//  * (Pyramid of doom/Haduken code)
//  */

// const stepOneComplex = (callback) => {
//     console.log('Step 1 complex')
//     callback()
// }

// const stepTwoComplex = (callback) => {
//     console.log('Step 2 complex')
//     callback()
// };

// const stepThreeComplex = (callback) => {
//     console.log('Step 3 complex')
//     callback()
// };

// const stepFourComplex = (callback) => {
//     console.log('Step 4 complex')
//     callback()
// };

// const stepFixComplex = (callback) => {
//     console.log('Step 5 complex')
//     callback()
// };

// const stepSixComplex = (callback) => {
//     console.log('Finally the 6 step complex!!!')
//     callback()
// };

// stepOneComplex(() => {
//     stepTwoComplex(() => {
//         stepThreeComplex(() => {
//             stepFourComplex(() => {
//                 stepFixComplex(() => {
//                     stepSixComplex(() => {
//                         console.log('Thanks I made pyramid of doom');
//                     });
//                 });
//             });
//         });
//     });
// });

// console.log("*** PROMISES ***");

// /**
//  * pending
//  * fullfilled
//  * rejected
//  */

// function getDocument(userRole){
//     const documentInfo = new Promise((resolve, reject) => {
//         if(userRole === "customer"){
//             reject("You don't have persmission.")
//         }
//         else if(userRole === "admin"){
//             resolve("Access granted. Here is the file")
//         }
//     });

//     return documentInfo
// };

// // const resultCustomer = getDocument("customer")
// // .then((result) => {
// //     console.log(result)
// // })
// // .catch((error) => {
// //     console.log(error)
// // });


// // console.log(resultCustomer);


// // getDocument("admin")
// // .then((result) => {
// //     console.log(result)
// // })
// // .catch((error) => {
// //     console.log(error)
// // });

// console.log('*** CHAINING THEN IN PROMISE ***')
// function step1Promise(){
//     return new Promise(function(resolve, reject){
//         console.log("Step 1 promise");
//         resolve([1, 2, 3, 4])
//         // resolve([1, 3]) // uncomment to see error
//     })
// };

// function step2Promise(numbers){
//     console.log("The numbers:", numbers)
//     console.log('Step 2 promise')

//     const evenNumbers = numbers.filter((number) => number % 2 === 0);
//     return evenNumbers
// }

// function step3Promise(){
//     console.log('Step 3 promise')
// }

// function step4Promise(){
//     console.log('Step 4 promise')
// };


// step1Promise()
// .then((result) => {
//     console.log(result)
//     const evenNumbers = step2Promise(result);
//     console.log(evenNumbers)
//     return evenNumbers
// })
// .then((result) => {
//     console.log('Result in third then', result)
//     if(result.length === 0){
//         const error = {
//             message: "The array is empty",
//             strackTrace: "line 158, second then"
//         };

//         throw new Error(JSON.stringify(error)) // in js to throw new Error
//     }
//     step3Promise()
// })
// .then(step4Promise)
// .catch((error) =>{
//     console.log(error) // will consume the message from new Error()
//     const parsedError = JSON.parse(error.message);
//     console.log(parsedError)
// });



// // Promises in fetch
// console.log("*** PROMISES IN FETCH ***");

const swapiUrl = "https://swapi.dev/api/people";

// const fetchSwapiPeople = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((result)=> {
//             console.log(result)
//             const people = result.results;

//             resolve(people)
//         })
//         .catch((error) => {
//             console.log('Something went wrong', error)
//             console.error(error)
//             reject({message: "Something went wrong", err: error})
//         })
//     })
// };

// fetchSwapiPeople(swapiUrl)
// .then((people) => {
//     console.log(people)
// })
// .catch((error) => {
//     console.log(error)
// })


// // Example 3 Promises

// function getUserData(userID){
//     return new Promise((resolve, reject) => {
//         console.log("Fetching user data...");


//         // Simulate call to the database
//         const fakeDatabase = [
//             {id: 1, name: "John Doe", age: 25},
//             {id: 2, name: 'Bob Bobski', age: 30}
//         ];


//         setTimeout(() => {
//             const userFound = fakeDatabase.find((element) => {
//                 if(element.id === userID){
//                     return element
//                 }
//             });

//             // checks if userFound is falsy; undefined is falsy value
//             // same as userFound === undefined
//             if(!userFound){
//                 reject(new Error("User was not found."))
//             }else {
//                 resolve(userFound) // meaning the resolved result returned from the promise
//             }

//         }, 2000)
//     })
// };

// getUserData(1)
// .then((result) => {
//     console.log(result)
// })



// getUserData(3)
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })


// *** ASYNC/AWAIT ***

const makeApiRequest = async () => {
    try{
        console.log('Fetching...')
        // await says => do not go to next line until I resolve a value
        const response = await fetch(`https://swapi.dev/api/people/1`); // .then(response)
        console.log('1')
        
        const result = await response.json(); // then(response.json)
        console.log('2')
        console.log(result)

        const homeworldUrl = result.homeworld;

        const responseHomeworld = await fetch(homeworldUrl);
        const resultHomeworld = await responseHomeworld.json();

        console.log(resultHomeworld)

        printResult(result.name, resultHomeworld.name)
        
    }
    catch(error){
        console.log('Error happened', error)
    }
  
}

makeApiRequest()

function printResult(personName, homeworldName) {
    let element = document.getElementById('result');

    element.innerHTML = `
        <p>Character name: ${personName}</p>
        <p>Character homeworld: ${homeworldName}</p>
    `

}