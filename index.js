const arr = new Array(5).fill({ name: 'noname' });
//arr.fill({name:'noname'})
// console.log(arr);

const arr2 = [55555, 2, 5, 6, 7, 88, 10000];
const key = 5;
// const startIndex = 1;
console.log(arr2);
// console.log(arr2.indexOf(key, -3))
// let indexKey = arr2.indexOf(key, startIndex); //2
// console.log(arr2.indexOf(key, indexKey+1)); 
// console.log(arr2.includes(key, startIndex));

const arr3 = arr2.reverse(); //arr3 - copy address

//const arr3 = arr2.concat().reverse();
arr3[0] = 'weqwe';
// arr2.pop(); //10000
// arr2.shift(); //55555
// arr2.unshift(999999);
console.log(arr2);
console.log(arr3);