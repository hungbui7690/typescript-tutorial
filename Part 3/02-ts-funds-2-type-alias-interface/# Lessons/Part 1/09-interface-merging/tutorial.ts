/*
  Interface - Merging
  - Merging (reopening) an interface in TS is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.
    -> add new property to Interface

*/

// 1. Interfaces
interface Person {
  name: string
  getDetails(): string
}

interface DogOwner {
  dogName: string
  getDogDetails(): string
}

// Merging the interface: we have "interface Person" above -> if here we create "interface Person" one more time -> it will be merged to the previous one
interface Person {
  age: number // add "age property" to interface Person -> now, it has name, age, getDetails()
}

// 2. Usage: now it has 2 props + 1 method
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
}

console.log(person)
console.log(person.getDetails())
