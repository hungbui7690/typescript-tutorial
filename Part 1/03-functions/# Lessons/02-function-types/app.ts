/*
  Function Types
  - allow you to define types for functions.
  - A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:

      (parameter: type, parameter:type,...) => type


*/

// 1. Declare a variable that has a function type that accepts two numbers and returns a number:
let add: (x: number, y: number) => number
/*
  - In this example:
    + The function type accepts two arguments: x and y with the type number.
    + The type of the return value is number that follows the fat arrow (=>) appeared between parameters and return type.

  ⚾ Note that the parameter names (x and y) are just for readability purposes. As long as the types of parameters match, it is a valid type for the function.

  - Once annotating a variable with a function type, you can assign the function with the same type to the variable.
  - TypeScript compiler will match the number of parameters with their types and the return type.
*/

// The following example shows how to assign a function to the add variable:
add = function (x: number, y: number) {
  return x + y
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. Also, you can declare a variable and assign a function to a variable like this:
let addX: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y
}
/*
  In this syntax:
  - add is a variable.
  - (a: number, b: number) => number is the function type.
  - And the rest is the function assigned to the add variable.

  - If you assign other functions whose type doesn’t match the add variable, TypeScript will issue an error:
*/
addX = function (x: string, y: string): number {
  return x.concat(y).length
}
// In this example, we reassigned a function, whose type doesn’t match, to the add function variable.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. Inferring function types
// TypeScript compiler can figure out the function type when you have the type on one side of the equation. This form of type inference is called contextual typing. For example:
function addZ(x, y) {
  return x + y
}
let result = addZ(10, 20) // hover on addZ
// In this example, the add function will take the type (x: number, y:number) => number.
// By using the type inference, you can significantly reduce the amount of code with annotations.
// ❌ We don't see (x: number, y:number) => number -> but (x: any, y: any) => any
