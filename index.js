'use strict';

function test1 (number, ...rest) {
  console.log(number);
  console.log(arguments);
  console.log(rest);
};

//expression
const test2 = function (number) {
  console.log(number);
  console.log(arguments);
};

const test22 = function (number, ...rest) {
  console.log(number);
  console.log(arguments);
  console.log(rest);
};

//arrow
const test3 = (number1, number2, ...args) => {
  console.log(number1);
  console.log(args);
};

test22(1, 2, 3);
//test3(1, 2, 3, 4, 5, 6, 7);

// console.dir(test2)
// console.dir(test3)

// const getAreaSquare = (number) => {
//   return number * number;
// };

// const getAreaSquare = (number=1) => number * number;

// const logAreaSquare = (number=1) => console.log(number * number);
// // const result = logAreaSquare(5);
// // console.log(result);

// const returnObject = (value) => ({prop: value})
// const result2 = returnObject(5);
// console.log(result2);
