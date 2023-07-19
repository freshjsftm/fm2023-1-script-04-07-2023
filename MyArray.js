//logic functionality
function ProptotypeMyArray() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
  this.toString = function () {
    let stringArray = '';
    for (let index = 0; index < this.length; index++) {
      //v1
      // if(index === this.length-1){
      //   stringArray += this[index];
      //   break;
      // }
      //stringArray += this[index] + ',';
      //v2
      stringArray += this[index] + (index === this.length - 1 ? '' : ',');
    }
    return stringArray;
  };
}
//data
function MyArray() {
  this.length = 0;
}
// union data with logic functionality
MyArray.prototype = new ProptotypeMyArray();

const myArr1 = new MyArray();
myArr1.push(12);
myArr1.push(34);
myArr1.push(23);
// console.log(myArr1)
// console.log(myArr1.toString())
alert(myArr1);
