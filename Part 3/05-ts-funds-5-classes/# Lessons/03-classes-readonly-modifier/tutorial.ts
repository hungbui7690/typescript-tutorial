/*
  Classes - ReadOnly Modifier


*/

class Book {
  readonly title: string // readonly
  author: string
  checkedOut: boolean = false

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }
}

const deepWork = new Book('deep work ', 'cal newport')
// deepWork.title = 'something else' // readonly -> err
