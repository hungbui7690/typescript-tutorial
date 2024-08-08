/*
  Omit
  - You can use the Omit utility type to create a new type from an existing type, however, with some properties removed.


*/

interface User {
  id: number
  name: string
  email: string
  age: number
}

type UserWithoutEmail = Omit<User, 'email'>
// interface User {
//   id: string;
//   name: string;
//   age: number;
// }

// We can also remove multiple properties by passing an union
type UserWithoutEmailAndName = Omit<User, 'email' | 'name'>
// interface User {
//   id: string;
//   age: number;
// }
