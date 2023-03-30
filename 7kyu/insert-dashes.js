// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
// between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// My solution

function insertDash(num) {
    let answer = ""
    num = num.toString()
    for(let i = 0; i < num.length; i++){
      answer += num.slice(i, i + 1)
      if(parseInt(num.charAt(i)) % 2 === 1 && parseInt(num.charAt(i + 1)) % 2 === 1){
        answer += "-"
      }
    }
    return answer
  }