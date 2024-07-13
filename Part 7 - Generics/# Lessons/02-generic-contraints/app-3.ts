/*
  Generic Constraints

*/

// Using type parameters in generic constraints

// TypeScript allows you to declare a type parameter constrained by another type parameter.
// The following prop() function accepts an object and a property name. It returns the value of the property.
function prop<T, K>(obj: T, key: K) {
  return obj[key]
} // Type 'K' cannot be used to index type 'T'.

// To fix this error, you add a constraint to K to ensure that it is a key of T as follows:
function propX<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// If you pass into the prop function a property name that exists on the obj, the compiler won’t complain. For example:
let str = propX({ name: 'John' }, 'name')
console.log(str) // John

// However, if you pass a key that doesn’t exist on the first argument, the compiler will issue an error:
str = propX({ name: 'John' }, 'age') // TS2345: Argument of type '"age"' is not assignable to parameter of type '"name"'.

/*
  Summary

    Use extends keyword to constrain the type parameter to a specific type.
    Use extends keyof to constrain a type that is the property of another object.
*/
