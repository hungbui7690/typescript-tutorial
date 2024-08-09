/*
  Challenge - Type Predicate
  - A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.


***************************

  - person is Student -> return boolean + assertion


*/

//  Define the User and Student types. Student should have a study method and User should have a login method.
type Student = {
  name: string
  study: () => void
}
type User = {
  name: string
  login: () => void
}
type Person = Student | User

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') }
}

/*
  - Create a function named isStudent that takes a parameter person of type Person.
    -> In the function signature, specify a return type that is a type predicate: person is Student.
    -> In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. 
      + This will return true if person is a Student, and false otherwise.
*/
function isStudent(person: Person): person is Student {
  return 'study' in person
  // return (person as Student).study !== undefined // check if study() is NOT undefined
}

/*
  Use the isStudent function in an if statement with person as the argument.
  -> In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.
  -> In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.
*/
const person = randomPerson()
if (isStudent(person)) {
  person.study() // This is safe because TypeScript knows that 'person' is a Student.
} else {
  person.login()
}
