import {
  student1, student2, student3, student4, student5,
} from './9-hoisting.js';

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

const listPrinted = [student1, student2, student3, student4, student5].map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
