/*
  Challenge - Enums vs Tuples

*/

// Define an enum named UserRole with members Admin, Manager, and Employee.
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
type User = {
  id: number
  name: string
  role: UserRole // *** use enums here
  contact: [string, string] // Tuple: [email, phone]
}

// Define a function named createUser that takes a User object as its parameter and returns a User object.
function createUser(user: User): User {
  return user
}

// Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
const user: User = createUser({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin, // 0
  contact: ['john.doe@example.com', '123-456-7890'],
})
console.log(user) // {id: 1, name: 'John Doe', role: 0, contact: Array(2)}
