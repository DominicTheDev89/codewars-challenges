// Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

// Don't round your result. The result needs to be within 0.01 error margin of the expected result.

// HINT: There are two cases to consider. Will it be the cylinder's height or the cylinder's radius 
// that determines the maximum size of your cube? An if/else statement might be useful here.

// Examples

// cubeVolume(3,7);     //27
// cubeVolume(11,5);    //353.55

// My solution

function cubeVolume(h, r) {
    if(h < r){
      return h ** 3;
    } else if (Math.sqrt((((r*2)**2)/2)) > h) {
      return h ** 3
    } else {
      return Math.sqrt((((r*2)**2)/2)) ** 3
    }
  }