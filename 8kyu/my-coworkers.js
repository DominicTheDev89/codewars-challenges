// You're given input is a nested array of colleagues. Within the nested array there are your colleagues' titles and a characteristic of them. 

// Write a function that console.log the colleague's name, title and their characteristic and then returns true

//EXAMPLE!
// let colleagueData = [
//     ['Stacey', ['IT person', 'super smart']],
//     ['Jim', ['sales person', 'outgoing']],
//     ['Jenny', ['manager', 'very empathetic']],
//     ['Cory', ['software engineer', 'very funny']]
//     ]
  
// Stacey is the IT person and is super smart.
// Jim is the sales person and is outgoing.
// Jenny is the manager and is very empathetic.
// Cory is the software engineer and is very funny.

//My Solution

let myColleagues = (colleagues) => {
    for(let i = 0; i < colleagues.length; i++){
      console.log(`${colleagues[i][0]} is the ${colleagues[i][1][0]} and is ${colleagues[i][1][1]}.`)
    }
  }