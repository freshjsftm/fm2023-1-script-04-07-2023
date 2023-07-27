'use strict';

class UserClass {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   */
  constructor(firstName, lastName, age) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    UserClass.amount++;
  }
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== 'number') {
      throw new TypeError('age must be number');
    }
    if (age < 0 || age > 150) {
      throw new RangeError('age must be 0...150');
    }
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName !== 'string') {
      throw new TypeError('firstName must be string');
    }
    if (firstName === '') {
      throw new RangeError('firstName not empty');
    }
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName !== 'string') {
      throw new TypeError('lastName must be string');
    }
    if (lastName === '') {
      throw new RangeError('lastName not empty');
    }
    this._lastName = lastName;
  }

  static amount = 0;
  static createUserTest() {
    return new UserClass('noname', 'noname', 18);
  }
}

try {
  const user2 = new UserClass('Brad', 'Pitt', 70);
  user2.owner = 'qwe';
  console.log(user2);
  // console.log(user2.getFullName());
  console.log(user2.age);
  user2.age = 60;
  // console.log(user2);
  console.log(user2.age);
} catch (error) {
  console.log(error.message);
}
