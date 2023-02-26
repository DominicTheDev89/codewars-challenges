// Write a method that takes in a minimum and maximum integer, and return an array of all the integers in 
// between in ascending order.

//My solution
function rangeGen(min, max){
    let arr = [];
    for(let i = min + 1; i < max; i++){
      arr.push(i);
    }
    return arr;
  }