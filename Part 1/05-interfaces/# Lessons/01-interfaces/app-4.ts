/*
  Interfaces


*/

// Function types
// 1. In addition to describing an object with properties, interfaces also allow you to describe function types.
// To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types. For example:
interface StringFormat {
  (str: string, isUpper: boolean): string
}

// Now, you can use this function-type interface.
// The following illustrates how to declare a variable of a function type and assign it a function value of the same type:
let format: StringFormat

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
}

console.log(format('hi', true)) // HI

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. Note that the parameter names don’t need to match the function signature. The following example is equivalent to the above example:
let formatX: StringFormat

formatX = function (src: string, upper: boolean) {
  return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase()
}

console.log(formatX('hi', true))

// 3. The StringFormat interface ensures that all the callers of the function that implements it pass in the required arguments: a string and a boolean.
// The following code also works perfectly fine even though the lowerCase is assigned to a function that doesn’t have the second argument:
let lowerCase: StringFormat
lowerCase = function (str: string) {
  return str.toLowerCase()
}

console.log(lowerCase('Hi', false))

// Notice that the second argument is passed when the lowerCase() function is called.
