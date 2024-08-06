/*
  What is Type Annotation in TypeScript
  - TypeScript uses type annotations to specify explicit types for identifiers such as variables, functions, objects, etc.

  - TypeScript uses the syntax : type after an identifier as the type annotation, which type can be any valid type.

  - Once an identifier is annotated with a type, it can be used as that type only. If the identifier is used as a different type, the TypeScript compiler will issue an error.

*/

// The type annotation comes after the variable or constant name and is preceded by a colon (:).
// The following example uses number annotation for a variable:
let counter: number

// After this, you can only assign a number to the counter variable:
counter = 1

// If you assign a string to the counter variable, you’ll get an error:
// counter = 'Hello' // compile error

// You can both use a type annotation for a variable and initialize it in a single statement like this:
let counterX: number = 1

// In this example, we use the number annotation for the counter variable and initialize it to one.
// The following shows other examples of primitive type annotations:
let firstName: string = 'John'
let age: number = 25
let active: boolean = true
// In this example, the firstName variable gets the string type, the age variable gets the number type, and the active variable gets the boolean type.
