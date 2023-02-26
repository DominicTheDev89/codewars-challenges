// Write a method that takes in an array of characters and a similar-length array of integers. 
// Return a string consisting of every character repeated the number of times as indicated in the integer array, with each 
// character corresponding to the number in the same position.

// EXAMPLE

// repeatedChars(['a','b','c'], [1,2,3]) => 'abbccc'
// repeatedChars(['h','e','l','o'], [1,1,2,1]) => 'hello'

//My Solution

function repeatedChars(charArray, numArray) {
    let newStr = "";
    for(let i = 0; i < charArray.length; i++){
      newStr += charArray[i].repeat(numArray[i])
    }
    return newStr;
  }