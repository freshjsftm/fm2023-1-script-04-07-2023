// let a,b=4,c; bad practic avoid

const condition = true;
// if (condition) {
//   // action, if condition === true
//   console.log('true')
// }

// if (condition === false) {
//   console.log('true')
// } else {
//   console.log('false')
// }

let number = -10;
//якщо значення змінної дорівнює 0, то вивести ok, інакше вивести no

// if (number === 0) {
//   console.log('ok');
// } else {
//   console.log('no');
// }

// //якщо значення змінної не менше 0, то вивести ok, інакше вивести no

// if (number >= 0) {
//   console.log('ok');
// } else {
//   console.log('no');
// }

// //якщо значення змінної парне, то вивести even, інакше вивести odd
// if (number % 2 === 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

// console.log(number % 2);

// if (number % 2) {
//   console.log('odd');
// } else {
//   console.log('even');
// }

// //якщо число додатнє - +
// //якщо від'ємне - -
// //інакше - 0

// if (number > 0) {
//   console.log('+');
// } else if (number < 0) {
//   console.log('-');
// } else {
//   console.log('0');
// }

const number2 = 132;
const minValue = 100;
const maxValue = 200;
//якщо змінна додатня і менше 5, виведіть ok, інакше - no
// 1234
if (number2 > minValue && number2 < maxValue) {
  console.log('ok');
} else {
  console.log('no');
}

//виконайте не використовуючи !
if (number2 <= minValue || number2 >= maxValue) {
  console.log('no');
} else {
  console.log('ok');
}

