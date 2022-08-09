// ======== Big O(n) object ================//
/* const myObj = {
  channel: " CODE ABC",
  instructor: "jaminur islam sagor",
  videos: [4, 3, 3, 5, 5],
};

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));
 */

//============ Big O(1) object ===================//
/* const myObj = {
  channel: " CODE ABC",
  instructor: "jaminur islam sagor",
  videos: [4, 3, 3, 5, 5],
};

const my = myObj.hasOwnProperty("channel");
console.log(my);
 */

//============= Big-O Array ============================//
const myArray = ["sagor", "shimul", "mitu"];
console.log(myArray.unshift("sagor2"));
console.log(myArray[0]);
// shift and unshift hocche Big-O(n)
// push and pop hocche big-O(1)
// searching hocche big-O(n);
// property access korar jonno big-O(1)
