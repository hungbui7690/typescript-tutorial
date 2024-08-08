/*
  Interfaces


*/

// Readonly properties
// If properties should be modifiable only when the object is first created, you can use the readonly keyword before the name of the property:
interface Person {
  readonly ssn: string
  firstName: string
  lastName: string
}

let person: Person
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
}

// In this example, the ssn property cannot be changed:
person.ssn = '171-28-0000' // error TS2540: Cannot assign to 'ssn' because it is a read-only property.
