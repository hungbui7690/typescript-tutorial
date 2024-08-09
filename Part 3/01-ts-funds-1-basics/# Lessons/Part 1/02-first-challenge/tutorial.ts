/*
  First Challenge


*/

// 1. Create a variable of type string and try to invoke a string method on it.
let firstName: string = 'Duncan'
firstName.toUpperCase()

// 2. Create a variable of type number and try to perform a mathematical operation on it.
let age: number = 10
age += 1

// 3. Create a variable of type boolean and try to perform a logical operation on it.
let isAdult: boolean = age >= 18
console.log(isAdult)

// 4. Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
firstName = 11
age = '22'
