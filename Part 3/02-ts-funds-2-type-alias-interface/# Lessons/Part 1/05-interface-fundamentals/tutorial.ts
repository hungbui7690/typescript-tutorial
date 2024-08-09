/*
  Interface - Fundamentals
  - allow to setup shape for objects (only objects)
  - this is similar to type alias 
    -> in programming, there are multi way to achieve the same result
    -> use type alias or interface depends on each programmer 


*/

// 1. create interface
interface Book {
  readonly isbn: number // read-only
  title: string
  author: string
  genre?: string // optional
}

// 2. create object
const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
}

// 3. test
deepWork.title = 'New Title' // allowed
// deepWork.isbn = 654321 // not allowed -> readonly
