function sum(num1, num2){
    return num1 + num2;
}

//sum(sum(sum(sum(1,2),3),4),5);

function sumTo(num){
    console.log("Input is: " + num);
    //in recursion functions we need to have an ending condition
    if(num == 0){
        console.log("Input is 0");
        return 0;
    }
    console.log(`return ${num} + sumTo(${num-1})`);
    return num + sumTo(num-1);
}

let result = sumTo(5);
console.log(result);
//sumTo(5)
//5 + sumTo(4)
//4 + sumTo(3)
//3+ sumTo(2)
//2 + sumTo(1)
//1 + sumTo(0)
//going back
//2+1
//3+3
//4+6
//5+10 => 15