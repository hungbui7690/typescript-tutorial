/*
  Utility
  - Utility types in Typescript are some predefined generic types that can be used to manipulate or create other new types. These types are available globally in all Typescript projects, so you don't need to add any dependencies to get these going.


****************************

  Partial
  - The first utility type we will look at is Partial, which, as It sounds, makes everything optional or partial.  


*/

interface Person {
  name: string
  age: number
  email: string
}

// Define a new type called 'PartialPerson' that is a partial version of 'Person'
type PartialPerson = Partial<Person>

// Same as:
// interface Person {
//   name?: string | undefined;
//   age?: number | undefined;
//   email?: string | undefined;
// }
