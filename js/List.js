class ListItem {
  //user
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
  }
}

class LinkedList {
  constructor(...args) {
    // 1,2,3
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const arg of args) {
      this.push(arg);
    }
  }
  push(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.prev = this.tail; //за ким Вася  - Коля
      this.tail.next = item; // Коля - Вася
      this.tail = item; //хвіст - Вася
    }
    return ++this.length;
  }
  delete(item){}
  add(item){}
}

// Оля, Коля     - Вася

const list = new LinkedList(1, [10, 20], { prop: 'qwe' }, null, 'asd');
console.log(list);
