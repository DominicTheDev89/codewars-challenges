// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution

function getSize(width, height, depth){
    return [(2 * width * height) + (2 * height * depth) + (2 * width * depth), width * height * depth]
  }
  