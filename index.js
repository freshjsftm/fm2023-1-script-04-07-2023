'use strict';
const options = {
  brackets: {
    '(': ')',
    '[': ']',
    '{': '}',
    '<<': '>>',
  },
};
/**
 *
 * @param {string} str
 * @param {object} options
 * @param {object} options.brackets
 * @returns {boolean}
 */
const checkSequence = (str, options) => {
  const closedBrackets = Object.values(options.brackets);
  const stack = new Stack(str.length);
  for (const symbol of str) {
    if (options.brackets[symbol]) {
      stack.push(symbol);
      continue;
    }
    if (symbol === options.brackets[stack.peek()]) {
      stack.pop();
    } else if (closedBrackets.includes(symbol)) {
      return false;
    }
  }
  return stack.isEmpty;
};

console.log(checkSequence('(2+5/{[a(])-24+(15-3)})', options));
