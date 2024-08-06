// Method 1: The following creates a new module called Validator.ts and declares an interface named Validator:
// export interface Validator {
//   isValid(s: string): boolean
// }
// if you do not use the export keyword, the Validator interface is private in the Validator.ts module, therefore, it cannot be used by other modules.

// Method 2: Another way to export a declaration from a module is to use the export statement. For example:
interface Validator {
  isValid(s: string): boolean
}
export { Validator }

// Method 3: TypeScript also allows you to rename declarations for module consumers, like this:
// interface Validator {
//   isValid(s: string): boolean
// }
// export { Validator as StringValidator }
