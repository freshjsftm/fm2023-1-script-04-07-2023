// console.log(10 > 2 || 'a' === 'b'); //true

const value = 1;
console.log(2 < value && value < 7);
console.log(2 < value || value < 7);


const condition = 0 || 'qwe';
console.log(condition);

// Nullish coalescing operator (??)
let avatar;
const condition2 = avatar ?? 'anon.png';
console.log(condition2);