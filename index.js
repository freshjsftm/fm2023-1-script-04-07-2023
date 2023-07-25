'use strict';

/**
 *
 * @param {number} number
 * @param {number} exp
 * @returns
 */
function getPowerNumberRecursion(number, exp) {
  ///number1 = 5
  if (typeof number !== 'number' || typeof exp !== 'number') {
    throw new TypeError('type incorrect');
  }
  if (exp < 0 || exp >= 100) {
    throw new RangeError('exp must be positive less 100');
  }
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return number;
  }
  return number * getPowerNumberRecursion(number, exp - 1);
}

// console.log(getPowerNumberRecursion(2, 'three'));
//console.log(getPowerNumberRecursion(2, -3));

try {
  console.log('try1');
  console.log(getPowerNumberRecursion(2, null));
  console.log(getPowerNumberRecursion(2, -3));
  //throw new RangeError();
  console.log('try2');
  console.log(getPowerNumberRecursion(2, 3));
} catch (error) { //object 44FA22
  console.log('catch');
  console.log('error -', error);
  console.dir(error);
  alert(error.message);
  // if(error instanceof RangeError){
  //   alert('check exp!')
  // } else if(error instanceof TypeError){
  //   alert('check type!')
  // }else{
  //   alert('error')
  // }
} //
// finally {
// console.log('finally')
// }

console.log('more code');
