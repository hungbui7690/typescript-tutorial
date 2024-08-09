/*
  Arrays
  - In TypeScript, arrays are used to store multiple values in a single variable. 
    -> You can define the type of elements that an array can hold using type annotations.


*/

// 1. Just allow empty array
// let randomValues: [] = ['hello']

// 2. Array of number
let price: number[] = [100, 20, 0]
// price.push('hello') // err

// 3. More Examples
let fruits: string[] = ['apple', 'orange'] // array of string
let emptyValues: number[] = [] // allows to have empty array here
let names = ['peter', 'susan', 1] // type inference -> (string|number)[]
let array: (string | boolean)[] = ['apple', true, 'orange', false] // array of string or boolean
