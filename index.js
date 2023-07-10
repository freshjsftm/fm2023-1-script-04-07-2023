const sideSquare = 3;

//периметр квадрата
/**
 *
 * @param {number} side
 * @returns {number | NaN}
 */
const getPerimetrSquare = function (side = 1) {
  //let side=1;
  if (side <= 0) {
    return NaN; //null
  }
  return 4 * side;
};

const value = -3;
const result = getPerimetrSquare(value); //NaN

if (Number.isNaN(result)) {
  console.log('wrong argument');
}else{
  console.log('result = ',result);
}
