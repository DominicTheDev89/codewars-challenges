// Write a function that takes in a string of lowercase characters and returns an object containing 
// the count for each letter in the string.

// Example
// countCharacters('bdacdaa') // -> { b: 1, d: 2, a: 3, c: 1 }

//My solution
let countCharacters = (str) => {
    let newStr = str.split('');
    let answer = {};
    for(let i = 0; i < newStr.length; i++){
      if(!answer[newStr[i]]){
        answer[newStr[i]] = 0;
      }
      answer[newStr[i]]++;
    }
    return answer;
  }