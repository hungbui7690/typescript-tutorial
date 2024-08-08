/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.


*/

// 1. A generic interface has a generic type parameter list in angle brackets <> following the name of the interface:
interface interfaceName<T> {
  // ...
}

// 2. This makes the type parameter T visible to all members of the interface.
// The type parameter list can have one or multiple types. For example:
interface interfaceNameX<U, V> {
  // ...
}
