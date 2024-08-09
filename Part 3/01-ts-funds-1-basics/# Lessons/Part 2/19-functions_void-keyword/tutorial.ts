/*
  Functions - Void Keyword
  - In TypeScript, void is a special type that represents the absence of a value. 
  - When used as a function return type, void indicates that the function does not return a value.


*/

// :void -> no return
function logMessage(message: string): void {
  console.log(message)
}

logMessage('Hello, TypeScript!') // Hello, TypeScript!

/*
  - It's important to note that in TypeScript, a function that is declared with a void return type can still return a value. 
  - For example, the following code is valid TypeScript
*/
function log(message: string): void {
  console.log(message)
  return 'This value is ignored'
}

const x = log('Hello, TypeScript!') // Hello, TypeScript!
console.log(x)
