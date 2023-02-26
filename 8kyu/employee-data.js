// You're a new programmer at your company. Your CFO needs some data regarding all the employees. 
// Your CFO needs to know the number of employees per job title, the average salary for that job title within the company, 
// the average bonus that job title receives within the company, and the average total compensation for that job title. 

// You're given an array of objects that represents all the employees in the company. You need to parse through all the employee 
// data and return an array of objects that represents each job title and the corresponding compensation data, including `title`, 
// `totalEmployees` `avgSalary`, `avgBonus`, & `avgTotalComp`

// Input Data
// let employeeData = [
//     {
//       'name': 'Joe',
//       'title': 'developer',
//       'salary': 125000,
//       'bonus': 15000
//     },
//     {
//       'name': 'Kelly',
//       'title': 'developer',
//       'salary': 135000,
//       'bonus': 7500
//     },
//     {
//       'name': 'Joan',
//       'title': 'product manager',
//       'salary': 105000,
//       'bonus': 25000
//     },
//     {
//       'name': 'Amber',
//       'title': 'developer',
//       'salary': 122000,
//       'bonus': 16500
//     },
//     {
//       'name': 'Tom',
//       'title': 'designer',
//       'salary': 87000,
//       'bonus': 9000
//     },
//     {
//       'name': 'Sara',
//       'title': 'product manager',
//       'salary': 97000,
//       'bonus': 12500
//     },
//     {
//       'name': 'Chris',
//       'title': 'designer',
//       'salary': 77500,
//       'bonus': 6500
//     }
//     ]

//     My Solution

const getEmployeeData = (arrOfEmployees) =>{
    let answer = [];
    let addedTitle = [];
    for(let i = 0; i < arrOfEmployees.length; i++){
      let singleEmp = {};
      if(!addedTitle.includes(arrOfEmployees[i].title)){
        singleEmp.title = arrOfEmployees[i].title;
        singleEmp.totalEmployees = 1;
        singleEmp.avgSalary = arrOfEmployees[i].salary;
        singleEmp.avgBonus = arrOfEmployees[i].bonus;
        addedTitle.push(arrOfEmployees[i].title);
        answer.push(singleEmp);
      } else {
        for(let j = 0; j < answer.length; j++){
          if(arrOfEmployees[j].title === answer[j].title){
            answer[j].totalEmployees++;
            answer[j].avgSalary += arrOfEmployees[i].salary;
            answer[j].avgBonus += arrOfEmployees[i].bonus;
          }
        }
      }
    }
  
    for(let k = 0; k < answer.length; k++){
      answer[k].avgSalary = Math.round(answer[k].avgSalary/answer[k].totalEmployees)
      answer[k].avgBonus = Math.round(answer[k].avgBonus/answer[k].totalEmployees)
      answer[k].avgTotalComp = answer[k].avgSalary + answer[k].avgBonus
    }
    return answer;
    
  }
  
  console.log(getEmployeeData(employeeData));