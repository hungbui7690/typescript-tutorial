/*
  Functions - Objects as Parameters
  - createEmployee()
    -> params: object
    -> return: object


*/

// 1. { id } -> destructure
// prettier-ignore
function createEmployee({ id }: { id: number }): {id: number; isActive: boolean} {
  return { id, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })
console.log(first, second)

// 2. alternative: we name the object as student
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
  id: 5,
  name: 'anna',
}

createStudent(newStudent)

/*
  createEmployee({ id }) 
  - param: object which has id property
  createEmployee({ id }: { id: number })
  - param: object which has id property -> type of id = number
*/
