"use strict";


/** returns an object with merged with arrays--> keys from
 * array 1, and values from array 2
 *  */

//input: two arrays
//output: object

//loop over keys array, mergedobject[key] = values[i] || or null
//return mergedObject
function twoArrayObject(keysArray, valuesArray) {

  let mergedObject = {};

  for (let i = 0; i < keysArray.length; i++) {
    mergedObject[keysArray[i]] = valuesArray[i] || null;
  }

  return mergedObject;
}
