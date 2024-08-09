/*
  Typescript Intro
  - pic
  - superset of JS


******************************

  Additional Info
  - pic


******************************

  Template
  - pic
  - vite is also a template for us to build our web apps

    ~~ npm create vite@latest playground -- --template vanilla-ts


******************************

  Files & Folders
  - pic
  - check README.md file for steps

    -> npm install -> to install all the packages in package.json
    -> npm run dev -> start the project

  1. create src/tutorial.ts


******************************

  Build Steps
  - pic
  - check package.json 
    -> "build": "tsc && vite build",
  
  
******************************

  Run Project 
  ~~ npm install ts-node
  ~~ npm install -g nodemon

  - create nodemon.json
      {
        "watch": ["src"],
        "ext": ".ts,.js",
        "ignore": [],
        "exec": "ts-node ./src/tutorial.ts"
      }

  - package.json
      "scripts": {
        "dev": "vite",
        "start": "nodemon",
        "build": "tsc && vite build",
        "preview": "vite preview"
      },

  @@ npm run start


******************************

  Type Annotations  
  - TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

  - when we set the type to :string 
    -> we cannot reassign the type of that variable in the next line
    -> we can ONLY use string methods with that variables -> avoid bugs


******************************

  Type Inference
  - The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. 
    -> Just make sure you are working in the typescript file 😄
    -> hover on the variable -> we can see the type of it though we don't explicitly set the type of it
      + though TS can do that for us -> don't forget to use type annotation 


*/

// string/number/boolean...
let awesomeName = 'shakeAndBake'
awesomeName = 'something'
awesomeName = awesomeName.toUpperCase()
// awesomeName = 123 // err >> cannot reassign to something else

let amount: number = 20
amount = 12 - 1
// amount = 'double' // err

let isAwesome: boolean = true
isAwesome = false
// isAwesome = 'shake' // err

let name = 'Joe' // *** TYPE INFERENCE
