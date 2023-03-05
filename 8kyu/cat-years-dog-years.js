// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My solution

var humanYearsCatYearsDogYears = function(humanYears) {
    let h, c, d;
    c = 1;
    d = 1;
    h = humanYears;
    
    c = h > 2 ? 4 * h + 16 : h > 1 ? 24 : 15;
    d = h > 2 ? 5 * h + 14 : h > 1 ? 24 : 15
    
    return [h,c,d];
  }