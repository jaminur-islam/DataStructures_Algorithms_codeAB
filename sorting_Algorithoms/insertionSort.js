// function insertion(arr) {
//   for (i = 1; i < arr.length; i++) {
//     for (j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         /* let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp; */
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }

// console.log(insertion([1, 3, 5, 2]));

/* const twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] === 9) {
      return [i, i + 1];
    } else if (nums[i] + nums[nums.length - 1] === 9) {
      return [i, nums.length - 1];
    } else if (nums[1] + nums[2]) {
      return [1, 2];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
 */
