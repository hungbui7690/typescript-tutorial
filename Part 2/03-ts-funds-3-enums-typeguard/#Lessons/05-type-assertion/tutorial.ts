/*
  Type Assertion
  - Type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. 
    > This is especially useful when we know more about the type of a variable than TypeScript does.

  *** "as" === type assertion

*/

////////////////////////////////////
// Case 1
// > for ex, in some case, when we work with library, we get someValue with the type of "any" > but we know that it is string
let someValue: any = 'This is a string'

let strLength: number = (someValue as string).length // Because we know the type of 'someValue' is string > we use "type assertion" to treat 'someValue' as a string

////////////////////////////////////
// Case 2
// Assume we have a JSON string from an API or local file > we know that it is object
let birdString = '{"name": "Eagle"}' // has "name" prop
let dogString = '{"breed": "Poodle"}' //  has "breed" prop

type Bird = {
  name: string
}

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString) //  type === any
let dogObject = JSON.parse(dogString)

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird
let dog = dogObject as Bird // *** Be careful here!!! Dog does not have "name" property

console.log(bird.name)
console.log(dog.name) // *** Because we set the dog as Bird > TS won't catch the err here for us

/////////////////////////////
// Case 3: this is a real situation
// 1. we have Status.Pending
// 2. then we save it to DB
// 3. after that, we need to take 'pending' (which before is Status.Pending) from DB out
// 4. error appear
enum Status {
  Pending = 'pending',
  Declined = 'declined',
} // (1)

type User = {
  name: string
  status: Status
}

// (2) save Status.Pending in the DB as a string

const statusValue = 'pending' // (3) retrieve string from the DB

const user: User = { name: 'john', status: statusValue as Status } // (4) from the type alias User, status has the type of Status, not string > TS will complain > but if we know for sure that the statusValue has type of Status > we can use type assertion here
