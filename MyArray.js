//logic functionality
function ProptotypeMyArray() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
  this.test = function(){}
}
//data
function MyArray() {
  this.length = 0;
}
// union data with logic functionality
MyArray.prototype = new ProptotypeMyArray();