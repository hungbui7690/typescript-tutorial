/*
  Generic Constraints

*/

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

// The merge() is a generic function that merges two objects. For example:
let person = merge({ name: 'John' }, { age: 25 })
console.log(person) // { name: 'John', age: 25 }

// It works perfectly fine.
// The merge() function expects two objects. However, it doesn’t prevent you from passing a non-object like this:
let personX = merge({ name: 'John' }, 25)
console.log(personX) // { name: 'John' }

/*
  TypeScript doesn’t issue any errors.

  Instead of working with all types, you may want to add a constraint to the merge() function so that it works with objects only.

  To do this, you need to list out the requirement as a constraint on what U and V types can be.
*/
