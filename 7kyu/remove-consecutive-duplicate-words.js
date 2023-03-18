// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. 
// An empty string (0 words) is a valid input.

// My solution

const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i+1]){
        s.splice(i, 1)
        i--
      }
    }
    return s.join(' ')
  }