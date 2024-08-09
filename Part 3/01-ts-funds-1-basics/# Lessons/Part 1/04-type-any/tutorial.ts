/*
  Type: any
  - Could be anything
  - In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. 
    -> It means a variable declared with the any type can hold a value of any type. 
    -> Later will also cover - "unknown" and "never"


*/

// this is exactly the way JS behaves
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let random // type = any by default
