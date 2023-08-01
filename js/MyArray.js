class MyArray {
  #length;
  constructor() {
    this.#length = 0;
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
  get length() {
    return this.#length;
  }
  push() {
    for (let index = 0; index < arguments.length; index++) {
      this[this.#length] = arguments[index];
      this.#length++;
    }
    return this.#length;
  }
  toString() {
    let stringArray = '';
    for (let index = 0; index < this.#length; index++) {
      if (index === this.#length - 1) {
        stringArray += this[index];
        break;
      }
      stringArray += this[index] + ',';
    }
    return stringArray;
  }
  pop() {
    if (this.#length === 0) {
      return;
    }
    const lastElem = this[this.#length - 1];
    delete this[this.#length - 1];
    this.#length--;
    return lastElem;
  }
  forEach(callbackFn) {
    for (let index = 0; index < this.#length; index++) {
      callbackFn(this[index]);
    }
  }
  some(checkFn) {
    for (let index = 0; index < this.#length; index++) {
      if (checkFn(this[index])) {
        return true;
      }
    }
    return false;
  }
  every(checkFn) {
    for (let index = 0; index < this.#length; index++) {
      if (checkFn(this[index]) === false) {
        return false;
      }
    }
    return true;
  }
  filter(checkFn) {
    const result = new MyArray();
    for (let index = 0; index < this.#length; index++) {
      if (checkFn(this[index])) {
        result.push(this[index]);
      }
    }
    return result;
  }
  concatForFlat(instanceMyArray) {
    const newMyArray = new MyArray();
    for (let index = 0; index < this.length; index++) {
      newMyArray.push(this[index]);
    }
    for (let index = 0; index < instanceMyArray.length; index++) {
      newMyArray.push(instanceMyArray[index]);
    }
    return newMyArray;
  }
  flat(depth = 1) {
    let newMyArray = new MyArray();
    // for (let index = 0; index < this.length; index++) {
    //   if (MyArray.isMyArray(this[index]) && depth > 0) {
    //     const newSubMyArray = this[index].flat(depth - 1);
    //     newMyArray = newMyArray.concat(newSubMyArray);
    //   } else if (this[index] !== undefined) {
    //     newMyArray.push(this[index]);
    //   }
    // }
    this.forEach((element) => {
      if (MyArray.isMyArray(element) && depth > 0) {
        newMyArray = newMyArray.concatForFlat(element.flat(depth - 1));
      } else if (element !== undefined) {
        newMyArray.push(element);
      }
    });
    return newMyArray;
  }
  static isMyArray(instanceMyArray) {
    return instanceMyArray instanceof MyArray;
  }
}

const myArr1 = new MyArray(
  4,
  undefined,
  12,
  new MyArray(
    2,
    2,
    new MyArray(
      3,
      3,
      new MyArray(3, 3, new MyArray(3, 3, 3), new MyArray(3, 3, 3), 3),
      3
    ),
    2
  ),
  6
);
const checkMore10Array = myArr1.filter(function (elemCur) {
  return elemCur > 10;
});
// const checkMyArray = new MyArray();
console.log(MyArray.isMyArray(myArr1));

console.log(myArr1);

// const myArr2 = new MyArray(...myArr1)

// const arr1 = [1,2,3]
// const arr2 = [...arr1]

//console.log(checkMore10Array);

// const myArr2 = new MyArray(3);
// myArr1.push();
// myArr1.push();
// myArr1.push(34);
// myArr1.push(23);
// // console.log(myArr1)
// // console.log(myArr1.toString())
// alert(myArr1);

const arr4 = [1, 2, , , , , [3, 4, [5, 6, [7, 8, [9, 10]]]]];
