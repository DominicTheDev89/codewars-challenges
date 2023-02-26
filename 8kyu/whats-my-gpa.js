// Write a function that takes in an array of letters represented by grades for a semester Ex: ['A+','C-','B+','A','C+'] and 
// return the cumulative GPA for the semester. 

// ![Image Example](https://storage.googleapis.com/replit/images/1592249113504_d7899742c15126d613183ab5b977a42b.png)

// Example
// myGPA(['A+','C+','B+','A-','C']) ==> 3.132
// myGPA(['B-','C+','B+','C-','A+']) ==> 2.866

//My Solution

const myGPA = (arrOfGrades) => {
    let gradeSum = 0;
    let gpaObj = {
      "A+": 4.33,
      "A": 4.00,
      "A-": 3.67,
      "B+": 3.33,
      "B": 3.00,
      "B-": 2.67,
      "C+": 2.33,
      "C": 2.00,
      "C-": 1.67,
      "D+": 1.33,
      "D": 1.00,
      "D-": 0.67,
      "F": 0,
    };
  
    for(let i = 0; i < arrOfGrades.length; i++){
      gradeSum += gpaObj[arrOfGrades[i]];
    }
    return gradeSum / arrOfGrades.length;
  }