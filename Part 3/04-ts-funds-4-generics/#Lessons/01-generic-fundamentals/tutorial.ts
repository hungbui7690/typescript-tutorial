/*
  Generics - Fundamentals
  - Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.
  - In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.
    
*/

// In TypeScript, you can declare an array using two syntaxes:
let array1: string[] = ['Apple', 'Banana', 'Mango'] // *** right click >> type definition >> pic
let array2: number[] = [1, 2, 3]
let array3: boolean[] = [true, false, true]

// *** generics
let array_1: Array<string> = ['Apple', 'Banana', 'Mango']
let array_2: Array<number> = [1, 2, 3]
let array_3: Array<boolean> = [true, false, true]
