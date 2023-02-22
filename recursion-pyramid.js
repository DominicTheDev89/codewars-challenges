// Using recursion, write a function that returns the total number of blocks in a pyramid with a given height. 
// A pyramid looks like this:


// row 1:     *
// row 2:    ***
// row 3:   *****
// row 4:  *******


// so the number of blocks for a row n equals 2 * n - 1

// **Example**


// pyramid(3) => 9

// My solution

function pyramid(height) {
    let blocks = 0;
    
    //Base structure
    if(height <= 0){
      return blocks
    } else {
      //Recursion structure
      blocks = height * 2 - 1
      return blocks + pyramid(height - 1)
    }
  }
