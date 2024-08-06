/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.

*/

// A generic interface has a generic type parameter list in angle brackets <> following the name of the interface:
interface interfaceName<T> {
  // ...
}

// This makes the type parameter T visible to all members of the interface.
// The type parameter list can have one or multiple types. For example:
interface interfaceNameX<U, V> {
  // ...
}

/////////////////////////////
// 1) Generic interfaces that describe object properties
// The following show how to declare a generic interface that consists of two members key and value with the corresponding types K and V:
interface Pair<K, V> {
  key: K
  value: V
}

// Now, you can use the Pair interface for defining any key/value pair with any type. For example:
let month: Pair<string, number> = {
  key: 'Jan',
  value: 1,
}

console.log(month) // { key: 'Jan', value: 1 }
