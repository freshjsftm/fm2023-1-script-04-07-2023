const PASSWORD = '123';
const MAX_TRY = 3;

// let count = 0;
// while (true) {
//   const userInputPassword = prompt('Enter password');
//   count++;
//   if(count >= MAX_TRY) {
//     alert('try empty');
//     break;
//   }
//   if (PASSWORD === userInputPassword) {
//     alert('welcome');
//     break;
//   }
// }

for (let i = 0; i < MAX_TRY; i++) {
  alert('try number ' + (i + 1));
  const userInputPassword = prompt('Enter password');
  if (PASSWORD === userInputPassword) {
    alert('welcome');
    break;
  }
  if (i + 1 === MAX_TRY) {
    alert('try empty');
    break;
  }
}

// for(;;){
//   console.log(1)
// }

// while(true){
//   console.log(1)
// }





// let userInputPassword = prompt('Enter password');
// while (PASSWORD !== userInputPassword) {
//   userInputPassword = prompt('Enter password');//123
// }
// alert('welcome');
