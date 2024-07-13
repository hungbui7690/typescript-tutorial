/*
  Interfaces
  - define the contracts within your code. They also provide explicit names for type checking.

*/

// Class Types

// If you have worked with Java or C#, you can find that the main use of the interface is to define a contract between classes.
// For example, the following Json interface can be implemented by any class:
interface Json {
  toJson(): string
}

// The following declares a class that implements the Json interface:
class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this)
  }
}

// In the Person class, we implemented the toJson() method of the Json interface.
// The following example shows how to use the Person class:
let person = new Person('John', 'Doe')
console.log(person.toJson()) // {"firstName":"John","lastName":"Doe"}

/*
  Summary

    - TypeScript interfaces define contracts in your code and provide explicit names for type-checking.
    - Interfaces may have optional properties or read-only properties.
    - Interfaces can be used as function types.
    - Interfaces are typically used as class types that make a contract between unrelated classes.
*/
