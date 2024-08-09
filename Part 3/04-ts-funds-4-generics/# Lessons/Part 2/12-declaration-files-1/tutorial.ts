/*
  Typescript Declaration File
  - In TypeScript, .d.ts files, also known as declaration files
    -> consist of type definitions, and are used to provide types for JavaScript code. 
    -> they allow TypeScript to understand the shape and types of objects, functions, classes, etc., in JavaScript libraries, enabling type checking and autocompletion in TypeScript code that uses these libraries.


***************************

  1. create types.ts
  2. export RandomType
  ...
  4. tsconfig.json
    -> "lib": ["ES2020", "DOM", "DOM.Iterable"]. 
    -> if we remove "DOM", document cannot show any props & methods


*/

import { Random } from './types' // 2. after export, we can use this type any

// document. // 3. with "document" -> it shows all methods & props -> we haven't done any import / export -> why?
