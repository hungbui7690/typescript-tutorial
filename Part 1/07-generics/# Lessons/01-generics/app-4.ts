/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces


*******************************

  # Calling a generic function


*/

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1. The following shows how to use the getRandomElement() with an array of numbers:
let numbers = [1, 5, 7, 4, 2, 9]
let randomElement = getRandomElement<number>(numbers)
console.log(randomElement)
// This example explicitly passes number as the T type into the getRandomElement() function.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. In practice, you’ll use type inference for the argument. It means that you let the TypeScript compiler set the value of T automatically based on the type of argument that you pass into, like this:
let randomElementX = getRandomElement(numbers)
console.log(randomElementX)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. In this example, we didn’t pass the number type to the getRandomElement() explicitly. The compiler looks at the argument and sets T to its type.
// Now, the getRandomElement() function is also type-safe. For example, if you assign the returned value to a string variable, you’ll get an error:
let returnElement: string
returnElement = getRandomElement(numbers) // TS2322: Type 'number' is not assignable to type 'string'.
