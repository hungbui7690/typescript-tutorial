/*
  Classes - Getters and Setters
  - Getters and setters are special methods in a class that allow you to control how a property is accessed and modified.
    -> They are [USED LIKE PROPERTIES], NOT METHOD
      # so we don't use parentheses to call them.


*/

class Book {
  private checkedOut: boolean = false
  constructor(public readonly title: string, public author: string) {}

  // # setter
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut
  }

  get info() {
    return `${this.title} by ${this.author}`
  }
  get checkOut() {
    return this.checkedOut
  }
  public get someInfo() {
    this.checkOut = true
    return `${this.title} by ${this.author}`
  }
}

const deepWork = new Book('deep work', 'cal newport')
console.log('INFO: ', deepWork.info) // getter -> call as properties

// deepWork.checkOut = true; // cannot set since we don't have setter -> and this is also private property
console.log('someInfo: ', deepWork.someInfo)
console.log('checkOut: ', deepWork.checkOut)
