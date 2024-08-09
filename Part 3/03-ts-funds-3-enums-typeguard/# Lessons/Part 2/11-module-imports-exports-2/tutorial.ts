/*
  Modules - Imports/Exports (including types)
    1. actions.ts 
      -> add export to type Student


*****************************

  - there are 2 ways we can use to import type 
    -> import newStudent, { sayHello, person, type Student } from './actions' 
    -> import newStudent, { sayHello, person, Student } from './actions' 
      => does not create any changes 
      => just to signal that this is type


*****************************

  Should we create a new file for "type"?
  - it depends -> there are 2 ways:
    + create types.ts -> and put all the types there
    + don't need to create types.ts -> just place the types at the place where we use it (in this case, actions.ts)


*/

import newStudent, { sayHello, person, type Student } from './actions' // 2. import

sayHello('TypeScript')
console.log(person)
console.log(newStudent)

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
}

console.log(anotherStudent)
