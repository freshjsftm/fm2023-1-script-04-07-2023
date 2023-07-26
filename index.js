const str = '  tO    be OR noT To   BE';
const EMPTY_STR = '';

//написати функцію, яка буде приводити рядок до Jaden Case 'To Be Or Not To Be'

// //розділяти на слова - отримали масив  split
// const words = str.split(' ');
// console.log(words);
// //для кодного слова створюємо нове слово, в якому  map
// const formatWords = words.map((word) => {
//   //зробити першу літеру великою  toUpperCase
//   const firstLetter = word[0].toUpperCase();
//   //зробити усі інші літери маленьки slice substring toLowerCase
//   let lastLetters = word.substring(1);
//   lastLetters = lastLetters.toLowerCase();
//   return firstLetter + lastLetters;
// });
// console.log(formatWords);
// //об'єднати масив правильних слів в рядок  join
// const newStr = formatWords.join(' ');

const toJadenCase = (str, separator = ' ') =>
  str
    .split(separator)
    .filter((word) => word !== EMPTY_STR)
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(separator);

console.log(toJadenCase(str));
