/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces

*/

// TypeScript generics come to the rescue

// The following shows a generic function that returns the random element from an array of type T:
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/*
  - This function uses type variable T. The T allows you to capture the type provided when calling the function. Additionally, the function uses the T type variable as its return type.
  
  - This getRandomElement() function is generic because it can work with any data type including string, number, object,…
  
  - By convention, we use the letter T as the type variable. However, you can freely use other letters such as A, B C, …
*/
