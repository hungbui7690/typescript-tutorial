/*
  Functions - Objects as Parameters
  - createEmployee()
    > accept {id} as param
    > return { id, isActive: id % 2 === 0 }
      + isActive: id%2 === 0, then true > else, false

*/

// { id } > parameter is an object with the id property
function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })
console.log(first, second)

// alternative: we name the object as student
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
  - object which has id property
  createEmployee({ id }: { id: number })
  - object which has id property > type of id = number
*/
