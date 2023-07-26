const check = false; // primitive

const boolObj = new Boolean(false); //creates Boolean objects  address

console.log(boolObj);
console.log(boolObj.valueOf());

if (check) {
  console.log('check 1');
}

if (boolObj) {
  console.log('check 2');
  console.log(boolObj.valueOf());
}

const number = 12;

if (Boolean(number)) {
  console.log('check 3');
}
