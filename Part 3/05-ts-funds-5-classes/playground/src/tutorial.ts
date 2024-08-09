/*
  Classes - Implement Interface
  - an interface is a way to define a contract for a certain structure of an object. 
    -> this contract can then be used by a class to ensure it adheres to the structure defined by the interface.
  - When a class implements an interface, it is essentially promising that it will provide all the properties and methods defined in the interface. 
    -> If it does not, TypeScript will throw an error at compile time.


***************************

  # interface is the structure/shape of the class


*/

// 1. because we have class of Person below -> need to add "I"
interface IPerson {
  name: string
  age: number
  greet(): void
}

// 2. use "implements" keyword
class Person implements IPerson {
  constructor(public name: string, public age: number) {} // shorthand

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
}

const hipster = new Person('shakeAndBake', 100)
hipster.greet()
