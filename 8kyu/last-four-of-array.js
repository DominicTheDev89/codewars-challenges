// Write a function that takes in a number that represents a social security number and return 
// the last four digit as a string of the social security number.

let lastFour = (socSec) => {
    return socSec.toString().split('').slice(-4).join('')
  }