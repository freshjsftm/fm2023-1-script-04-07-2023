// Conditional (ternary) operator
// (condition)?true:false;

const logParity = function (number) {
  return number % 2 === 0 ? 'even' : 'odd';
};

const isEven = function (number) {
  return number % 2 === 0;
};

const isAdult = function (age, AGE_ADULT = 18) {
  return age >= AGE_ADULT;
};

//перепишіть функцію isAdult за допомогою тернарного оператора так, щоб вона повертала слово 'adult'/'not adult'
const logAdult = function (age, AGE_ADULT = 18) {
  return age < AGE_ADULT ? 'not adult' : 'adult';
};

const result = '' ?? 78;

const promoCode = 'qwerty';
const sale = promoCode ? 10 : 0;

/*
написати функцію, використовуючи тернарний оператор, яка запитує користувача за допомогою propmpt ввод данних, і якщо користувач будь що ввів повертає 'thank you', інакше - повертає 'error'
- назву
- аргументи
- запит даних
- перевірку
бажано в один рядочок!
*/

const logSignNumber = function (number=0) {
  return number > 0 ? '+' : number < 0 ? '-' : '0';
};
// debugger
console.log(logSignNumber(12));