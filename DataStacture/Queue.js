// first in first out
class Queue {
  constructor() {
    this.arr = [];
  }
  unshift(value) {
    this.arr.unshift(value);
    return this.arr;
  }

  pop() {
    this.arr.pop();
    return this.arr;
  }

  lookUP() {
    return this.arr[this.arr.length - 1];
  }
}
const queue = new Queue();
console.log(queue.unshift(10));
console.log(queue.unshift(20));
console.log(queue.unshift(30));
console.log(queue.unshift(40));

console.log(queue.lookUP());
console.log(queue.pop());

/* class AnotherQueue {
  constructor() {
    this.count = 0;
    this.database = {};
  }
  unshift(value) {
    this.count++;
    this.database[this.count] = value;
    return this.database;
  }

  shift(){
    delete this.database[this.count]
  }
}

const anotherQueue = new AnotherQueue();
console.log(anotherQueue.unshift(10));
console.log(anotherQueue.unshift(20));
console.log(anotherQueue.unshift(30));
console.log(anotherQueue.unshift(40));
 */
