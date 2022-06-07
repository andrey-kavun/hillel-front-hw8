const students = studentsMock.getStudentList(5);
let studentsNames = students.map(element => element.name);
console.log(studentsNames);