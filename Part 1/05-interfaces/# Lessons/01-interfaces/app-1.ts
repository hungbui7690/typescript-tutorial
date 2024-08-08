/*
  Interfaces
  - define the contracts within your code. They also provide explicit names for type checking.


*/

// 1. Let’s start with a simple example:
function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`
}
let person = {
  firstName: 'John',
  lastName: 'Doe',
}
console.log(getFullName(person)) // John Doe

/*
  - In this example, the TypeScript compiler checks the argument you pass into the getFullName() function.
  - If the argument has two properties firstName and lastName and their types are strings, then the TypeScript compiler passes the check. Otherwise, it’ll issue an error.
  - The type annotation of the function argument makes the code difficult to read. To address this issue, TypeScript introduces the concept of interfaces. 
*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. The following uses an interface called Person that has two string properties:
interface Person {
  firstName: string
  lastName: string
}

// By convention, the interface names are in the PascalCase. They use a single capitalized letter to separate words in their names. For example, Person, UserProfile, and FullName.

// 3. After defining the Person interface, you can use it as a type. For example, you can annotate the function parameter with the interface name:
function getFullNameX(person: Person) {
  return `${person.firstName} ${person.lastName}`
}

let alex = {
  firstName: 'Alex',
  lastName: 'Doe',
}

console.log(getFullNameX(alex))

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 4. The code now is easier to read than before.
// To make the code more concise, you can use the object destructuring feature of JavaScript:
function getFullNameZ({ firstName, lastName }: Person) {
  return `${firstName} ${lastName}`
}

/*
  - In the argument, we destructure the properties of the person object:
    -> { firstName, lastName }: Person

  - The getFullName() function will accept any object that has at least two string properties with the name firstName and lastName.
*/

// 4. For example, the following code declares an object that has four properties:
let jane = {
  firstName: 'Jane',
  middleName: 'K.',
  lastName: 'Doe',
  age: 22,
}

// 5. Since the jane object has two string properties firstName and lastName, you can pass it on to the getFullName() function as follows:
let fullName = getFullNameZ(jane)
console.log(fullName) // Jane Doe
