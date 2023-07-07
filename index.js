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

function getSumTwoNums() {
  const userInput1 = prompt('Enter number', 5);
  const userInput2 = prompt('Enter number', 5);

  const isUserInputsNotNumber =
    userInput1 === '' ||
    userInput1 === null ||
    Number.isNaN(Number(userInput1)) ||
    userInput2 === '' ||
    userInput2 === null ||
    Number.isNaN(Number(userInput2));

  if (isUserInputsNotNumber) {
    console.log('error');
  } else {
    const summa = Number(userInput1) + Number(userInput2);
    console.log(userInput1, '+', userInput2, '=', summa);
  }
}

getSumTwoNums();
