'use strict';

class UserClass {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   */
  constructor(firstName, lastName, age) {
    if (typeof firstName !== 'string') {
      throw new TypeError('firstName must be string');
    }
    if (typeof lastName !== 'string') {
      throw new TypeError('lastName must be string');
    }
    if (firstName === '') {
      throw new RangeError('firstName not empty');
    }
    if (lastName === '') {
      throw new RangeError('lastName not empty');
    }
    // if (typeof age !== 'number') {
    //   throw new TypeError('age must be number');
    // }
    // if (age < 0 || age > 150) {
    //   throw new RangeError('age must be 0...150');
    // }
    // this._age = age;
    this.setAge(age);
    this._firstName = firstName;
    this._lastName = lastName;
    
    UserClass.amount++;
  }
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }
  getAge() {
    return this._age;
  }
  setAge(age) {
    if (typeof age !== 'number') {
      throw new TypeError('age must be number');
    }
    if (age < 0 || age > 150) {
      throw new RangeError('age must be 0...150');
    }
    this._age = age;
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
  console.log(user2.getFullName());
  console.log(user2.getAge());
  user2.setAge(60);
  console.log(user2);
  console.log(user2.getAge());
} catch (error) {
  console.log(error.message);
}
