/*
  Objects - Fundamentals
  - In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

*/

// semicolon between types annotation > it looks a bit clunky since right now > we need to retype the type annotation everytime we create a new object > but we will learn how to fix it later
let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2020,
}
car.brand = 'ford'
// car.color = 'blue'; // no 'color' prop >> err

////////////////////////
////////////////////////
let car1: { brand: string; year: number } = {
  brand: 'audi',
  year: 2021,
}
// let car2: { brand: string; year: number } = { brand: 'audi' }; // missing 'year' prop >> err

////////////////////////
////////////////////////
let book = {
  title: 'book',
  cost: 20,
}
let pen = {
  title: 'pen',
  cost: 5,
}

let notebook = { title: 'notebook' } // missing 'cost' property, but no err > since it does not have type annotation

////////////////////////
// array of objects
////////////////////////
let items: {
  readonly title: string
  cost?: number
}[] = [book, pen, notebook] // cost is optional >> ?:

// items[0].title = 'new book' // err > read-only property

////////////////////////
////////////////////////
let colors: string[] = ['red', 'green'] // array of strings
let steps: number[] = [1, 2, 3] // array of numbers
let people: {}[] = [{}] // *** array of objects
