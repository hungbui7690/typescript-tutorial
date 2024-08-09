/*
  Type Alias


*/

// 1. create type alias
type User = { id: number; name: string; isActive: boolean }

// 2. apply type alias
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
