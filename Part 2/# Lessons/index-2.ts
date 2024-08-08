/*
  Required
  - The opposite to Partial is Required utility type, which makes everything required.


*/

interface Person {
  name?: string | undefined
  age?: number | undefined
  email?: string | undefined
}

// Define a new type called 'RequiredPerson' that is a required version of 'Person'
type RequiredPerson = Required<Person>

// Same as:
// interface Person {
//   name: string;
//   age: number;
//   email: string;
// }
