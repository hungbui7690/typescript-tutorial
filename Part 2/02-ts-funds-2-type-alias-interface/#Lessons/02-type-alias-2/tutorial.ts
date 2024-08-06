/*
  Type Alias
  - A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. 
    > However, it's important to note that it doesn't create a new unique type - it's just an alias.
    > All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

*/

// type alias
type User = { id: number; name: string; isActive: boolean }

// apply type alias
const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)
  return user
}
