'use strict';

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
const checkSequence = (str) => {
  const stack = new Stack(str.length);
  for (const symbol of str) {
    if (symbol === '(') {
      stack.push(symbol);
      continue;
    }
    if (stack.isEmpty) {
      return false;
    }
    if (symbol === ')' && stack.peek() === '(') {
      stack.pop();
    }
  }
  return stack.isEmpty;
};

console.log(checkSequence('([]])'));
