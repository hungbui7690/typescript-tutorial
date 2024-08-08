/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.


****************************

  # Generic interfaces that describe index types


*/

// The following declares an interface that describes an index type:
interface Options<T> {
  [name: string]: T
}
// [name: string] -> array of keys has type of string
// T -> value has type of T

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
}
