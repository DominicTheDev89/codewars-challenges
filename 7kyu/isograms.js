// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// My solution

function isIsogram(str){
    if(str === ""){
      return true;
    }
    
    let bank = ""
    for(let i = 0; i < str.length; i++){
      if(bank.includes(str.charAt(i).toUpperCase())){
        return false;
      }
      bank += str.charAt(i).toUpperCase()
    }
    
    return true;
  }