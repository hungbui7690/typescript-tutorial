/*
  Generics - Create Generic Function and Interface

*/

/////////////////////////
// we need to create 2 functions for both types
function createString(arg: string): string {
  return arg
}
function createNumber(arg: number): number {
  return arg
}

/////////////////////////
// Generic Functions > createGenerics<string>
// Define a generic function
function createGenerics<T>(arg: T): T {
  return arg
}

const someStringValue = createGenerics<string>('Hello World')
const someNumberValue = createGenerics<number>(2)

/////////////////////////
// Define a generic interface
interface GenericInterface<T> {
  value: T
  getValue: () => T
}

// usage
const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value
  },
}
