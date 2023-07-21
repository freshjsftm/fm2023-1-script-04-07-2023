const arr1 = [1, 2, 3, 4, 5];

function getSquare(value) {
  console.log(value * value);
  return value * value;
}

arr1.forEach(getSquare);

// function getSum(value) {
//   console.log(value + value);
//   return value + value;
// }

// // for (let index = 0; index < arr1.length; index++) {
// //   getSquare(arr1[index]);
// // }

// arr1.forEach(function(currentElement){
//   console.log(currentElement)
// });

// arr1.forEach(getSum)

// const myArr1 = new MyArray(4, 8, 6);
// myArr1.forEach(getSquare);
// // debugger
// myArr1.forEach(function(currentElement){
//   console.log(currentElement)
// });

const users = [{ name: 'Tom' }, { name: 'Brad' }, { name: 'Rob' }];
users.forEach(function (user) {
  user.isSubscribe = true;
});
