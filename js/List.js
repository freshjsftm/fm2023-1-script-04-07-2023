class IteratorLinkedList {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem =
      this.currentItem === null ? this.list.head : this.currentItem.next;
    return {
      value: this.currentItem ? this.currentItem : undefined,
      done: this.currentItem === null,
    };
  }
}

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
  [Symbol.iterator]() {
    return new IteratorLinkedList(this);
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
  // unshift(arg){}
  // add(arg){}

  // pop(){}
  // shift(){}
  // delete(item){}

  //повертає знайдений елемент (ключ співпадає зі значенням), інакше повертає null
  search(key) {
    for (const item of this) {
      if (item.data === key) {
        return item;
      }
    }
    return null;
  }
  logDataLinkedList(){
    for (const item of this) {
      console.log(item.data)
    }
  }
}

// const list = new LinkedList(1, [10, 20], { prop: 'qwe' }, null, 'asd');
// console.log(list.search(null));

//console.log(...list);
