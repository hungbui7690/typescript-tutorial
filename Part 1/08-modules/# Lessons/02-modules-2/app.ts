/*
  Modules
  - To import everything from a module, you use the following syntax:
    -> import * from 'module_name'


**************************

  1. create types.ts


*/

// 2. Method 1: "import type"
// import type { alphanumeric } from './types'

// 2. Method 2: Note that TypeScript has supported the import type statement since version 3.8. Prior to TypeScript 3.8, you need to use the "import type" statement instead:
import { alphanumeric } from './types'

const test: alphanumeric = 1
const testX: alphanumeric = 'Hello'
