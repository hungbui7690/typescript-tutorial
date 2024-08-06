/*
  What is Type Annotation in TypeScript


*/

// Arrays
// To annotate an array type you use a specific type followed by a square bracket : type[] :
// For example, the following declares an array of strings:
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary']

// Objects
// To specify a type for an object, you use the object type annotation. For example:
// a. type annotation
let person: {
  name: string
  age: number
}

// b. create object
person = {
  name: 'John',
  age: 25,
} // valid
// In this example, the person object only accepts an object that has two properties: name with the string type and age with the number type.

///////////////////////////
// Function arguments & return types
// The following shows a function annotation with parameter type annotation and return type annotation:
let greeting: (name: string) => string

// In this example, you can assign any function that accepts a string and returns a string to the greeting variable:
greeting = function (name: string) {
  return `Hi ${name}`
}

// The following causes an error because the function that is assigned to the greeting variable doesn’t match its function type.
greeting = function () {
  console.log('Hello')
}
