console.log("======================= Solving problems with callback functions =======================");

// Example: Execute the functions with async tasks in particular order

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 3000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 2000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

// step1(() => {
//     step2(() => {
//         step3();
//     });
// });

// Now.. let's add more steps to the whole process...

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 2000);
}

function step5(callback) {
    setTimeout(() => {
        console.log("Step 5 completed");
        callback();
    }, 500);
}

function step6(callback) {
    setTimeout(() => {
        console.log("Step 6 completed");
        callback();
    }, 1000);
}

function step7(callback) {
    setTimeout(() => {
        console.log("Step 7 completed");
        callback();
    }, 0);
}


step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5(() => {
                    step6(() => {
                        step7(() => {
                            console.log("Pyramid of doom completed!");
                        })
                    })
                })
            })
        });
    });
});

// NOTE:
// Using callbacks is a common way to handle asynchronous tasks in JavaScript
// HOWEVER, use them with caution to avoid writing code that is difficult to manage. Instead, consider using Promises or Async/Await for a more elegant solution !