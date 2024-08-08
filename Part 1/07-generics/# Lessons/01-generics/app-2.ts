/*
  Generics
  - allow you to use types as formal parameters.
  - allow you to write reusable and generalized forms of functions, classes, and interfaces


****************************

  # Using any type


*/

// One option to address this issue is to set the type of the array argument as any[]. By doing this, you need to write one function that works with an array of any type.
function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

// The getRandomAnyElement() works with an array of the any type including number, string, object, and so on:
let numbers = [1, 5, 7, 4, 2, 9]
let colors = ['red', 'green', 'blue']

console.log(getRandomAnyElement(numbers))
console.log(getRandomAnyElement(colors))

// This option works fine but has a drawback: it doesn’t allow you to enforce the type of the returned element. In other words, it isn’t type-safe.
// A better solution to avoid code duplication while preserving the type is to use generics.
