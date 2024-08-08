/*
  Readonly
  - Readonly utility types allow you to create a new type from an existing type set as readonly, which means we cannot modify any property after the initialization.


*/

interface Person {
  id: number
  name: string
  age: number
}

type ReadonlyPerson = Readonly<Person>
// interface Person {
//   readonly id: number;
//   readonly name: string;
//   readonly age: number;
// }

const person: ReadonlyPerson = {
  id: 1,
  name: 'John',
  age: 25,
}

person.name = 'Mike' // Error: Cannot assign to 'name' because it is a read-only property.
