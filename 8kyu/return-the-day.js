// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// My solution

function whatday(num) { 
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Wrong, please enter a number between 1 and 7"]
    
    return num == 1 ? arr[0] : num == 2 ? arr[1] : num == 3 ? arr[2] : num == 4 ? arr[3] : num == 5 ? arr[4] : num == 6 ? arr[5] : num == 7 ? arr[6] : arr[7]
  
  }