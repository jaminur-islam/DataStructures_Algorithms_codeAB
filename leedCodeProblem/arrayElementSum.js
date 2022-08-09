/* var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return false;
};

console.log(twoSum([2, 5, 5, 11], 10)); */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let remaining = target - nums[i]; // ami eikhane target amar 10 ekhon ami prothom index er sathe 10 ke (-) korlam  tahole prothom index 2 amar hate roilo ekhon dekhbo 8 kothay ase koto number index ase seita jante parlei to kaj shes
    for (j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if (remaining === nums[j]) return [i, j];
    }
  }
  return false;
};

console.log(twoSum([2, 1, 6, 6, 4], 10));
