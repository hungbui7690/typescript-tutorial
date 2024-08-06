/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces

*/

// Suppose you need to develop a function that returns a random number in an array of numbers.
// The following getRandomNumberElement() function takes an array of numbers as its parameter and returns a random element from the array:
function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/*
  To get a random element of an array, you need to:

    Find the random index first.
    Get the random element based on the random index.

  To find the random index of an array, we use the Math.random() that returns a random number between 0 and 1, multiplies by the length of the array, and applies the Math.floor() on the result.

*/

// The following shows how to use the getRandomNumberElement() function:
let numbers = [1, 5, 7, 4, 2, 9]
console.log(getRandomNumberElement(numbers))

// Assuming that you need to get a random element from an array of strings. This time, you may come up with a new function:
function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

// The logic of the getRandomStringElement() function is the same as in the getRandomNumberElement() function.
let colors = ['red', 'green', 'blue']
console.log(getRandomStringElement(colors))

// *** Later you may need to get a random element in an array of objects. Creating a new function every time you want to get a random element from a new array type is not scalable.
