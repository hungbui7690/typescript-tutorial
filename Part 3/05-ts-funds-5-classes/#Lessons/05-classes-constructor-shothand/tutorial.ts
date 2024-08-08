/*
  Classes - Shorthand Syntax
  - In TypeScript, if you want to use the shorthand for creating and initializing class properties in the constructor, you need to use public, private, or protected access modifiers.

*/

//////////////////////////////
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

//////////////////////////////
// SHORTHAND
class Book {
  private checkedOut: boolean = false
  /* we can remove INSTANCE/MEMBER properties from here */

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
