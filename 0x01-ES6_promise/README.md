
# 0x01. ES6 Promises

## JavaScript

### Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

### Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
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

Install Jest, Babel, and ESLint in your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run npm install.

### Configuration Files
Add the files below to your project directory

#### package.json
```json
Click to show/hide file contents
```

#### babel.config.js
```json
Click to show/hide file contents
```

#### utils.js
Use when you get to tasks requiring `uploadPhoto` and `createUser`.
```json
Click to show/hide file contents
```

#### .eslintrc.js
```json
Click to show/hide file contents
```

And don’t forget to run `$ npm install` when you have the package.json

### Response Data Format
`uploadPhoto` returns a response with the format
```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```
`createUser` returns a response with the format
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

## Tasks

### 0. Keep every promise you make and only make promises you can keep
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `0-promise.js`

**Execution:**
```bash
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
true
bob@dylan:~$
```

### 1. Don't make a promise...if you know you can't keep it
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `1-promise.js`

**Execution:**
```bash
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$
```
---
### 2. Catch me if you can!
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `2-then.js`

**Execution:**
```bash
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
Got a response from the API
bob@dylan:~$
```
---

### 3. Handle multiple successful promises
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `3-all.js`

**Execution:**
```bash
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
photo-profile-1 Guillaume Salva
bob@dylan:~$
```
---
### 4. Simple promise
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `4-user-promise.js`

**Execution:**
```bash
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
Promise { { firstName

: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$
```
---
### 5. Reject the promises
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `5-photo-reject.js`

**Execution:**
```bash
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$
```
---
### 6. Handle multiple promises
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `6-final-user.js`

**Execution:**
```bash
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
Promise { <pending> }
bob@dylan:~$
```
---
### 7. Load balancer
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `7-load_balancer.js`

**Execution:**
```bash
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$
```
---

### 8. Throw error / try catch
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `8-try.js`

**Execution:**
```bash
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....
bob@dylan:~$
```
---
### 9. Throw an error
**Repo:**
- **GitHub repository:** `alx-frontend-javascript`
- **Directory:** `0x01-ES6_promise`
- **File:** `9-try.js`

**Execution:**
```bash
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$
```

