class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const arg of args) {
      this.enQueue(arg);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  enQueue(value) {
    this[`_${this._tail}`] = value; //queue['_0'] = 12
    this._tail++;
    return this.size;
  }
  deQueue() {
    const deleteItem = this[`_${this._head}`];
    delete this[`_${this._head}`];
    this._head++;
    return deleteItem;
  }
  peek() {
    return this[`_${this._head}`];
  }
}

const queue1 = new Queue('asd', 'true', 'aaaa');
const queue2 = new Queue(4, 5, 6, 2, 5, 8, 5, 8);

//напишіть функцію, яка формує з двох черг одну
// 'asd' 4 'true' 5 'aaaa' 6 2 5 8 5 8

const mergeQueue = (queue1, queue2) => {
  //створити нову порожню чергу
  const newQueue = new Queue();
  //доки (while) у нас є елементи в будь якій черзі
  while (queue1.size || queue2.size) {
    //якщо є елементи у першій черзі -
    if (queue1.size) {
      //забрати елемент з голови (deQueue) і додати до кінця нової черги (enQueue)
      newQueue.enQueue(queue1.deQueue());
    }
    //якщо є елементи у другій черзі -
    if (queue2.size) {
      //якщо є елементи у другій черзі -
      //забрати елемент з голови (deQueue) і додати до кінця нової черги (enQueue)
      newQueue.enQueue(queue2.deQueue());
    }
  }
  //повернути нову чергу
  return newQueue;
};
