//задовільняє

//map

const arr1 = [21, 4, 8, 61];

const getSquare = function (number) {
  return number * number;
};

const arrNew = arr1.map(getSquare);

const arrNew2 = arr1.map(function (elem) {
  return { prop: elem };
});

// console.log(arr1);
// //console.log(arrNew);
// console.log(arrNew2);

const users = [
  { name: 'Bob', age: 45 },
  { name: 'Tom', isMale: true },
  { name: 'Rob' },
];

const usersWithSubscribe = users.map(function (user) {
  const newUser = {};
  for (const key in user) {
    newUser[key] = user[key];
  }
  newUser.isSubscribe = false;
  return newUser;
});

console.log(users);
console.log(usersWithSubscribe);
console.log(users[0] === usersWithSubscribe[0]);
