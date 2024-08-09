/*
  Type any - Example
  - in this example, we know why we need to worry about the type "any"


*/

// 1. no return type -> return type === any
function addThree(number: any) {
  let anotherNumber: number = 3
  return number + anotherNumber
}

const result = addThree(2)
const someValue = result // hover -> type = any

// 2. run time error
someValue.myMethod() // no error here (build time) -> but when we run, error appears (runtime)
