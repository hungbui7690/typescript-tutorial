/*
  Classes - Instance Property / Default Property
  - The checkedOut property in Book class is an instance property (or member variable). 
    > It's not specifically set in the constructor, so it could also be referred to as a default property or a property with a default value.


*/

class Book {
  title: string
  author: string

  // Method 1
  // checkedOut: boolean = false // instance prop (or member var) > we don't need to put in in the constructor

  // Method 2
  checkedOut = false // 1.

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }
}

const deepWork = new Book('deep work ', 'cal newport')

deepWork.checkedOut = true
// deepWork.checkedOut = 'something else' // 2. though we don't set the type at 1. -> TS infers it for us (because we set default value), and won't allow us to change the type
