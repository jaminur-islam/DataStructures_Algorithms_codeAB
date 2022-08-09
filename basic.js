/* function sumOfAll(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total = total + i;
  }

  return total;
} */

/* function sumOfAll(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfAll(20));
 */

// =========================== Big o notation ==========================//
/* function max5Log(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

max5Log(50); // 0(n) */
/* function min5Log(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

min5Log(8); 0(1) */

//=========================== Big o space ==========================//
/* function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([10, 20, 30, 40, 50])); // O(1) space; */

/* function double(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }

  return newArray;
}

console.log(double([10, 20, 30])); // 0(n) space */

// ===================== time and space ==============================//
function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i < arr.length; i++) {
    //time n2
    let ele = arr[i];
    if (!uniqueName.includes(ele)) {
      uniqueName.push(ele);
    }
  }
  return uniqueName; // space n
}
// total complexity = time: n2 and space n

console.log(
  uniqueName(["sagor", "sagor", "shimul", "mithu", "tasif", "mithu"])
);
