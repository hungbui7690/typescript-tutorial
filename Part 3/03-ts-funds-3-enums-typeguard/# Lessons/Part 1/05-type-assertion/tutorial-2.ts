/*
  Type Assertion


*/

// Case 2
// 1. Assume we have a JSON string from an API or local file -> we know that it is object
let birdString = '{"name": "Eagle"}' // has "name" prop
let dogString = '{"breed": "Poodle"}' //  has "breed" prop

type Bird = {
  name: string
}

// 2. Parse the JSON string into an object
let birdObject = JSON.parse(birdString) // after parsed -> type === any
let dogObject = JSON.parse(dogString)

// 3. We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird
let dog = dogObject as Bird // *** Be careful here!!! Dog does not have "name" property

// 4.
console.log(bird.name)
console.log(dog.name) // Because we set the dog as Bird -> TS won't catch the err here for us
