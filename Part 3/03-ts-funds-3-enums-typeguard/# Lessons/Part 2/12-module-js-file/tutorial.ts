/*
  Modules - Javascript Files
  - When you set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.
  - However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. 
    -> For example, it might not be able to infer complex types or types that depend on runtime behavior.


*******************************

  1. create example.js
  2. export someValue
  3. import in tutorial -> it won't work since we did not config yet
  3. tsconfig.json -> "allowJs": true,


*******************************

  - we can do this -> not recommended 
    -> since we setup ts project -> everything must be in ts


*/

// 2. import
import { someValue } from './example'

console.log(someValue)
