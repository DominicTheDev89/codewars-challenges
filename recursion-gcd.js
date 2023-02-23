// Euclid's algorithm for finding the greatest common denominator (gcd) for two integers is:


// gcd(a, b) = b if b evenly divides a
// gcd(a, b) = gcd (b, remainder of a/b, i.e. a%b) otherwise

// Write a function using recursion to implement Euclid's algorithm and return the greatest 
// common denominator of two given integers.

//My solution
function gcd(a, b){

    if(a % b === 0){
      //Base
      return b;
    } else {
      //Recursion
      return gcd(b, (a%b))
    }
  }