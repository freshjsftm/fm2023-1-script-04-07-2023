const arr1 = [];
const arr2 = [];
//arr1[0] = 12;
arr1.push(12);
arr1.push(33);
arr2.push('red');
console.log(arr1)
console.log(arr1.push === arr2.push); //true


const proptotypeMyArray = {};

proptotypeMyArray.push = function(value){
  this[this.length] = value; 
  this.length++;  
  return this.length;  
}
proptotypeMyArray.test = function(){

}

function MyArray() {
  this.length = 0;
}

MyArray.prototype = proptotypeMyArray;

const arrMy1 = new MyArray(); 
//debugger
arrMy1.push(12); 
arrMy1.push(33); 
const arrMy2 = new MyArray(); 
arrMy2.push('red'); 
console.log(arrMy1);
console.log(arrMy2);
console.log(arrMy1.push === arrMy2.push); //false
