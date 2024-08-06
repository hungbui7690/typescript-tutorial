/*
  Generic Constraints

*/

// In order to denote the constraint, you use the extends keyword. For example:
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

// Because the merge() function is now constrained, it will no longer work with all types. Instead, it works with the object type only.
// The following will result in an error:
let person = merge({ name: 'John' }, 25) // Argument of type '25' is not assignable to parameter of type 'object'.
