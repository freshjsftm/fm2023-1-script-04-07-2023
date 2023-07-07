const userInput = prompt('Enter number', 5);

console.log(userInput, typeof userInput);
console.log(Number(userInput));
// ''  null NaN
// напишіть умову, яка обробляє помилку
if (userInput === '' || userInput === null || Number.isNaN(Number(userInput))) {
  console.log('error!');
}else{
  console.log('done!');
}
