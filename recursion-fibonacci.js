// Write a recursive function that takes in a number and returns the associated number in the Fibonacci sequence. 
// The sequence begins with 0 and 1 then the next number at any point in the Fibonacci sequence is formed by 
// adding the previous two numbers together.

// Thus the full sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// My solution

let fibSeq = [0,1];

function fibonacci(seq) {
  
  let sum = fibSeq[fibSeq.length-1] +  fibSeq[fibSeq.length-2]
  fibSeq.push(sum);
  
  if(seq === 1){
    return fibSeq[fibSeq.length-3]
  } else {
    //console.log(fibSeq)
    return fibonacci(seq - 1)
  }
}