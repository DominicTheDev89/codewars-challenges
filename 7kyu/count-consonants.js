// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// My solution

function consonantCount(str) {
    let regex = /[bcdfghjklmnpqrstvwxyz]/i
    let answer = 0
    for(let i = 0; i < str.length; i++){
      if(regex.test(str.charAt(i)) === true){
        answer++
      }
    }
    return answer
  }