Certainly! Here is the content in markdown format:

### Concepts

For this project, we expect you to look at these concepts:

- Modern Javascript
- Software Linter

### Resources

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](<https://www.w3schools.com/js/js_es6.asp>)
- [Statements and declarations](<https://intranet.alxswe.com/rltoken/bu6OK8Wbzzxr04Si-qup-w>)
- [Arrow functions](<https://intranet.alxswe.com/rltoken/kn70en_i7XsVl9PUhAK1fQ>)
- [Default parameters](<https://intranet.alxswe.com/rltoken/e1-hBHivLFWOip87Lc4Jfw>)
- [Rest parameter](<https://intranet.alxswe.com/rltoken/TB_tbhDM8tPkVIS4_Tw_rw>)
- [Javascript ES6 — Iterables and Iterators](<https://intranet.alxswe.com/rltoken/TFWv4CZLeQfvCsW5gWRXjA>)

### Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

### Requirements

**General**

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js ` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

### Setup

Install NodeJS 12.11.x (in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint in your project directory using the supplied package.json:

```bash
npm install
```

**Configuration files**

Add the following files to your project directory:

- [package.json](<link>)
- [babel.config.js](<link>)
- [.eslintrc.js](<link>)

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks

### 0. Const or let?

Modify the `taskFirst` function to instantiate variables using `const` and the `taskNext` function to instantiate variables using `let`.

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `0-constants.js`

### 1. Block Scope

Given what you’ve read about `var` and hoisting, modify the variables inside the `taskBlock` function so that the variables aren’t overwritten inside the conditional block.

```javascript
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
```

**Execution:**

```bash
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `1-block-scoped.js`


#### 0. Const or let?

Modify the `taskFirst` function to instantiate variables using `const`, and `taskNext` to instantiate variables using `let`.

**Repo:**
GitHub repository: [alx-frontend-javascript](<link>)
Directory: 0x00-ES6_basic
File: [0-constants.js](<link>)

Certainly! Here is the updated content for all tasks with GitHub repository, Directory, and File highlighted as code:

### 2. Arrow functions

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

**Execution:**

```bash
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `2-arrow.js`

### 3. Parameter defaults

Condense the internals of the `getSumOfHoods` function to 1 line - without changing the name of each function/variable.

```javascript
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `3-default-parameter.js`

### 4. Rest parameter syntax for functions

Modify the `returnHowManyArguments` function to return the number of arguments passed to it using the rest parameter syntax

```javascript
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

**Example:**

```bash
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

**Execution:**

```bash
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `4-rest-parameter.js`

### 5. The wonders of spread syntax

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the `concatArrays` function. Your function body should be one line long.

```javascript
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

**Execution:**

```bash
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `5-spread-operator.js`

### 6. Take advantage of template literals

Rewrite the return statement to use a template literal so you can substitute the variables you’ve defined.

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `6-string-interpolation.js`

### 7. Object property value shorthand syntax

Notice how the keys and the variable names are the same?

Modify the `getBudgetObject` function’s budget object to simply use the key name instead.

```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `7-getBudgetObject.js`

### 8. No need to create empty objects before adding in properties

Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the budget object

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]:

 income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `8-getBudgetCurrentYear.js`

### 9. ES6 method properties

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `9-getFullBudget.js`

### 10. For...of Loops

Rewrite the `appendToEachArrayValue` function to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
```

**Execution:**

```bash
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `10-loops.js`

### 11. Iterator

Write a function named `createEmployeesObject` that will receive two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

```javascript
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
```

**Execution:**

```bash
bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `11-createEmployeesObject.js`

### 12. Let's create a report object

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

```javascript
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
```

**Execution:**

```bash
bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
```

**Repo:**
GitHub repository: `alx-frontend-javascript`
Directory: `0x00-ES6_basic`
File: `12-createReportObject.js`