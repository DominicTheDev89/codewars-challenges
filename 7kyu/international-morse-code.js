// Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

// Characters should be separated by a single space. Words should be separated by a triple space.

// For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

// To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

// A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.

// My solution

function encryption(message) {

    //CHAR_TO_MORSE preloaded to convert characters into Morse code
    let sentence = ""
    for(let i = 0; i < message.length; i++){
      if(message.charAt(i) != " "){
        sentence += (CHAR_TO_MORSE[message.charAt(i)] + " ")
      } else {
        sentence += "  "
      }
      
    }
    return sentence.trim()
  }