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
 * @param {number | bigint} number1
 * @param {number | bigint} number2
 * @returns {number | bigint | boolean} 
 */
function getSumTwoNums(number1, number2) {
  if (
    (typeof number1 === 'number' && typeof number2 === 'number') ||
    (typeof number1 === 'bigint' && typeof number2 === 'bigint')
  ) {
    return number1 + number2;
  }
  return false;
}

if (isUserInputsNotNumber) {
  console.log('error');
} else if (
  Number(userInput1) > Number.MAX_SAFE_INTEGER ||
  Number(userInput2) > Number.MAX_SAFE_INTEGER
) {
  const summa = getSumTwoNums(BigInt(userInput1), BigInt(userInput2));
  console.log(userInput1, '+', userInput2, '=', summa);
} else {
  const summa = getSumTwoNums(Number(userInput1), Number(userInput2));
  console.log(userInput1, '+', userInput2, '=', summa);
}

console.log(3, '+', 8, '=', getSumTwoNums(3n, 8n));
console.log(3n, '+', 8, '=', getSumTwoNums(3n, 8));
