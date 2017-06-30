// import {fname, lname} from './moduleB.js'
// console.log(`${fname} ${lname}`);

import {fname as f, lname as l, obj} from './moduleB.js'
obj.name="Changed";
console.log(obj.name);
console.log(`${f} ${l}`);