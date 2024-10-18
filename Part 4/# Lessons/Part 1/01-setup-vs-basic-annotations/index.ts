/*
  Setup
  - Installation
    ~~ npm init -y
    ~~ npm i -g typescript

  - Execution
    # Method 1
      !! "tsc index.ts" or "tsc --watch index.ts"
      !! node index.js

    # Method 2
      ~~ npm install -D tsx
      !! tsx ./index.ts
      !! tsx watch ./index.ts


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Basic Type Annotations



*/

//------------------------
// basic type annotations
//------------------------

let age: number = 30
let firstName: string = 'Mario'
let isFictional: boolean

// age = 'hello'
age = 31

// firstName = 100
firstName = 'Luigi'

// isFictional = 'false'
isFictional = false

//----------------
// type inference
//----------------

let planet = 'Earth'
let moons = 1
let isLarge = false
let somethingElse // any

// planet = 10
planet = 'Saturn'

// moons = '145'
moons = 145

// isLarge = 'yes'
isLarge = true

//------------------
// null & undefined
//------------------

let something: null
let anotherThing: undefined

// something = 10
something = null

// anotherThing = 'hello, world'
anotherThing = undefined
