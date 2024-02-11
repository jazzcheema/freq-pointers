"use strict";

/**
 * finds positive numbers and moves them to our tracked position that holds
 * positive index. returns and array with positive to left and negative on right
 */

//test case: [5, 10, -15, 20, 25]
// 5[0] 5[0]      10[1] 10[1]         20[3]  -15[2]   25[4]  -15[3]
// 5[0] 5[0]      10[1] 10[1]         20[2]  -15[3]   25[3]  -15[4]
// posSpace: 1       2                3                 4


function separatePositive(nums) {

  let positiveSpace = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      [nums[i], nums[positiveSpace]] = [nums[positiveSpace], nums[i]];
      positiveSpace++;
    }
  }
  return nums;
}
