console.log("*** SIMPLE EXAMPLE ***");

function stepOne(callback){
    console.log("Step 1");
    callback();
};

function stepTwo(callback){
    console.log("Step 2");
    callback();
};

function stepThree(callback){
    console.log("Step 3");
    callback()
};

stepOne(function(){
    stepTwo(function(){
        stepThree(() => console.log('finnaly in step 3.5'))
    });
});

console.log("*** COMPLEX ***");
/**
 * callbacks are good in the part where we can have
 * controlled structure of execution of our code
 * 
 * 
 * the is a catch:
 * if we chain a lot of callback functions we can get into callback hell
 * (Pyramid of doom/Haduken code)
 */

const stepOneComplex = (callback) => {
    console.log('Step 1 complex')
    callback()
}

const stepTwoComplex = (callback) => {
    console.log('Step 2 complex')
    callback()
};

const stepThreeComplex = (callback) => {
    console.log('Step 3 complex')
    callback()
};

const stepFourComplex = (callback) => {
    console.log('Step 4 complex')
    callback()
};

const stepFixComplex = (callback) => {
    console.log('Step 5 complex')
    callback()
};

const stepSixComplex = (callback) => {
    console.log('Finally the 6 step complex!!!')
    callback()
};

stepOneComplex(() => {
    stepTwoComplex(() => {
        stepThreeComplex(() => {
            stepFourComplex(() => {
                stepFixComplex(() => {
                    stepSixComplex(() => {
                        console.log('Thanks I made pyramid of doom');
                    });
                });
            });
        });
    });
});
