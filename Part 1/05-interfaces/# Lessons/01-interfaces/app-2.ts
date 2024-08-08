/*
  Interfaces


*/

// Optional properties
// 1. An interface may have optional properties. To declare an optional property, you use the question mark (?) at the end of the property name in the declaration, like this:
interface Person {
  firstName: string
  middleName?: string
  lastName: string
}

// 2. In this example, the Person interface has two required properties and one optional property.
// And the following shows how to use the Person interface in the getFullName() function:
function getFullNameW(person: Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`
  }
  return `${person.firstName} ${person.lastName}`
}
