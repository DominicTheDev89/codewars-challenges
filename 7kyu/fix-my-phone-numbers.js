// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

// The Format
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some 
// are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as 
// a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

// My solution

function isItANum(str) {
    let answer = "";
    
    for(let i = 0; i < str.length; i++){
      if(parseInt(str.charAt(i)) === 0 || parseInt(str.charAt(i)) === 1 || parseInt(str.charAt(i)) === 2 || parseInt(str.charAt(i)) === 3 ||
         parseInt(str.charAt(i)) === 4 || parseInt(str.charAt(i)) === 5 || parseInt(str.charAt(i)) === 6 || parseInt(str.charAt(i)) === 7 ||
         parseInt(str.charAt(i)) === 8 || parseInt(str.charAt(i)) === 9) {
         answer += str.charAt(i)
        }
    }
    
    console.log(answer)
    
    if(answer.charAt(0) !== "0" || answer.length != 11){
      return "Not a phone number"
    } else {
      return answer;
    }
  }