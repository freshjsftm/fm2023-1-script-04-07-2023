const array1 = [{prop:12}, {name:'qwe'}, {}];
const array2 = ['d', 'e', 'f'];
const array3 = array2.concat({prop:12}, 789, array2, 'qwerty');
const array4 = array2;

// console.log(array2 === array3); //shelly copy
// console.log(array2 === array4); //copy address
array3[0] = 'w';
array4[0] = 'q';

console.log(array3);
// console.log(array2);


console.log(array1);
const array5 = array1.concat(); //new address [copy address obj]
console.log(array1[1].name);
console.log(array5);
console.log(array1 === array5);
array5[1].name = 'Brad';
console.log(array5[1].name);
console.log(array1[1].name);