// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// 1. First way
function divisibleByThree() {
  let arr = [];
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

divisibleByThree();

// 1. Second way
function divisibleByThreeSecond() {
  let element = 3;
  let arr = [];
  while (element <= 1000) {
    arr.push(element);
    element += 3;
  }
  console.log(arr);
  return arr;
}

divisibleByThreeSecond();
