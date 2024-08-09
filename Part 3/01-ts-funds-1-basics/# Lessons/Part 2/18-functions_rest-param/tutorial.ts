/*
  Functions - Rest Param
  - In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. 
    -> These arguments are collected into an array, which can be accessed within the function.


*/

// ...numbers: number[] -> rest params
function sum(message: string, ...numbers: number[]): string {
  // Ts knows that numbers is an array -> can use .map()
  const doubled = numbers.map((num) => num * 2)
  console.log(doubled)

  // Ts knows that numbers is an array -> can use .reduce()
  let total = numbers.reduce((previous, current) => previous + current, 0)

  return `${message} ${total}`
}

let result = sum('The total is:', 1, 2, 3, 4, 5) // "The total is: 15"
