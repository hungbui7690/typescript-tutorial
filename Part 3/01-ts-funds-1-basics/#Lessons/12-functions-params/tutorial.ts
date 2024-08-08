/*
  Functions - Params
  - In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.

*/

/*
  set type for params > we have 3 ways to fix the TS error here:
  (1) set to any
  (2) set to proper type > we use this in this lesson
  (3) set in config > pic
*/
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`)
}

sayHi('john')
// sayHi(3)
// sayHi('peter', 'random');
