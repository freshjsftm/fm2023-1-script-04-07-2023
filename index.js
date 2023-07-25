'use strict';

const sum = (...args) => {
  let summa = 0;
  // for (let index = 0; index < args.length; index++) {
  //   summa += args[index];
  // }
  args.forEach((arg) => {
    summa = summa + arg;
  });
  return summa;
};

const sumWithReduce = (...args) => args.reduce((summa, arg) => summa + arg, 0);

const arr = [1, 2, 3, 4, 5];
const arrNew = [...arr, 2, ...arr];

const result = sum(...arr); //sum(1, 2, 3, 4, 5)
console.log(result);

const result2 = sumWithReduce(...arr); 
console.log(result2);
