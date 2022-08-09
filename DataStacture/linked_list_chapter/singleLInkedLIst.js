// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   isEmpty() {
//     return this.length == 0;
//   }

//   push(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
// }

/* const list = new SingleLinkedList();
list.push(10);
list.push(20);
list.push(30);

console.log({ value: 1, next: { value: 2, next: { value: 3, next: null } } }); */
