/*
  Interface - Extend
  - Merging -> reopening
  - Extending -> inheritance


***************************

  - Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. 
    -> You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.


*/

// 1.
interface Person {
  name: string
  age: number
  getDetails(): string
}

interface DogOwner {
  dogName: string
  getDogDetails(): string
}

// 2. Extending the interface -> name, age, getDetails(), <employeeId>
interface Employee extends Person {
  employeeId: number
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`
  },
}

// 3. Interface multiple inheritance -> name, age, employeeId, dogName, getDetails(), getDogDetails(), managePeople()
interface Manager extends Person, DogOwner {
  managePeople(): void
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`
  },
  managePeople() {
    console.log('Managing people...')
  },
}
