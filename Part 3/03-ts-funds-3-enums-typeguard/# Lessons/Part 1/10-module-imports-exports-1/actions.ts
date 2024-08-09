export function sayHello(name: string): void {
  console.log(`Hello ${name}!`)
}

export let person = 'susan'

type Student = {
  name: string
  age: number
}

// use export default below
const newStudent: Student = {
  name: 'peter',
  age: 24,
}

export default newStudent
