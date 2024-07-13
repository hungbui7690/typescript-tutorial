/*
  Type Inference


*/

// When you declare a variable, you can use a type annotation to explicitly specify a type for it. For example:
let counter: number

// However, if you initialize the counter variable with a number, TypeScript will infer the type the counter to be number. For example:
let counterX = 0

// It is equivalent to the following statement:
let counterY: number = 0

// Likewise, when you assign a function parameter a value, TypeScript infers the type of the parameter to the type of the default value. For example:
function setCounter(max = 100) {
  // ...
}

// In this example, TypeScript infers the type of the max parameter to be number.
// Similarly, TypeScript infers the following return type of the increment() function as number:
function increment(counter: number) {
  return counter++
}

// It is the same as:
function incrementX(counter: number): number {
  return counter++
}