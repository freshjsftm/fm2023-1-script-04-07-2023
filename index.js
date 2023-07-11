//const userInputLang = prompt('Choose lang:\n1-uk\n2-en\n3-it\n4-de');
//debugger;
// if (
//   userInputLang === '1' ||
//   userInputLang === 'uk' ||
//   userInputLang === 'ukraine'
// ) {
//   console.log('привіт');
// } else if (userInputLang === '2' || userInputLang === 'en') {
//   console.log('hi');
// } else if (userInputLang === '3' || userInputLang === 'it') {
//   console.log('ciao');
// } else if (userInputLang === '4' || userInputLang === 'de') {
//   console.log('hallo');
// } else {
//   console.log('try again');
// }

/*
юзер вводить номер дня тижня - ви виводите workday || weekend
-----
юзер вводить номер місяця - ви вивoдите пору року
1,2,12 - winter   3,4,5 - spring    6,7,8 - summer     9,10,11 - fall
*/

const userInputDayWeek = prompt('enter number day of week');
const userInputToNumber = Number(userInputDayWeek);
if (
  userInputDayWeek === '' ||
  userInputDayWeek === null ||
  Number.isNaN(userInputToNumber) ||
  Number.isInteger(userInputToNumber) === false ||
  userInputToNumber < 1 ||
  userInputToNumber > 7
) {
  console.log('error');
} else if (userInputToNumber >= 1 && userInputToNumber <= 5) {
  console.log('workday');
} else {
  console.log('weekend');
}

const userInputLang = prompt('Choose lang:\n1-uk\n2-en\n3-it\n4-de');
switch (userInputLang) {
  case '2':
  case 'en':
    console.log('hi');
    break;
  case '3':
  case 'it':
    console.log('ciao');
    break;
  case '4':
  case 'de':
    console.log('hallo');
    break;
  case '1':
  case 'uk':
  case 'UK':
  case 'ukraine':
    console.log('привіт');
    break;
  default:
    console.log('try again'); //error
    break;
}

switch (10 > 5) {
  case true:
    console.log('ok');
    break;
  case false:
    console.log('wrong');
    break;
  default:
    break;
}

// ТАК РОБИТИ НЕДОЦІЛЬНО І НЕПРАВИЛЬНО
// const key = 50;
// switch (key) { // key === valueCase
//   case key>0 && key<10:
//     console.log('ok');
//     break;
//   case key>10:
//     console.log('wrong');
//     break;
//   default:
//     console.log('error');
//     break;
// }
