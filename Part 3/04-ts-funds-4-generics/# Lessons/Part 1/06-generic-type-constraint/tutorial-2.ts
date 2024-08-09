/*
  Generics - Type Constraints Example 2


*/

type Car = {
  brand: string
  model: string
}
const car: Car = {
  brand: 'ford',
  model: 'mustang',
}

type Product = {
  name: string
  price: number
}
const product: Product = {
  name: 'shoes',
  price: 1.99,
}

type Student = {
  name: string
  age: number
}
const student: Student = {
  name: 'peter',
  age: 20,
}

// 1.
function printName1<T>(input: T): void {
  // console.log(input.name) // err -> since TS cannot guarantee that the name property is in input
}

// 2. <T extends Student>
// -> It means that the type T can be any type, but it must be a subtype of Student or Student itself.
// -> In other words, T must have at least the same properties and methods that Student has.
function printName2<T extends Student>(input: T): void {
  console.log(input.name)
}
printName2(student) // peter
// printName2(product) // err -> since type now is Product

// 3. <T extends Student | Product>
// -> T is either Student or Product
function printName3<T extends Student | Product>(input: T): void {
  console.log(input.name)
}
printName3(student) // peter
printName3(product) // shoes

// 4. <T extends { name: string }>
// -> T must be an object that has at least a name property of type string.
// -> In other words, T must have at least the same properties and methods that { name: string } has.
function printName4<T extends { name: string }>(input: T): void {
  console.log(input.name)
}
printName4(student) // peter
printName4(product) // shoes
