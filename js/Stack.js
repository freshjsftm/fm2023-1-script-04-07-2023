class Stack {
  constructor(maxSize, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const arg of args) {
      this.push(arg);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(arg) {
    if (this._size >= this._maxSize) {
      throw new RangeError('stack overflow');
    }
    this[`_${this._size}`] = arg;
    return ++this._size;
  }
  peek() {
    return this[`_${this._size - 1}`];
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastElem = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastElem;
  }
}

const stack = new Stack(3, 2, 3, 5);
console.log(stack);
console.log(stack.peek());
