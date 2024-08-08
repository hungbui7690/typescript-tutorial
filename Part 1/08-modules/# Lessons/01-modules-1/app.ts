/*
  Modules
  - Since ES6, JavaScript started supporting modules as the native part of the language. TypeScript shares the same module concept as JavaScript.
  - A TypeScript module can contain both declarations and code. A module executes within its own scope, not in the global scope. It means that when you declare variables, functions, classes, interfaces, etc., in a module, they are not visible outside the module unless you explicitly export them using export statement.

  - On the other hand, if you want to access variables, functions, classes, etc., from a module, you need to import them using the import statement.
  - Like ES6, when a TypeScript file contains a top-level import or export, it is treated as a module.


******************************

  1. creates a new module called Validator.ts
  2. create EmailValidator.ts


*/

// 3.
import { EmailValidator } from './EmailValidator'

let email = 'john.doe@typescripttutorial.net'
let validator = new EmailValidator()
let result = validator.isValid(email)

console.log(result) // true
