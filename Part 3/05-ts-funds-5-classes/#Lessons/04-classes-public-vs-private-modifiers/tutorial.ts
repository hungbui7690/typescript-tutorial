/*
  Classes - Private and Public Modifiers
  - to control that we can modify from the outside

*/

class Book {
  public readonly title: string // can combine > public readonly
  author: string // no "public modifier" here > but it's still public
  private checkedOut: boolean = false // # private

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  // public is "default behavior" when there's no keyword
  checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus() // (2) private can be accessed within class
  }
  public isCheckedOut() {
    return this.checkedOut
  }

  // # private > (1)
  private toggleCheckedOutStatus() {
    return !this.checkedOut
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport')
// deepWork. // # cannot see "checkout" prop (private) > just can see title + author

deepWork.checkOut() // public method
console.log(deepWork.isCheckedOut()) // true

// deepWork.toggleCheckedOutStatus() // err > Property 'toggleCheckedOutStatus' is private and only accessible within class 'Book'.

console.log(deepWork) // # from here, we still can see the "checkout" property
