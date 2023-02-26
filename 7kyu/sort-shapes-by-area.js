// In this kata you will be given an array of the dimensions of rectangles (array with width and length) and 
// circles (radius - just a number). Your task is to sort the objects by their area in ascending order and 
// return the sorted array of areas. Round the values of the areas to a maximum of two decimal places.

// For example,

// var array = [[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]];  // [rectangle, circle, circle, reactangle]
// sortByArea(array); // should return [ 4.31, 4.75, 27.2, 37.26 ]

// My solution

function sortByArea(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].length === 2){
        array[i] = parseFloat((array[i][0] * array[i][1]).toFixed(2))
      } else {
        array[i] = parseFloat((Math.PI * array[i] ** 2).toFixed(2))
      }
    }
    return array.sort((a, b) => a - b)
  }