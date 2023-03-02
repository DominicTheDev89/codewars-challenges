// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution

function getCount(str) {
    let vowels = /[aeiou]/g
    let arr = str.match(vowels)
    if(!arr){
      return 0
    }
    return arr.length;
  }