/*
  Modules - Imports/Exports (including types)
  1. actions.ts
  

*/

import newStudent, { sayHello, person } from './actions'

sayHello('TypeScript')
console.log(person) // susan
console.log(newStudent) // { name: 'peter', age: 24 }
