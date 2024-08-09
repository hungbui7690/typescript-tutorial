/*
  Generics - Create Array


***************************
  - const arr = Array(3).fill({}) -> [{}, {}, {}]
    [1, 2, 3].fill(4, 3, 5)   -> [1, 2, 3]
    [1, 2, 3].fill(4, 1)      -> [1, 4, 4]


*/

// 1. Generate an array of strings (hard code)
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = []
  result = Array(length).fill(value)
  return result
}
console.log(generateStringArray(3, 'hello')) // ["hello", "hello", "hello"]

// 2. Generic
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  result = Array(length).fill(value)
  return result
}

let arrayStrings = createArray<string>(3, 'hello')
console.log(arrayStrings) // ["hello", "hello", "hello"]

let arrayNumbers = createArray<number>(4, 100)
console.log(arrayNumbers) // [100, 100, 100, 100]
