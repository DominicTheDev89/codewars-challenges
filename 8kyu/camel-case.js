// There are a couple variable naming conventions in programming. They are camelCase and snake_case. 
// The Javascript language subscribes camelCase. Camel case is a naming convention for variable that contain 
// multiple words.

// 1. The entire first word in the variable's name is lowercase
// 2. Every subsequent word's first letter is capitalized
// 3. There are no spaces or underlines between words. They are combined together.

let makeCamelCase = (input) => {
    let newInput = input.split('');
    for(let i = 0; i < newInput.length; i++){
      if(newInput[i] === "_"){
        newInput.splice(i, 1);
        newInput[i] = newInput[i].toUpperCase()
        i--;
      }
    }
    return newInput.join('');
  }