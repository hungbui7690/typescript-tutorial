/*
  Type "never" gotcha

*/

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

function isStudent(person: Person): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined
}

////////////////
// Case 1
// (2) anna === Student
const anna: Person = {
  name: 'anna',
  study: () => console.log('Studying'),
  // login: () => console.log('Logging in'), // (4) if we uncomment this and comment study() > this is User > and at the if/else block, it will work again (person.login())
}

if (isStudent(anna)) {
  anna.study() // This is safe because TS knows that 'anna' is a Student.
} else {
  console.log(anna) // anna === "never"
  // anna.login() // (3) ts will yell at us
}

////////////////
// Case 2
const random = randomPerson() // (1) either Student or User
if (isStudent(random)) {
  random.study()
} else {
  console.log(random)
}
