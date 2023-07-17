function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MIN = 1;
const MAX = 10;

const checkMultTask = function () {
  const number1 = getRandomInt(MIN, MAX);
  const number2 = getRandomInt(MIN, MAX);
  const result = number1 * number2;
  while (true) {
    //const inputUser = prompt('Enter answer:\n'+number1+' * '+number2+' = ');
    const inputUser = prompt(`
Enter answer:
${number1} * ${number2} = 
    `);
    //check '' null  continue
    const numberUserInput = Number(inputUser);
    if (result === numberUserInput) {
      //break;
      return 'ok';
    }
  }
};
//console.log(checkMultTask());

// console.log(`checkMultTask: ${checkMultTask()}`);

console.log(`ternary: ${Math.random() > 0.5 ? 'good' : 'bad'}`);
