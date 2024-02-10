"use strict";

/**

 * accept 2 strings, word and letters, return true if word can be made from
letters
 */

// [test cases]
// a:2   --  a:1, b:1, c:1   (return false)
// a:1, b:1, c:1  -- d:1, c:1, b:1, a:1  (return true)

function canConstructWord(word, letters) {

  let letterCounter = makeCounter(letters);

  for (let char of word) {
    if (letterCounter[char] !== undefined && letterCounter[char] > 0) {
      letterCounter[char]--;
    } else {
      return false;
    }
  }
  return true;
}

/**
 takes a string and makes frequency counter for characters in string
 */

function makeCounter(string) {
  let letterCounter = {};

  for (let char of string) {
    letterCounter[char] = (letterCounter[char] || 0) + 1;
  }

  return letterCounter;
}