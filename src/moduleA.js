// Import normal
// import {fname, lname} from './moduleB.js'
// console.log(`${fname} ${lname}`);

// Import with alias
// import {fname as f, lname as l, obj} from './moduleB.js'
// obj.name="Changed";
// console.log(obj.name);
// console.log(`${f} ${l}`);

// Import default: use default as a variable
// import {default as name} from './moduleB.js'
// console.log(name);

// Import function and class
import {greet, Employee} from './moduleB.js'
greet('Tedu');
let emp = new Employee();
emp.greeting('Welcome to Tedu');