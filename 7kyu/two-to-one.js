// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing 
// distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution

function longest(s1, s2) {
    let answer = ""
    for(let i = 0; i < s1.length; i++){
      if(!answer.includes(s1.charAt(i))){
        answer += s1.charAt(i)
      }
    }
    for(let i = 0; i < s2.length; i++){
      if(!answer.includes(s2.charAt(i))){
        answer += s2.charAt(i)
      }
    }
    return answer.split('').sort().join('')
  }