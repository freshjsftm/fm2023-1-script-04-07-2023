'use strict';

class UserClass {
  #gender;
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   */
  constructor(firstName, lastName, age, gender = 'male') {
    this.gender = gender;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isBanned = false;
    UserClass.amount++;
  }
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }
  get gender() {
    return this.#gender;
  }
  set gender(gender) {
    if (typeof gender !== 'string') {
      throw new TypeError('gender must be string');
    }
    if (gender !== 'male' && gender !== 'female') {
      throw new RangeError('gender must be male or female');
    }
    this.#gender = gender;
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
  static isUser(obj) {
    return obj instanceof UserClass;
  }
}

class Moderator extends UserClass {
  constructor(firstName, lastName, age = 18, gender = 'female', rate = 1) {
    super(firstName, lastName, age, gender);
    this.rate = rate;
  }
  accessMessage() {
    return 'access';
  }
  deleteMessage() {
    return 'delete';
  }
  getFullName(word = 'moderator: ') {
    return word + super.getFullName() + ', ' + super.gender;
  }
}

class Admin extends Moderator {
  constructor(
    firstName,
    lastName,
    age = 18,
    gender = 'female',
    rate = 1,
    superProp = '!!!'
  ) {
    super(firstName, lastName, age, gender, rate);
    this.superProp = superProp;
  }
  getFullName() {
    return super.getFullName('admin: ');
  }
  ban(user) {
    if (UserClass.isUser(user)) {
      user.isBanned = true;
      return;
    }
    throw new TypeError('object must be user');
  }
  unban(user) {
    if (UserClass.isUser(user)) {
      user.isBanned = false;
      return;
    }
    throw new TypeError('object must be user');
  }
}

try {
  const admin = new Admin('Tom', 'Pitt');
  console.log(admin);
  console.log(admin.accessMessage());
  console.log(admin.getFullName());

  const moderator = new Moderator('Brad', 'Pitt');
  console.log(moderator.getFullName());
  const user2 = new UserClass('Brad', 'Pitt', 70, 'male');
  console.log(user2.getFullName());
  admin.ban(moderator);
  console.log(user2.isBanned);
} catch (error) {
  console.log(error.message);
}

// try {
//   const moderator = new Moderator('Brad', 'Pitt');
//   console.log(moderator);
//   console.log(moderator.accessMessage());
//   console.log(moderator.getFullName());

//   const user2 = new UserClass('Brad', 'Pitt', 70, 'male');
//   console.log(user2.getFullName());
//   // console.log(user2.accessMessage());
// } catch (error) {
//   console.log(error.message);
// }

// try {
//   const user2 = new UserClass('Brad', 'Pitt', 70, 'male');
//   user2.owner = 'qwe';
//   console.log(user2);
//   // console.log(user2.getFullName());
//   console.log(user2.age);
//   user2.age = 60;
//   // console.log(user2);
//   console.log(user2.age);
// } catch (error) {
//   console.log(error.message);
// }
