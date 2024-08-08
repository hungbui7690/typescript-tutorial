/*
  Interface - Type Predicate
  - A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

  - Define a function called isManager that 
    >> takes an object of type Person | DogOwner | Manager
    >> returns a boolean. 
    >> This function should 
        + check if the managePeople method exists on the object 
        + return true if it does and false if it doesn't. 
          >>> The return type of this function should be a type predicate: obj is Manager.
  
  - Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.

  *** delegate === ủy thác
  *** predicate === xác nhận, khẳng định

*/

import { boolean } from 'zod'

///////////////////////////////
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

function getEmployee(): Person | DogOwner | Manager {
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

const employee: Person | DogOwner | Manager = getEmployee()
console.log(employee)

///////////////////////////////
// Start Here
console.log(employee.name) // this works because Person / DogOwner / Manager has this property
// console.log(employee.delegateTasks()) // *** NOT WORK since ONLY Manager has this function

///////////////////////////////
// Method 1:
function isManager(obj: Person | DogOwner | Manager): boolean {
  return 'managePeople' in obj
}

console.log(isManager(employee)) // it WORKS

// NOT WORK > if we set up the if block > it won't work with method 1
// > because method 1 returns boolean, and typescript cannot get that signal
// > we need to use method 2 (type predicate) to make it work (part 2)
if (isManager(employee)) {
  employee.delegateTasks() // this function NOT ALWAYS in employee
}
