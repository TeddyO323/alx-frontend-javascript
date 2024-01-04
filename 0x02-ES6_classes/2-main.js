import HolbertonCourse from './2-hbtn_course';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);  // Output: ES6

c1.name = 'Python 101';  // Using the setter for 'name'
console.log(c1);  // Output: HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

try {
  c1.name = 12;  // Attempting to set 'name' to a non-string value, will throw an error
} catch (err) {
  console.log(err);  // Output: TypeError: Name must be a string
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);  // Attempting to create a course with a non-number length
} catch (err) {
  console.log(err);  // Output: TypeError: Length must be a number
}
