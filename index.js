const sum = function (number1, number2) {
  return number1 + number2;
}
const sub = function (number1, number2) {
  return number1 - number2;
}
const mul = function (number1, number2) {
  return number1 * number2;
}
const dev = function (number1, number2) {
  return number1 / number2;
}
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * @returns {number | NaN}
 */
function calculator(number1, number2, operator) {
  let funcAddress;
  switch (operator) {
    case '+':
      funcAddress = sum; //copy address sum
      break;
    case '-':
      funcAddress = sub;
      break;
    case '*':
      funcAddress = mul;
      break;
    case '/':
      funcAddress = dev;
      break;
    default:
      return NaN;
  }
  return typeof funcAddress === 'function' ? funcAddress(number1, number2):NaN;
}

console.log(calculator(5, 2, '/'));

function hightOrderFunction (number1, number2, funcAddress){
  return typeof funcAddress === 'function' ? funcAddress(number1, number2):NaN;
}
debugger
console.log(hightOrderFunction(5,6,mul));