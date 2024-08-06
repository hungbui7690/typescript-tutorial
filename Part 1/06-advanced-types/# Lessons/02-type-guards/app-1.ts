/*
  Type Guards
  - allow you to narrow down the type of a variable within a conditional block.

*/

// typeof

// Let’s take a look at the following example:
type alphanumeric = string | number

function add(a: alphanumeric, b: alphanumeric) {
  // In this example, TypeScript knows the usage of the typeof operator in the conditional blocks. Inside the following if block, TypeScript realizes that a and b are numbers.
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  // Similarly, in the following if block, TypeScript treats a and b as strings, therefore, you can concatenate them into one:
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b)
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.'
  )
}

/*
  How it works:

    - First, define the alphanumeric type that can hold either a string or a number.
    - Next, declare a function that adds two variables a and b with the type of alphanumeric.
    - Then, check if both types of arguments are numbers using the typeof operator. If yes, then calculate the sum of arguments using the + operator.
    - After that, check if both types of arguments are strings using the typeof operator. If yes, then concatenate two arguments.
    - Finally, throw an error if arguments are neither numbers nor strings.
*/
