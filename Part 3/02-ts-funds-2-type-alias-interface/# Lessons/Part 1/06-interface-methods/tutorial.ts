/*
  Interface - Methods


*/

interface Book {
  readonly isbn: number
  title: string
  author: string
  genre?: string

  // methods
  printAuthor(): void
  printTitle(message: string): string // has param + return type
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title} ${message}`
  },
}

deepWork.printAuthor() // Cal Newport

const result = deepWork.printTitle('is an awesome book')
console.log(result) // Deep Work is an awesome book
