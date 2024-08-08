/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.


*****************************

  # Generic interfaces that describe object properties

*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1. Declare a generic interface that consists of two members key and value with the corresponding types K and V:
interface Pair<K, V> {
  key: K
  value: V
}

// 2. Now, you can use the Pair interface for defining any key/value pair with any type. For example:
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
}

console.log(month) // { key: 'Jan', value: 1 }
