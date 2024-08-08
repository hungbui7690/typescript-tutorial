/*
  Inheritance
  - A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.

  - The class which inherits properties and methods is called the child/sub class. The class whose properties and methods are inherited is known as the parent class. These names come from the nature that children inherit genes from their parents.

  - Inheritance allows you to reuse the functionality of an existing class without rewriting it.

  - JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like ES6.


*/

// 1. Suppose you have the following Person class:
class Person {
  constructor(private firstName: string, private lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`
  }
}

// 2. To inherit a class, you use the <extends> keyword. For example the following Employee class inherits the Person class:
class Employee extends Person {
  //...
}
// In this example, the Employee is a child class and the Person is the parent class.
