/*
  Generics - Create Generic Function and Interface


*/

// 1. We need to create 2 functions for both types
function createString(arg: string): string {
  return arg
}
function createNumber(arg: number): number {
  return arg
}

// \\\\\\\\\\\\\\\\\\\\\\\
// 2. Generic Functions -> createGenerics<T>
function createGenerics<T>(arg: T): T {
  return arg
}

// 3. Usage 1
const someStringValue = createGenerics<string>('Hello World')
const someNumberValue = createGenerics<number>(2)

// 3. Usage 2
type Person = {
  name: string
  age: number
}
const person: Person = {
  name: 'Joe',
  age: 22,
}

const personValue = createGenerics<Person>(person)
