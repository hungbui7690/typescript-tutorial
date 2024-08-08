/*
  boolean
  - The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.


*/

// 1. In TypeScript, you can declare a boolean variable using the boolean keyword. For example:
let checked: boolean
checked = true

// after a while
// ..
checked = false

// 2. To manipulate boolean values, you use the boolean operators. TypeScript supports common boolean operators: && || !
// a. NOT operator
const pending: boolean = true
const notPending = !pending // false
console.log(notPending) // false

const hasError: boolean = false
const isCompleted: boolean = true

// b. AND operator
let result = isCompleted && hasError
console.log(result) // false

// c. OR operator
result = isCompleted || hasError
console.log(result) // true

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. Type annotations for boolean
// As seen in previous examples, you can use the boolean keyword to annotate the types for the boolean variables:
let completed: boolean = true

// However, TypeScript often infers types automatically, so type annotations may not be necessary:
let completedX = true

// Like a variable, you can annotate boolean parameters or return the type of a function using the boolean keyword:
function changeStatus(status: boolean): boolean {
  //...
  return true
}

/*
  Boolean Type
  - JavaScript has the "Boolean" type that refers to the non-primitive boxed object. The Boolean type has the letter B in uppercase, which is different from the boolean type.
  - It’s a good practice to avoid using the "Boolean" type.


  Summary
    TypeScript boolean type has two values true and false.
    Use the boolean keyword to declare boolean variables.
    Do not use Boolean type unless you have a good reason to do so.


*/
