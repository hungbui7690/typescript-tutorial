/*
  Modules

************************

  1. export the ZipCodeValidator as a default export


*/

import ZipCodeValidator from './ZipCodeValidator' // 2.

let validator = new ZipCodeValidator()
let result = validator.isValid('95134')
console.log(result) // true

/*
  Summary
  - TypeScript shares the same module concept with the ES6 module. A module can contain both declarations and code.
  - In a module, variables, functions, classes, interfaces, etc., execute on their own scope, not the global scope.
  - Use export statement to export variables, functions, classes, interfaces, types, etc., from a module.
  - Use import statement to access exports from other modules.


*/
