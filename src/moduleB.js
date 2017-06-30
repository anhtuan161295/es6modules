// Export normal
// export let fname = "Tedu";
// export let lname = "Online Channel"

// Export variable
// let fname = "Tedu";
// let lname = "Online Channel"
// let obj = {
//     name: "123"
// }
// export {fname,lname,obj}

// Export default: export without variable name
// let name = "Tedu";
// export default name;

// Export function and class
export function greet(message) {
    console.log(message);
}
export class Employee {
    constructor() {
        console.log('Employee constructor');
    }
    greeting(message) {
        console.log(message);
    }
}