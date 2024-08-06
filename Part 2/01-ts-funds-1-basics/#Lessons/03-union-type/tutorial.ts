/*
  Useful Setup
  - pic
  - even with error, we can run the project 
    > but we won't be able to build it "npm run build"

/////////////////////////

  Union Type
  - In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. 
    > It can also be used to specify that a variable can hold one of several specific values

*/

let tax: number | string = 10 // this is number > but sometimes, when we get the data from API, it can be string > we can use union operator here
tax = 100
tax = '$99'

// we call it with the fancy name: literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending' // either one of these
requestStatus = 'success'
requestStatus = 'random'
