'use strict';

class UserClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    UserClass.amount++;
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
  static amount = 0;
  static createUserTest() {
    return new UserClass('noname', 'noname', 18);
  }
}

const user2 = new UserClass('Tom', 'Rot', 60);
console.log(user2.getFullName());

const user3 = new UserClass('Bom', 'Bim', 40);
console.log(user3.getFullName());

console.log(user2.getFullName === user3.getFullName);

console.log(UserClass.amount);
