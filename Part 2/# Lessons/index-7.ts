/*
  Mutable
  - You can also create a Mutable type helper that allows you to convert all readonly types to mutable type.


*/

interface Person {
  readonly id: number
  readonly name: string
  readonly age: number
}

// The syntax for Mutable is as follows:
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type MutablePerson = Mutable<Person>
// interface Person {
//   id: number;
//   name: string;
//   age: number;
// }

const person: MutablePerson = {
  id: 1,
  name: 'John',
  age: 25,
}

person.name = 'Mike' // Okay
person.id = 2 // Okay
