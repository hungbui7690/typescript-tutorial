/*
  Generics - Promise Example

*/

/////////////////////////////
// ASYNC FUNCTION MUST RETURN PROMISE > but we set the return type to be string > err
// hover > return type is Promise<T>
// async function someFunc(): string {
//   return 'Hello World'
// }

/////////////////////////////
// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.
async function someFunc(): Promise<string> {
  return 'Hello World'
}
const result = someFunc()
