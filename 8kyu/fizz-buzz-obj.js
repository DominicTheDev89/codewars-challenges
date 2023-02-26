// The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job 
//candidates.
// The text of the programming assignment is follows something similar to this: 

// Write a program that prints an object with a number of  keys. The key is the number and the value is 
//either the number,  "Fizz", "Buzz", or "FizzBuzz".

// But for multiples of three assign the key's value to equal “Fizz” instead of the number and for the 
//multiples of five assign the key's value to equal “Buzz”. For numbers which are multiples of both three 
//and five assign the key's value to equal “FizzBuzz”, otherwise assign the key's value to equal the number.

//My solution
const fizzBuzz = (num) => {
    let newObj = {}
    for(let i = 1; i <= num; i++){
      if(i % 15 == 0){
        newObj[i] = "FizzBuzz"
      } else if(i % 5 == 0){
        newObj[i] = "Buzz"
      } else if(i % 3 == 0){
        newObj[i] = "Fizz"
      } else {
        newObj[i] = i
      }
    }
  
    return newObj;
    
  }