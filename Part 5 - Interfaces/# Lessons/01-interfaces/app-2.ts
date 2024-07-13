/*
  Interfaces
  - define the contracts within your code. They also provide explicit names for type checking.

*/

// Optional properties

// An interface may have optional properties. To declare an optional property, you use the question mark (?) at the end of the property name in the declaration, like this:
interface PersonT {
  firstName: string
  middleName?: string
  lastName: string
}

// In this example, the Person interface has two required properties and one optional property.
// And the following shows how to use the Person interface in the getFullName() function:
function getFullNameW(person: PersonT) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`
  }
  return `${person.firstName} ${person.lastName}`
}
