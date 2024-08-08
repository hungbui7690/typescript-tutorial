/*
  Type - 'unknown'
  - The unknown type in TypeScript is a type-safe "counterpart of the any type". 
  - It's like saying that a variable could be anything, but we "need to perform some type-checking" before we can use it.
  - "error instanceof Error" checks if the error object is an instance of the Error class.

*/

let unknownValue: unknown

// Assign different types of values to unknownValue
unknownValue = 'Hello World' // OK
unknownValue = [1, 2, 3] // OK
unknownValue = 42.3344556 // OK

// unknownValue.toFixed(2) // # Error: Object is of type 'unknown' >> we need to check before we can use methods

//////////////////////////////////
// perform check
if (typeof unknownValue === 'number') {
  // TS knows that unknownValue is a number in this block
  console.log(unknownValue.toFixed(2)) // after check, we can use it
}

//////////////////////////////////
// instanceof
try {
  runSomeCode()
} catch (error) {
  // without "instance of Error" > we cannot use "error.message" > since TS does not know if error is coming from Error class
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log(error)
    console.log('there was an error....')
  }
}

//////////////////////////////////
// why we need to know the "instanceof"
// > because sometimes, if we use the library, the library can throw string or error depends on the dev who makes that library
// > below is the example when dev can throw Error or string
function runSomeCode() {
  const random = Math.random()
  if (random < 0.5) {
    throw new Error('Something went wrong') // throw Error
  } else {
    throw 'some error' // throw String > this is weird, but this can happen when we use library
  }
}
