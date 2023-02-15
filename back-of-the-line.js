// Write a function that takes in two arguments, an array of names and a number (negative or positive). 
// The number represents how many positions the names in the array should move. 

// The expected output is the arrOfNames with the names in their new positions

// let arrOfNames = ['kyle', 'stacy', 'tina', 'kenisha', 'greg']

// backOfTheLine(arrOfNames, 2) //-> ['kenisha', 'greg', 'kyle', 'stacy', 'tina']
// backOfTheLine(arrOfNames, -1) //-> ['stacy', 'tina', 'kenisha', 'greg', 'kyle']

//My solution
let backOfTheLine = (arrOfNames, numOfPositions) => {
    if(numOfPositions > 0){
      while(numOfPositions > 0){
        let i = arrOfNames.length - 1;
        arrOfNames.unshift(arrOfNames[i]);
        arrOfNames.pop(arrOfNames[i]);
        numOfPositions--;
      }
    } else if(numOfPositions < 0){
      while(numOfPositions < 0){
        let j = arrOfNames[0];
        arrOfNames.push(j);
        arrOfNames.shift(j);
        numOfPositions++;
      }
    }
    return arrOfNames;
  }