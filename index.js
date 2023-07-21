//sort

// function compareNumbers(a, b) {
//   return a - b;
// }

function compareNumbers(a, b) {
  if (a > b) {
    return 1; //first b then a
  }
  if (b > a) {
    return -1; //first a then b
  }
  if (b === a) {
    return 0; //залишаються на місцях
  }
}

const arr1 = [21, 400, 8, 61];
//console.log(arr1);
const arr2 = arr1.sort(compareNumbers);
// console.log(arr1);
// console.log(arr1 === arr2);

const users = [
  { name: 'Tom', age: 35 },
  { name: 'Rob', age: 55 },
  { name: 'Bob', age: 45 },
  { name: 'Fred', age: 15 },
];

const newUsersSortByName = users.sort(function (user1, user2) {
  if (user1.name > user2.name) {
    return 1;
  }
  if (user2.name > user1.name) {
    return -1;
  }
  return 0;
});
// const newUsersSortByAge = users.sort(function(user1,user2){
//   return user1.age - user2.age;
// });

//відсортувати юзерів
// - за іменем
// - за віком
