// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.

// Example
// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal (string) {
    let answer = 0;
    for(let i = 0; i < string.length; i++){
      answer += string.charCodeAt(i);
    }
    return answer;
  }