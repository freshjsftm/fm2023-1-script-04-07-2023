// Logical AND (&&) множення
// console.log(true && true);   //true
// console.log(true && false);  //false
// console.log(false && true);  //false
// console.log(false && false); //false

//AND повертає або останню правду або першу неправду
const condition1 = 10 && null && 'qwe'; //null
console.log(condition1);

// Logical OR (||) додавання
// console.log(true || true);   //true
// console.log(true || false);  //true
// console.log(false || true);  //true
// console.log(false || false); //false

//OR повертає або першу правду або  останню неправду
const condition2 = 0 || null || '' || 5; 
console.log(condition2);


