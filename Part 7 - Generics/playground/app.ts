/*
  Generic Interfaces
  - Like classes, interfaces also can be generic. A generic interface allows you to create an interface that can work with different types while maintaining type safety.

*/

// 3) Generic interfaces that describe index types
// The following declares an interface that describes an index type:
interface Options<T> {
  [name: string]: T
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
}
