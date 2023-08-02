'use strict';

// O(1)   O(1) + O(1) + O(1)  = O(3) = O(1)
const arr = [10, 3, 7, 40, 12, 22, 3, 4];
//console.log(arr[0]);

// O(n)    O(n) + O(n) = O(2*n) = O(n)
const linearSearch = (array, key) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
  for (let index = 0; index < array.length; index++) {
    if (array[index] === key) {
      return index;
    }
  }
  return -1;
};
//console.log(linearSearch(arr, 13))

// O(n^2)     O(n)*O(n) = O(n^2)
const createMultTable = (limit = 10) => {
  const table = {};
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      table[`${i} * ${j}`] = i * j;
    }
  }
  return table;
};
// const tableMult = createMultTable(5);
// console.log(tableMult);

const sortArr = arr.sort((a, b) => a - b);
console.log(sortArr);

// O(log(n))
const binarySearch = (array, key) => {
  let start = 0;
  let end = array.length - 1;
  let middle;
  while (start<=end) {
    middle = Math.round((start + end) / 2);
    if (array[middle] === key) {
      return middle;
    }
    if (array[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

//console.log(binarySearch(sortArr, 3))