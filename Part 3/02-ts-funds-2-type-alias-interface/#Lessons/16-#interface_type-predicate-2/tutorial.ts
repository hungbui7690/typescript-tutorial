/*
  Interface - Type Predicate
  - A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. 
    > It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. 
    > The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

  - function isManager(obj: Person | DogOwner | Manager): obj is Manager{}
    > obj is Manager
      + return boolean
      + assertion


  delegate === ủy thác
  predicate === xác nhận, khẳng định

*/
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

///////////////////////////////
// Method 1: NOT WORK
// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj
// }

///////////////////////////////
// Define a function called isManager that
// > takes an object of type Person | DogOwner | Manager
// > returns a boolean.
// > This function should
//   + check if the managePeople method exists on the object
//   + return true if it does and false if it doesn't.
//     > The return type of this function should be a type predicate: obj is Manager.
///////////////////////////////
// Method 2: > obj: is just the name of the param > because we will pass employee as an argument
// > "obj is Manager": this will return boolean + assertion at the same time
function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj
}

// Run your code to see if it works as expected.
// > If employee is a Manager, you should see the output of the delegateTasks method in the console.
// > If employee is a Person or DogOwner, there should be no output.
if (isManager(employee)) {
  employee.delegateTasks()
}
