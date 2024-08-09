/*
  Interface - Type Predicate
  - "obj is Manager": not only return boolean, but also assertion at the same time -> this is type predication


*/

// From Previous Challenge
interface Person {
  name: string
}
interface DogOwner extends Person {
  dogName: string
}
interface Manager extends Person {
  managePeople(): void
  delegateTasks(): void
}
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

const employee: Role = getEmployee()
console.log(employee)

// \\\\\\\\\\\\\\\\\\\\\\\\\
// START HERE
// \\\\\\\\\\\\\\\\\\\\\\\\\
// Define a function called isManager that
// - takes an object of type Person | DogOwner | Manager
// - returns a boolean.
// - This function should
//   # check if the managePeople method exists on the object
//   # return true if it does and false if it doesn't.
//     => The return type of this function should be a type predicate: obj is Manager.

// \\\\\\\\\\\\\\\\\\\\\\\\\
// Method 1: NOT WORK
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\
// Method 2: obj -> is just the name of the param -> because we will pass employee as an argument
// -> "obj is Manager": not only return boolean, but also assertion at the same time
function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj
}

// Run your code to see if it works as expected.
// - If employee is a Manager, you should see the output of the delegateTasks method in the console.
// - If employee is a Person or DogOwner, there should be no output.
if (isManager(employee)) {
  employee.delegateTasks()
}
