/*
  Modules


***************************

  1. create ZipCodeValidator.ts that uses the Validator.ts module
  2. create FormValidator.ts


*/

import * as validator from './FormValidator'

console.log(validator)

const zipValidator = new validator.ZipCodeValidator()
console.log(zipValidator.isValid('80020'))
