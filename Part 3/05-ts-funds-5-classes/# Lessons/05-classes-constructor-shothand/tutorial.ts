/*
  Classes - Shorthand Syntax
  - In TypeScript, if you want to use the shorthand for creating and initializing class properties in the constructor, you need to use public, private, or protected access modifiers.


*/

// LONG WAY
// class Book {
//   public readonly title: string
//   public author: string
//   private checkedOut: boolean = false

//   constructor(title: string, author: string) {
//     this.title = title
//     this.author = author
//   }
// }

// SHORT WAY
class Book {
  // 1. we can remove instance/member properties from here -> just keep default prop here
  private checkedOut: boolean = false

  // 2. apply short-hand
  constructor(
    readonly title: string,
    public author: string,
    private page: number
  ) {}

  public getPage() {
    return this.page
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport', 121)
console.log(deepWork.getPage()) // 121
