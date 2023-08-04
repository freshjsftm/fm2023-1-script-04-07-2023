'use strict';

const obj1 = {
  prop: 12,
  23: 'qwerty',
  length: 0,
};
const arr1 = [2, 5, 6];

const map1 = new Map([
  [1, 'one'],
  [2, 'two'],
]);

const sum = (a, b) => a + b;

const map2 = new Map(Object.entries(obj1));
map2.set(1, 1);
map2.set(1, 1000);
map2.set('1', 1);
map2.set(['1'], [1, 2]); //видалення неможливе
map2.set(['1'], [4, 2]); //видалення неможливе
// map2.set(map1, [41, 2]);
// map2.set(arr1, 'arr1');
// map2.set(undefined, undefined);
// map2.set(obj1, 'sss');
// map2.set(sum, sum(1,2));
// map2.set({ obj1: 456 }, '444'); //видалення неможливе
//console.log(map2.delete(undefined));
// console.log(map2.delete(['1']));
// console.log(map2.delete(arr1));

//console.log(map2.has(undefined));
//console.log(map2.get(undefined));

// console.log(map2.has(['1'])); //неможливе
// console.log(map2.get(['1'])); //неможливе

// console.log(map2.has(arr1));
// console.log(map2.get(arr1));

console.log(map2);

// const iteratorMap2 = map2.keys()
//console.log(...iteratorMap2)
// for (const key of map2.keys()) {
//   console.log(key)
// }
// for (const value of map2.values()) {
//   console.log(value)
// }
// for (const para of map2.entries()) {
//   console.log(para)
// }
for (const [key, value] of map2.entries()) {
  console.log(key, value)
}

