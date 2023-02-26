// Write a method that takes in an array of positions over time and the total change in time 
// and return the average velocity of the entire trip. Time will always be greater than 0.

//My Solution
function avgVel(posArray, time){
    let posChange = posArray[posArray.length - 1] - posArray[0];
    return posChange / time;
  }