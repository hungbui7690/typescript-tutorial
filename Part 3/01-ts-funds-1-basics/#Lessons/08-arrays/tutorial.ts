/*
  Arrays
  - In TypeScript, arrays are used to store multiple values in a single variable. 
    > You can define the type of elements that an array can hold using type annotations.

*/

// let randomValues: [] = ['hello'] // *** just allow empty array

let price: number[] = [100, 20, 0] // array of number
// price.push('hello') // err

let fruits: string[] = ['apple', 'orange'] // array of string
let emptyValues: number[] = [] // we are allows to have empty array here
let names = ['peter', 'susan', 1] // *** hover >> (string|number)[]
let array: (string | boolean)[] = ['apple', true, 'orange', false] // array of string or boolean
