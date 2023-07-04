/*
починається з літери або _ або $
можна використовувати літери, цифри, _ $
не містить пробілів
регистрозалежне

відповиє на питання що в ній
*/

//console.log(userName); //error!!!
{
  let userName = 'Olena';
  console.log('in block - ', userName);
}

let userName; //оголошення змінної
console.log(userName); //undefined

userName = 'Brad'; //ініціалізація змінної
console.log(userName);

const userSname = 'Pitt';

console.log(userName, userSname);


const userGender = 'male';
//userGender = 'female';

console.log(userName, userSname, userGender);