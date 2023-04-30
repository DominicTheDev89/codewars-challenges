// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a 
// single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// My solution

function remove (string) {
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){
      let count = 0
      
      for(let j = 0; j < string[i].length; j++){
        if(string[i][j] === "!"){
          count++
        }
      }
      
      if(count === 1){
          string.splice(i, 1)
          i--
        }
      
      count = 0
    }
    return string.join(' ')
  }