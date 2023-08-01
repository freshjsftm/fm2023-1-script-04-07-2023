'use strict';

const sym1 = Symbol('позначення для розробника');
// console.log(sym1);

// const sym2 = Symbol('позначення для розробника');
// console.log(sym2);
// const sym3 = sym1;
// console.log(sym1 === sym2);
// console.log(sym1 === sym3);

const obj = {
  sym1:12,
  prop:888,
  [sym1]:55,
  [Symbol('key')]:3333
}

// console.log(obj);
// console.log(obj.sym1);
// console.log(obj[sym1]);
// console.log(obj['sym1']);

const arr = [1, 2, 3, 5, 6];
// for (const elem of arr) {
//   console.log(elem);
// }

// for (const letter of 'arz') {
//   console.log(letter);
// }

//Uncaught TypeError: obj is not iterable
// for (const key of obj) {
//   console.log(key);
// }

// console.log(...arr);
// console.log(arr);

