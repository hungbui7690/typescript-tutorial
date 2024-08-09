/*
  Excess Property Check
  - Gotchas: 
    -> TypeScript only performs excess property checks on object literals where they're used, not on references to them.

    -> In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. 
      + This is done to catch common errors.

    -> However, when you pass <newStudent> to <createStudent>, TypeScript doesn't complain about the email property. 
      + This is because newStudent is not an object literal at the point where it's passed to createStudent.


*/

function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
}

createStudent(newStudent) // does not check when we use REF
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' }) // check for the error -> since we pass object literal
