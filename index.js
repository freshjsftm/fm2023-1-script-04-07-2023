
/*
  false
  null
  undefined
  NaN
  0 -0
  '' "" ``
*/

console.log(!5); //false
console.log(!''); //true
console.log(!(5-5)); //true
console.log(!' '); //false

console.log(!!5); //true
console.log(!!''); //false
console.log(!!(5-5)); //false
console.log(!!' '); //true

console.log(Boolean(5)); //true
console.log(Boolean('')); //false
console.log(Boolean((5-5))); //false
console.log(Boolean(' ')); //true

