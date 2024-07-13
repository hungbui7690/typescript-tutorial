/*
  Access Modifiers
  - private, protected, and public.

  ** Note that TypeScript controls the access logically during compilation time, not at runtime.

*/

// The private modifier
// The private modifier limits the visibility to the same class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compiled time.
// The following example shows how to use the private modifier to the snn, firstName, and lastName properties of the person class:
class Person1 {
  private ssn: string
  private firstName: string
  private lastName: string

  // ...
}

// Once the private property is in place, you can access the ssn property in the constructor or methods of the Person class. For example:
class Person {
  private ssn: string
  private firstName: string
  private lastName: string

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// The following attempts to access the ssn property outside the class:
let person = new Person('153-07-3130', 'John', 'Doe')
console.log(person.ssn) // error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
