'use strict';

function recursion(number) {
  if (number === 0) {
    return;
  }
  console.log(number);
  recursion(number - 1);
}
// debugger
//recursion(12000);

function getPowerNumberLoop(number, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= number;
  }
  return result;
}

getPowerNumberLoop(2, 3); //8

// function getPowerNumberRecursion(number, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   if (exp === 1) {
//     return number;
//   }
//   return number * getPowerNumberRecursion(number, exp - 1);
// }

const getPowerNumberRecursion = (number, exp) =>
  exp === 0 ? 1 : number * getPowerNumberRecursion(number, exp - 1);

// debugger
console.log(getPowerNumberRecursion(2, 3));

/*
2**4 *1 = 2*2*2*2 *1  = 2* 2**3 *1
2**3 = 2*2*2 = 2* 2**2
2**2 = 2*2 = 2* 2**1
*/
