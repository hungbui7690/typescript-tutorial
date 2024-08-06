/*
  Modules
  - To import everything from a module, you use the following syntax:

        import * from 'module_name'

*/

// 1. create Types.ts
// 2. Method 1
// import type { alphanumeric } from './Types'

// 2. Method 2: Note that TypeScript has supported the import type statement since version 3.8. Prior to TypeScript 3.8, you need to use the import statement instead:
import { alphanumeric } from './Types'

const test: alphanumeric = 1
const testX: alphanumeric = 'Hello'
