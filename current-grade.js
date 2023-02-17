// Write a method that takes in a student object with attributes GPA as a number and grade level as a number 
// as well as an integer representing the change in their GPA. This method should update the student's GPA to include the 
// change and increase their grade level by one year and should return the updated student object.

// Example

// currentGrade({ grade: 10, GPA: 2.5}, 0.3) 
// ==> { grade: 11, GPA: 2.8 }

//My Solution

function currentGrade(student, improvement) {
    student['grade'] += 1;
    student['GPA'] += improvement;
    return student;
  }