// add whatever parameters you deem necessary & write doc comment
//accept 2 strings, word and letters, return true, otherwise false --boolean
//only lowercase
//make sure enough words on right to make words on left
/**
 *
 *  make a frequency counter for both strings
 * compare the values and see if right string adds up to left
 *  return true if so, if not, return false
 *
 * [test cases]
 * a:2   --  a:1, b:1, c:1   (return false)
 * a:1, b:1, c:1  -- d:1, c:1, b:1, a:1  (return true)
 */

function canConstructWord(word, letters) {

  let letterCounter = makeCounter(letters);        //object


  // for (let char of letters) {
  //   if (wordCounter[char] !== undefined && wordCounter[char] > 0) {
  //     wordCounter[char]--;//
  //   } else {
  //     return false;
  //   }
  // }
  for (let char of word) {
    if (letterCounter[char] !== undefined && letterCounter[char] > 0) {
      letterCounter[char]--;
    } else {
      return false;
    }
  }
  return true;
}

function makeCounter(string) {
  let letterCounter = {};

  for (let char of string) {
    letterCounter[char] = (letterCounter[char] || 0) + 1;
  }

  return letterCounter;
}