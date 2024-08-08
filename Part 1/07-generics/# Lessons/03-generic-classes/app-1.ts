/*
  Generic Classes


*/

// 1. A generic class has a generic type parameter list in angle brackets <> that follows the name of the class:
class className<T> {
  //...
}

// 2. TypeScript allows you to have multiple generic types in the type parameter list. For example:
class classNameX<K, T> {
  //...
}

// 3. The generic constraints are also applied to the generic types in the class:
type TypeA = {
  firstName: string
  getAge(): number
}
class classNameZ<T extends TypeA> {
  //...
}
// Placing the type parameter on the class allows you to develop methods and properties that work with the same type.
