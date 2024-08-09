/*
  Computed Properties
  - with this -> we don't have to hard code
  - Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. 
    -> This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.


*/

// hard code
let bunny: { age: number } = {
  age: 5,
}

const propName = 'age' // instead of hardcode 'age' -> we use square bracket [] to represent computed property

type Animal = {
  [propName]: number // use here
}

let tiger: Animal = { [propName]: 5 } // use here
