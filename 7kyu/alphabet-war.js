// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. 
// When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// My solution

function alphabetWar(fight){
    let left = "Left side wins!"
    let right = "Right side wins!"
    let tie = "Let's fight again!"
    let leftSide = 0;
    let rightSide = 0;
    
    for(let i = 0; i < fight.length; i++){
      fight.charAt(i) == "w" ? leftSide += 4 : fight.charAt(i) == "p" ? leftSide += 3 : fight.charAt(i) == "b" ? leftSide += 2 : fight.charAt(i) == "s" ? leftSide += 1 :
      fight.charAt(i) == "m" ? rightSide += 4 : fight.charAt(i) == "q" ? rightSide += 3 : fight.charAt(i) == "d" ? rightSide += 2 : fight.charAt(i) == "z" ? rightSide += 1 : leftSide += 0
    }
      
      
      return leftSide > rightSide ? left : rightSide > leftSide ? right : tie
      
  }