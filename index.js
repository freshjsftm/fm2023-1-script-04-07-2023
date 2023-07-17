const user1 = {
  firstName: 'Brad',
  lastName: 'Pitt',
  age: 63,
  isMale: true,
};
const user2 = {
  firstName: 'Tom',
  lastName: 'Rot',
  age: 63,
  isMale: true,
};

function hiUser(objUser){  // objUser = user1
  objUser.age = 10;
  return `Hi, ${objUser.firstName} ${objUser.lastName}!`;
}

console.log(hiUser(user1))
//console.log(hiUser(user2))



const pr1 = 3;
const pr2 = 3;

console.log(pr1 === pr2);


const obj1 = {
  prop:1
}

const copyObj = obj1; //копію адреси об'єкта, ярлик, alias
copyObj.test = 'qwerty';

const obj2 = {
  prop:1
}

console.log(obj1 === obj2); //false 

console.log(obj1.prop1 === obj2.prop1);

console.log(obj1 === copyObj); //true 