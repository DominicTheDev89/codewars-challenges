// Using recursion and without creating any additional variables, create a function that 
// returns the reverse of an inputted string.

// My solution

function reverseWord(str){
    if(str.length <= 1){
        //Base case
        return str;
      } else {
        //Recursion case
        return str.charAt(str.length - 1) + reverseWord(str.substring(0, str.length - 1));
      }
  }