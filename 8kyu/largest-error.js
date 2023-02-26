// Write a function that takes in a list of incorrect numbers and a correct number. 
// Return the incorrect number farthest away from the correct number.

//Examples
// maxError([3, 6, -10], 0) => -10
// maxError([3, 6, -10], -9) => 6

function maxError(wrongNums, correctNum){
    let answer = 0;
    wrongNums.forEach(x => {
      if(Math.abs(x - correctNum) > Math.abs(answer)){
        answer = x;
      }
    })
    return answer;
  }