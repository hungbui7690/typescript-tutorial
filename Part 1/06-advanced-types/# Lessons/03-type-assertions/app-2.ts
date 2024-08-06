/*
  Type Assertions
  - allows you to assign a new type to a value.
  - instruct the TypeScript compiler to treat a value as a specified type. 
  - use the "as" keyword or "<>" operator for type assertions.

*/

// Type assertion using the <> operator

// Besides the as keyword, you can use the <> operator to perform a type assertion. For example:
let input1 = <HTMLInputElement>document.querySelector('input[type="text"]') // Method 1
let input2 = document.querySelector<HTMLInputElement>('input[type="text"]') // Method 2

console.log(input1.value)

/*
  The syntax for type assertion using the <> operator is as follows:

    let a: typeA;
    let b = <typeB>a
*/
