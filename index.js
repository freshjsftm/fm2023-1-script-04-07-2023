'use strict';

const arr1 = [1, 5, 6, 8, 5, 5, 5];
const set1 = new Set();
set1.add(1).add(arr1).add(arr1).add('1');
set1.add([1]); //new address
set1.add([1]); //new address
console.log(set1);

const set2 = new Set(arr1);
console.log(set2);

const set3 = new Set('qwsfhyufertqqqqqyqwe');
const uniqLetter = [...set3].join('')
console.log(set3);

const arr1Unique = [...new Set(arr1)];
console.log(arr1Unique);
