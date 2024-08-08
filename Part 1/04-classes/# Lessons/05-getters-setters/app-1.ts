/*
  Getters and Setters


*/

// 1. The following shows a simple Person class with three properties: age, firstName, and lastName:
class Person {
  public age: number
  public firstName: string
  public lastName: string

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age
    this.firstName = firstName
    this.lastName = lastName
  }
}

// 2. To access any property of the Person class, you can do this:
let person = new Person(22, 'John', 'Doe')
person.age = 23

// 3. Suppose that you assign a value that comes from user input to the age property:
const inputAge = 33
person.age = inputAge

// 4. The inputAge can be any number. To ensure the validity of the age, you can carry a check before the assignment as follows:
if (inputAge > 0 && inputAge < 200) {
  person.age = inputAge
}

/*
  Using this check all over places is redundant and tedious.

  To avoid repeating the check, you can use setters and getters. The getters and setters allow you to control access to the properties of a class.

  For each property:

    A getter method returns the value of the property’s value. A getter is also called an accessor.
    A setter method updates the property’s value. A setter is also known as a mutator.

*/
