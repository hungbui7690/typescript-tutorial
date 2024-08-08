/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces


***************************

  # Generic functions with multiple types


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1. The following illustrates how to develop a generic function with two type variables U and V:
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}
/*
  - The merge() function merges two objects with the type U and V. It combines the properties of the two objects into a single object.
  - Type inference infers the returned value of the merge() function as an intersection type of U and V, which is U & V
*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. The following illustrates how to use the merge() function that merges two objects:
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' })
console.log(result) // { name: 'John', jobTitle: 'Frontend Developer' }

/*
  Benefits of TypeScript generics
  - The following are the benefits of TypeScript generics:
    + Leverage type checks at the compile time.
    + Eliminate type castings.
    + Allow you to implement generic algorithms.


*************************

  Summary
  - Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.


*/
