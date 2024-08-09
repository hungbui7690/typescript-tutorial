/*
  Interface vs Type Alias
  - A type alias is a way to give a name to a type. 
    -> It can represent primitive types, union types, intersection types, tuples, and any other types. 
    -> Once defined, the alias can be used anywhere in place of the actual type.


*****************************

  - Type Alias -> Primitive / Union / Intersection / Tuples...
  - Interfaces -> shape of an object


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 1. Type Alias
// type Person = {
//   name: string
//   age: number
// }

// let john: Person = { name: 'John', age: 30 }

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. Interface: An interface is a way to define a contract for a certain structure of an object.
// interface Person {
//   name: string
//   age: number
// }

// let john: Person = { name: 'John', age: 30 }

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. Key Differences: [Type aliases] can represent [primitive types], [union types], [intersection types], [tuples], etc., while <interfaces> are primarily used to represent the <shape of an object>.

// type Score = number // Type Alias for a Primitive Type
// type NumberOrString = number | string // Type Alias for Union Type
// type Direction = 'up' | 'down' | 'left' | 'right' // Type Alias for Literal Types

// let gameScore: Score = 100 // Using the type aliases
// let move: Direction = 'up'

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// 4. Interfaces can be merged using declaration merging.
// -> If you define an interface with the same name more than once, TypeScript will merge their definitions.
// -> Type aliases can't be merged in this way.
// -> Interfaces can be implemented by classes, while type aliases cannot.
// -> Type aliases can use computed properties, while interfaces cannot.

interface Person {
  name: string
  greet(): void
}

class Employee implements Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

let john = new Employee('John')
john.greet() // Hello, my name is John

// \\\\\\\\\\\\\\\\\\\\\\\\\\
// Computed Property: we can ONLY do this with TYPE ALIAS
const propName = 'age'

type Animal = {
  [propName]: number
}

let tiger: Animal = { [propName]: 5 }
