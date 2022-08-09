// last in first out
/* class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
    return this.arr;
  }

  pop() {
    this.arr.pop();
    return this.arr;
  }
  lookUp() {
    return this.arr[this.arr.length - 1];
  } 
}

const stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.lookUp());
console.log(stack.pop());
console.log(stack.pop());
 */

//===== Another Stack ======//
class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.database[this.count] = value;
    return this.database;
  }

  pop() {
    const deleteItem = this.database[this.count];
    delete this.database[this.count];
    this.count--;
    return deleteItem;
  }

  peek() {
    console.log(this.count);
    return this.database[this.count];
  }
}

const anotherStack = new AnotherStack();
console.log(anotherStack.push(50));
console.log(anotherStack.push(60));
console.log(anotherStack.push(70));
console.log(anotherStack.push(80));
console.log(anotherStack.push(90));
console.log(anotherStack.pop());
console.log(anotherStack.peek());
