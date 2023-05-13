// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and 
// circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// My solution

function area(shape) {
    if (typeof shape === 'object')
      return shape[0] * shape[1];
    else
      return Math.PI * Math.pow(shape, 2);
  }
  
  function sortByArea(array) {
    return array.slice(0).sort((a, b) => area(a) - area(b));
  }