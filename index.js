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

const isUserInputsNotNumber =
  userInput1 === '' ||
  userInput1 === null ||
  Number.isNaN(Number(userInput1)) ||
  userInput2 === '' ||
  userInput2 === null ||
  Number.isNaN(Number(userInput2));
  
// let summa;  
function getSumTwoNums(number1, number2) {
  // const summa = Number(number1) + Number(number2);
  // return summa;
  return Number(number1) + Number(number2);
}
// summa = 100;

if (isUserInputsNotNumber) {
  console.log('error');
} else {
  const summa = getSumTwoNums(userInput1, userInput2);
  console.log(userInput1, '+', userInput2, '=', summa);
  console.log(3, '+', 8, '=', getSumTwoNums(3, 8));
}


