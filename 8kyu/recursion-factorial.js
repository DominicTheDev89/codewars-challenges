// Write a recursive function that takes in a positive whole number and returns the factorial of that number. 
// For reference the factorial of a number is each positive whole number up to and including that number 
// multiplied together. 

// My solution
function factorial(num) {
    let answer = 1;
    if(num === 0){
      return answer;
    } else {
      answer *= num;
      return answer * factorial(num - 1)
    }
  }