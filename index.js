//задовільняє

//filter

const arr1 = [21, 4, 8, 61];

const isEven = function (number) {
  return number % 2 === 0;
};

const arrEven = arr1.filter(isEven);

console.log(arr1);
console.log(arrEven);
