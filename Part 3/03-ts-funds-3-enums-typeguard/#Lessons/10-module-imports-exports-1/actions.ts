export function sayHello(name: string): void {
  console.log(`Hello ${name}!`)
}

export let person = 'susan'

// use export default below
type Student = {
  name: string
  age: number
}

const newStudent: Student = {
  name: 'peter',
  age: 24,
}

export default newStudent
