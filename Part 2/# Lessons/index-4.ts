/*
  Pick
  - The opposite of Omit is the Pick utility type that allows you to create a new type that contains only a subset of properties from an existing type.


*/

interface User {
  id: number
  name: string
  email: string
  age: number
}

type UserWithEmailAndName = Pick<User, 'email' | 'name'>

// same as:
// interface User {
//   name: string;
//   email: string;
// }
