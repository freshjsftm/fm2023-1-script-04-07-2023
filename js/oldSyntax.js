'use strict';
//data
function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  User.amount++;
}
//static
User.amount = 0;
User.createUserTest = function(){
  return new User('noname', 'noname', 18);
}
//logica
function UserPrototype() {
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}
//union
User.prototype = new UserPrototype();

const user1 = new User('Brad', 'Pitt', 60);
// console.log(user1.getFullName());


