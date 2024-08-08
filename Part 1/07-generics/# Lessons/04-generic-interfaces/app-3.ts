/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.


***************************

  # Generic interfaces that describe methods


*/

// 1. The following declares a generic interface with two methods add() and remove():
interface Collection<T> {
  add(o: T): void
  remove(o: T): void
}

// 2. And this List<T> generic class implements the Collection<T> generic interface:
class List<T> implements Collection<T> {
  private items: T[] = []

  add(o: T): void {
    this.items.push(o)
  }
  remove(o: T): void {
    let index = this.items.indexOf(o)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  }
}

// 3. From the List<T> class, you can create a list of values of various types e.g., numbers, or strings.
// For example, the following shows how to use the List<T> generic class to create a list of numbers:
const listNumbers = new List<number>()
const listNames = new List<string>()

for (let i = 0; i < 10; i++) {
  listNumbers.add(i)
}
