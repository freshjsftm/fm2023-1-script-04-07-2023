const animal = {
  eat: function () {
    return this.firstName + ' are eating';
  },
  toString: function(){
    return 'info';
  }
};

const man = {
  fullName: function () {
    return this.firstName;
  },
  speak: function (word) {
    return 'man speak: ' + word;
  },
};

man.__proto__ = animal;

const user1 = {
  firstName: 'Brad',
  
};

user1.__proto__ = man;

console.log(user1);
console.log(user1.fullName());
console.log(user1.speak('hi'));
