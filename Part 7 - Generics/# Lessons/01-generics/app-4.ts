/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces

*/

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

// Calling a generic function
// The following shows how to use the getRandomElement() with an array of numbers:
let numbers = [1, 5, 7, 4, 2, 9]
let randomEle = getRandomElement<number>(numbers)
console.log(randomEle)

// This example explicitly passes number as the T type into the getRandomElement() function.

// In practice, you’ll use type inference for the argument. It means that you let the TypeScript compiler set the value of T automatically based on the type of argument that you pass into, like this:
let numbersX = [1, 5, 7, 4, 2, 9]
let randomEleX = getRandomElement(numbersX)
console.log(randomEleX)

// In this example, we didn’t pass the number type to the getRandomElement() explicitly. The compiler looks at the argument and sets T to its type.
// Now, the getRandomElement() function is also type-safe. For example, if you assign the returned value to a string variable, you’ll get an error:
let numbersZ = [1, 5, 7, 4, 2, 9]
let returnElemZ: string
returnElemZ = getRandomElement(numbersZ) // TS2322: Type 'number' is not assignable to type 'string'.
