/*
  Modules
  - To import everything from a module, you use the following syntax:

        import * from 'module_name'

*/

// 1. create ZipCodeValidator.ts that uses the Validator.ts module
// 2. create FormValidator.ts

import * as validator from './FormValidator'

console.log(validator)

const zipValidator = new validator.ZipCodeValidator()
console.log(zipValidator.isValid('80020'))
