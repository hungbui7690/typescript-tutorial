// 2. To consume a module, you use the import statement. The following creates a new module EmailValidator.ts that uses the Validator.ts module:

// import { Validator } from './Validator' // Method 1
import { Validator as StringValidator } from './Validator' // Method 2

class EmailValidator implements StringValidator {
  isValid(s: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(s)
  }
}

export { EmailValidator }
