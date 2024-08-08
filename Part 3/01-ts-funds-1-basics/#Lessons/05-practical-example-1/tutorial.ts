/*
  Practical Example

*/

const books = ['1984', 'Brave New World', 'Fahrenheit 451']

// let foundBook // its type is 'any' by default

/////////////////////////////////
// ***
/////////////////////////////////
let foundBook: string // if we set it to string > error at the console log > since if we cannot find the book in the array > foundBook will be undefined

for (let book of books) {
  if (book === '1984') {
    foundBook = book
    break
  }
}

console.log(foundBook)
