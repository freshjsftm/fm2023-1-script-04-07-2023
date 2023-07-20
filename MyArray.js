//logic functionality
function ProptotypeMyArray() {
  this.push = function () {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length] = arguments[index];
      this.length++;
    }
    return this.length;
  };
  this.toString = function () {
    let stringArray = '';
    for (let index = 0; index < this.length; index++) {
      if (index === this.length - 1) {
        stringArray += this[index];
        break;
      }
      stringArray += this[index] + ',';
    }
    return stringArray;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastElem;
    // const lastElem = this[--this.length];
    // delete this[this.length];
    // return lastElem;
  };
}
//data
function MyArray() {
  this.length = 0;
  if (arguments.length === 1) {
    for (let index = 0; index < arguments[0]; index++) {
      this.push(undefined);
    }
  } else {
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
}
// union data with logic functionality
MyArray.prototype = new ProptotypeMyArray();

const myArr1 = new MyArray(4, 8, 6);
const myArr2 = new MyArray(3);
myArr1.push();
myArr1.push();
myArr1.push(34);
// myArr1.push(23);
// // console.log(myArr1)
// // console.log(myArr1.toString())
// alert(myArr1);
