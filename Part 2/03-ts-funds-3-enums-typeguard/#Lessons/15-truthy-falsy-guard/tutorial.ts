/*
  Challenge - "Truthy"/"Falsy" guard
  - In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value


  - Define a function named "printLength" that takes one parameter str which can be of type string, null, or undefined.
  - Inside the function, use an if statement to check if str is truthy. 
    > In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
    > All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
  - If str is truthy, it means it's a string (since null and undefined are falsy). 
    > In this case, log the length of str using the length property of the string.
  - If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

  - Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

*/

function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string >> because `null` and `undefined` are falsy values.
    console.log(str.length)
  } else {
    console.log('No string provided')
  }
}

printLength('Hello') // Outputs: 5
printLength(null) // Outputs: No string provided
printLength(undefined) // Outputs: No string provided
