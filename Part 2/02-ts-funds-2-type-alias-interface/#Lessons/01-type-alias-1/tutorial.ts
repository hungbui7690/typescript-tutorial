/*
  Type Alias
  - A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. 
    > However, it's important to note that it doesn't create a new unique type - it's just an alias.
    > All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly.

*/

// we use the same annotation for these 2 objects (aka: { id: number; name: string; isActive: boolean })
const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'john',
  isActive: true,
}
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'susan',
  isActive: false,
}

// we also use the same annotation for this function > break the DRY principle
function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number
  name: string
  isActive: boolean
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)

  return user
}
