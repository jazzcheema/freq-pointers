"use strict";


/** compares two inputs and determines if they have the same freq. */
/** our controller function. it takes in two numbers--> uses a method to split
 * nums to strings in array--> moves one of those variables into freq. counter
 * and checks the object to see if it's a match--> returns true if identical
 * numerical inputs
 */

function sameFrequency(nums1, nums2) {

  let newNums1 = stringAndSplit(nums1);
  let newNums2 = stringAndSplit(nums2);

  newNums1 = makeObject(newNums1);

  for (let num of newNums2) {
    if (newNums1[num] !== undefined && newNums1[num] > 0) {
      newNums1[num]--;
    } else {
      return false;
    }
  }

  return true;
}

/** makes object and frequency counter for nums--> once theyre converted
 * to strings in an array
 */

function makeObject(nums) {

  let newObject = {};

  for (let num of nums) {
    newObject[num] = (newObject[num] || 0) + 1;
  }

  return newObject;
}


/** takes a number, converts to strings, splits into array
 * --> returns in string form */

function stringAndSplit(num) {

  let stringFromNum = JSON.stringify(num);

  stringFromNum = stringFromNum.split('');

  return stringFromNum;
}