/*
  Function Overloading
  - allows you to define multiple signatures for a single function and provide one implementation that handles all defined signatures.
  - enables a function to handle different types of arguments. Additionally, the TypeScript compiler uses the function signatures to perform compile-time type checking to ensure type safety.

  *** Note that TypeScript function overloading is unlike the function overloading supported by other statically typed languages such as Java.


*/

///////////////////////////
// TypeScript function overloading example

// Let’s start with a simple function that returns the sum of two numbers or strings.
// First, define overloaded signatures
function add(a: number, b: number): number
function add(a: string, b: string): string

// Second, provide the implementation for the add function:
function add(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  throw new Error('Invalid arguments')
}

// Third, use the overloaded function:
console.log(add(10, 20)) // 30
console.log(add('Hello, ', 'world!')) // 'Hello, world!

///////////////////////////
// Function overloading with optional parameters

// When you overload a function, the number of required parameters must be the same. If an overload has more parameters than the other, you need to make the additional parameters optional. For example:
function sum(a: number, b: number): number
function sum(a: number, b: number, c: number): number
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c
  return a + b
}
// The sum() function accepts either two or three numbers. The third parameter is optional. If you don’t make it optional, you will get an error.

/////////////////////////
// Method overloading

// When a function is a property of a class, it is called a method. TypeScript also supports method overloading. For example:
class Counter {
  private current = 0

  count(): number
  count(target: number): number[]
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = []
      for (let start = this.current; start <= target; start++) {
        values.push(start)
      }
      // set current to target
      this.current = target
      return values
    }
    return ++this.current
  }
}

// The count() function can return a number or an array depending on the number of arguments that you pass into it:
let counter = new Counter()

console.log(counter.count()) // return a number
console.log(counter.count(5)) // return an array
