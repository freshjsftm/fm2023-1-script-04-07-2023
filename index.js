const sideSquare = 3;

/**
 * периметр квадрата
 * @param {number} side default=1
 * @returns {number | NaN}
 */
const getPerimetrSquare = function (side = 1) {
  if (side <= 0) {
    return NaN;
  }
  return 4 * side;
};

const value = -3;
const result = getPerimetrSquare(value); //NaN

if (Number.isNaN(result)) {
  console.log('wrong argument');
} else {
  console.log('result = ', result);
}
