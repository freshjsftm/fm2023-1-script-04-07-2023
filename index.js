// const userInput = prompt('Enter number', 5);

// console.log(userInput, typeof userInput);
// console.log(Number(userInput));
// // ''  null NaN
// // напишіть умову, яка обробляє помилку
// if (userInput === '' || userInput === null || Number.isNaN(Number(userInput))) {
//   console.log('error!');
// }else{
//   console.log('done!');
// }

const userInput1 = prompt('Enter number', 5);
const userInput2 = prompt('Enter number', 5);

const isNotNumber = function (value) {
  return value === '' || value === null || Number.isNaN(Number(value)); //true
};

const isUserInputsNotNumber =
  isNotNumber(userInput1) || isNotNumber(userInput2);

/**
 *
 * @param {*} number1 
 * @param {*} number2
 * @returns {number | bigint | boolean} number | bigint | false
 */
function getSumTwoNums(number1, number2) {
  if (
    Number(number1) + Number(number2) <= Number.MAX_SAFE_INTEGER &&
    (typeof number1 === 'number' || typeof number1 === 'string') &&
    typeof number1 === typeof number2
  ) {
    return Number(number1) + Number(number2);
  }
  if (typeof number1 === 'bigint' && typeof number2 === 'bigint') {
    return BigInt(number1) + BigInt(number2);
  }
  return false;
}

if (isUserInputsNotNumber) {
  console.log('error');
} else {
  const summa = getSumTwoNums(userInput1, userInput2);
  console.log(userInput1, '+', userInput2, '=', summa);
}

console.log(3n, '+', 8n, '=', getSumTwoNums(3n, 8n));
console.log(3n, '+', 8, '=', getSumTwoNums(3n, 8));
console.log('3', '+', '8', '=', getSumTwoNums('3', '8'));
console.log(undefined, '+', '8', '=', getSumTwoNums(undefined, '8'));
