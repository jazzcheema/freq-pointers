"use strict";

/*

 input: sorted array of nums array, targetAvg
 output: boolean
if a pair has sum less than target average, not valid pair
for loop, start at index1,

[2,4,6,8,9]
create average(num1,num2) returns average
TODO: add docstring , use strict
*/

// takes array of nums, finds two elements in array and compares their average
// to targetavg returns true if pair exists
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let average = getAverage(nums[left], nums[right]);

    if (average === targetAvg) {
      return true;
    } else if (average < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;

}

// finds average of two nums
function getAverage(num1, num2) {
  return (num1 + num2) / 2;
}

