/*
  Type Assertion
  - Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. 
    -> This is especially useful when we know more about the type of a variable than TypeScript does.


****************************

  <as> -> type assertion


*/

// Case 1: for ex, in some case, when we work with library, we get someValue with the type of "any" -> but we know that it is string
let someValue: any = 'This is a string' // type = any

// Because we know the type of 'someValue' is string -> we use "type assertion" to treat 'someValue' as a string
let strLength: number = (someValue as string).length
console.log(strLength) // 16
