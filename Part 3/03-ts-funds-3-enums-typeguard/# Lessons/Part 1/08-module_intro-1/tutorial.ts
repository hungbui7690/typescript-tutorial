/*
  Modules - Global Scope "Gotcha"
  - If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. 
    -> In this case, declaring the same variable in two different files would cause a conflict.


**************************

  1. create actions.ts


*/

const susan = 'susan' // err -> since we create "susan" variable in actions.ts -> and ts will put that var in the global scope -> but not scope to each module
