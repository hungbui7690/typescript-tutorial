/*
  Type Assertions
  - allows you to assign a new type to a value.
  - instruct the TypeScript compiler to treat a value as a specified type. 
  - use the "as" keyword or "<>" operator for type assertions.

*/

// Type assertion result

// If a type assertion fails, different kinds of errors will occur depending on how you use type assertion and actual runtime types.

// 1) Compile-time errors
// When you try to perform a type assertion between incompatible types, the TypeScript compiler may give you an error or warning. For example:
let price = '9.99'
let netPrice = price as number // error:  Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// 2) Runtime errors
// When you perform a type assertion of an object to a type that doesn’t match its structure and attempt to access a property that doesn’t exist, you’ll get a runtime error. For example:
let el = document.querySelector('#name') as HTMLInputElement
console.log(el.value.length) // TypeError: Cannot read properties of undefined (reading 'length')
// In this example, if the element with id #name is not an input element, the input.value will be undefined at runtime. Hence, accessing the length property of the value will cause a runtime error

// 3) Unexpected behaviors
// If a type assertion is incorrect, you may not get a compile-time or runtime error but might experience unexpected behaviors later in your code. This can make debugging challenging because the error might not occur at the point of the type assertion.

/*
  Summary

      Type assertion allows you to assign a new type to a value.
      Use the as keyword or <> operator to perform a type assertion.
*/
