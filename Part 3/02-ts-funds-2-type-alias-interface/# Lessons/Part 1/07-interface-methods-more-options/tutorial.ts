/*
  Interface - Methods (more options)
  - It's generally a good practice to match the structure of the interface and the implementing object or class as closely as possible. 
    -> This makes the code easier to understand and maintain. 
    -> So, if printAuthor is defined as a method in the Book interface, it would be more consistent to implement it as a method in the deepWork object.


******************************

  - The above text means that if we use arrow function in Interface -> then, in the real object, we need to use arrow function as well


*/

interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string

  // method
  printAuthor(): void
  printTitle(message: string): string
  printSomething: (someValue: number) => number // arrow
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',

  // Method 1:
  printAuthor() {
    console.log(this.author)
  },

  // Method 2: Arrow Function
  // printAuthor: () => {
  //   console.log(deepWork.author) // NOT this.author
  // },

  printTitle(message) {
    return `${this.title} ${message}`
  },

  // # 1st option: good old function keyword
  // printSomething: function (someValue) {
  //   return someValue
  // },

  // # 2nd option: arrow function -> "this" gotcha -> don't use this when using arrow function
  // printSomething: (someValue) => {
  //   // "this" gotcha
  //   console.log(deepWork.author) // NOT "this.author" -> but "deepWork.author"
  //   return someValue
  // },

  // # 3rd option: omit function keyword (ES6)
  printSomething(someValue) {
    return someValue
  },
}

console.log(deepWork.printSomething(34)) // 34
deepWork.printAuthor() // Cal Newport

const result = deepWork.printTitle('is an awesome book')
console.log(result) // Deep Work is an awesome book
