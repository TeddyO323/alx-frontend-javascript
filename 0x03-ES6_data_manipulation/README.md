# 0x03. ES6 Data Manipulation

## JavaScript - ES6


**Weight:** 1

![Arrays](images/6ab7bec4727cb5c91257.jpg)


## Resources

Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://intranet.alxswe.com/rltoken/kpoPupbBdDmukQkcKlvwnw)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/C8x3dhHo0p3uE7S9-EyP9Q)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/XR-ql9v9-PWcXnvTc749gw)
- [WeakMap](https://intranet.alxswe.com/rltoken/NEy8fk2QRytajR8hgXkCog)

## Learning Objectives

By the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use map, filter, and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x (in your home directory):
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    ```

2. Install Jest, Babel, and ESLint:
    In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

3. Configuration files:
   - [package.json](#)
   - [babel.config.js](#)
   - [.eslintrc.js](#)
   
   **Don't forget to run `$ npm install` when you have the package.json**

## Tasks

#### 0. Basic list of objects (mandatory)

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

Example:

```js
import getListStudents from "./0-get_list_students.js";
console.log(getListStudents());
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 2, firstName: 'James', location: 'Columbia' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `0-get_list_students.js`

---

#### 1. More mapping (mandatory)

Create a function `getListStudentIds` that returns an array of ids from a list of objects. This function takes an array of objects as an argument (similar to the output of `getListStudents` from the previous task).

Example:

```js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
// Output: []

console.log(getListStudentIds(getListStudents()));
// Output: [1, 2, 5]
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `1-get_list_student_ids.js`

---

#### 2. Filter (mandatory)

Create a function `getStudentsByLocation` that returns an array of objects located in a specific city. It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

Example:

```js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `2-get_students_by_loc.js`

---

#### 3. Reduce (mandatory)

Create a function `getStudentIdsSum` that returns the sum of all student ids. It should accept a list of students (from `getListStudents`) as a parameter.

Example:

```js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
// Output: 8
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `3-get_ids_sum.js`

---

#### 4. Combine (mandatory)

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade. It should accept a list of students (from `getListStudents`), a city (String), and newGrades (Array of "grade" objects) as parameters.

Example:

```js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
//   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
// ]

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
// Output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
// ]
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `4-update_grade_by_city.js`

---

#### 5. Typed Arrays (mandatory)

Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

Example:

```js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
// Output:
// DataView {
//   byteLength: 10,
//   byteOffset: 0,
//   buffer: ArrayBuffer {
//     [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
//     byteLength: 10
//   }
// }
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `5-typed_arrays.js`

---

#### 6. Set data structure (mandatory)

Create a function `setFromArray` that returns a Set from an array. It accepts an argument (Array, of any kind of element).

Example:

```js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
// Output: Set { 12, 32, 15, 78, 98 }
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `6-set.js`

---

#### 7. More set data structure (mandatory)

Create a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).

Example:

```js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
// Output: true

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
// Output: false

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
// Output: false
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `7-has_array_values.js`

---

#### 8. Clean set (mandatory)

Create a function `cleanSet` that returns a string of all the set values that start with a specific string (`startString`). It accepts two arguments: a set (Set) and a `startString` (String).

Example:

```js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
// Output: 'jovi-aparte-appetit'

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
// Output: 'bonjovi-bonaparte-bonappetit-banana'
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `8-clean_set.js`

---

#### 9. Map data structure (mandatory)

Create a function `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5

Example:

```js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());
// Output:
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 1,
//   'Rice' => 1,
//   'Banana' => 5
// }
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `9-groceries_list.js`

---

#### 10. More map data structure (mandatory)

Create a function `updateUniqueItems` that returns an updated map for all items with an initial quantity at 1. It should accept a map as an argument. The map it accepts for the argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

Example:

```js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
// Output:
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 1,
//   'Rice' => 1,
//   'Banana' => 5
// }
// Map {
//   'Apples' => 10,
//   'Tomatoes' => 10,
//   'Pasta' => 100,
//   'Rice' => 100,
//   'Banana' => 5
// }
```

**Repo:**
- GitHub repository: [`alx-frontend-javascript`](#)  
- Directory: `0x03-ES6_data_manipulation`  
- File: `10-update_uniq_items.js`

--- 

#### 11. Weak link data structure (#advanced)

Export a const instance of WeakMap and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an `endpoint` argument like so:

```js
{
  protocol: 'http',
  name: 'getUsers',
}
```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5, throw an error with the message `Endpoint load is high`.

Example:

```js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
// Output:
// 1
// 2
// .../100-weak.js:16
//     throw new Error('Endpoint load is high');
// ...
```

**Repo:**
- GitHub repository: ``alx-frontend-javascript``  
- Directory: `0x03-ES6_data_manipulation`  
- File: `100-weak.js`
```