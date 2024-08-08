/*
  Multiple utility types together
  - We can even use multiple utility types together. For example:


*/

interface User {
  id: number
  name: string
  email: string
  age: number
}

type PartialPick = Partial<Pick<User, 'email' | 'name'>>
// interface User {
//   name?: string | undefined;
//   email?: string | undefined;
// }

type OmitPartialPick = Omit<Partial<Pick<User, 'email' | 'name'>>, 'email'>
// interface User {
//   name?: string | undefined;
// }
