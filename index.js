const number1Obj = new Number(10.1321546);
console.log(Number(number1Obj.toFixed(2)));
console.log(typeof number1Obj, number1Obj);


console.log(Number.MIN_VALUE);

const number2 = 123.1231231;
console.log(number2.toFixed(3));
console.log(number2.toPrecision(4));
console.log(number2.toExponential());
console.log(typeof number2);

console.log((15.9513235).toFixed(3));
console.log((15.9513235).toPrecision(4));
console.log((15123.9513235).toExponential());
