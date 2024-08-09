/*
  Practical Example
  - The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. 
    -> This is a good practice in TypeScript because it helps prevent bugs related to undefined values.


*/

const books = ['1984', 'Brave New World', 'Fahrenheit 451']

let foundBook: string | undefined // 1. we must use union here

for (let book of books) {
  if (book === '1983') {
    foundBook = book
    foundBook = foundBook.toUpperCase() // 2. no err here, because if the book is found -> then it is string, not undefined -> and we can use toUpperCase()
    break
  }
}

console.log(foundBook?.length) // 3. we must use optional chaining here to use the properties & string methods since sometimes it's undefined
