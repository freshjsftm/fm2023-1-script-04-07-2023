const user1 = {
  firstName: 'Brad',
  lastName: 'Pitt',
  age: 63,
  'is male': true,
  123: 456,
  0: 'zero',
};

const nameUserProp = prompt('enter name');
user1.prop1 = 45;
user1[nameUserProp] = 'one two';
user1[48] = null;
console.log(user1);

// const ageUser = 'age';

// console.log(user1[0]);

// console.log(user1['firstName']);
// console.log(user1['lastName']);
// console.log(user1[ageUser]); //63  ageUser = 'age'

// const nameProp = 'is male';
// console.log(user1[nameProp]);  //true
// console.log(user1['is male']); //true

// const number = 123;
// console.log(user1[number]);
// console.log(user1[123]);

// console.log(user1.firstName);
// console.log(user1['firstName']);
// console.log(user1[0]);
// console.log(user1['0']);
// console.log(user1[123]);
// console.log(user1['is male']);
