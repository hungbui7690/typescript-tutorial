/*
  Challenge
  - delegate === ủy thác


*/

// 1. Start by defining a Person interface with a name property of type string.
interface Person {
  name: string
}

// 2. Next, define a DogOwner interface that extends Person and adds a dogName property of type string. -> name, dogName
interface DogOwner extends Person {
  dogName: string
}

// 3. Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTask -> Both methods should have a return type of void.
// -> name, dogName, managePeople(), delegateTasks()
interface Manager extends Person {
  managePeople(): void
  delegateTasks(): void
}

// 4. Define the getEmployee function
// -> Now, define a function called getEmployee that returns a Person, DogOwner, or Manager
// -> Inside this function, generate a random number and use it to decide which type of object to return.
// -> If the number is less than 0.33, return a Person.
// -> If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
type Role = Person | DogOwner | Manager
function getEmployee(): Role {
  const random = Math.random()

  if (random < 0.33) {
    return {
      name: 'john',
    }
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex',
    }
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    }
  }
}

// 5. Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee.
// -> Then, log employee to the console.
const employee: Role = getEmployee()
console.log(employee)
