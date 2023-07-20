const arr1 = new Array(7, 4, 5);

function f(num1) {
  console.log('num1 = ', num1);
  console.log(arguments);
  console.log(arguments[arguments.length-1]);
}
//f(100,5,6);