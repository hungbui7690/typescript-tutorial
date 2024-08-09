/*
  Generics - Promise Example


*/

// 1. <Async> function must return Promise -> but we set the return type to be string -> err
// -> remove :string -> hover -> return type is Promise<string>
async function someFunc(): string {
  return 'Hello World'
}

// 2. A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.
async function someFuncX(): Promise<string> {
  return 'Hello World'
}
const result = someFunc()
console.log(result) // Promise { 'Hello World' }
