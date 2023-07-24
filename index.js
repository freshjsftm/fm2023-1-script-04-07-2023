'use strict';

console.log(this);

//declaration
function test1() {
  console.log(this);
}

//expression
const test2 = function () {
  console.log(this);
};

//arrow
const test3 = () => {
  console.log(this);
};

test1();
test2();

test3();
