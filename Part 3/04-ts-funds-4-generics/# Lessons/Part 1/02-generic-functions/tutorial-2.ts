/*
  Generics - Create Generic Function and Interface


*/

// \\\\\\\\\\\\\\\\\\\\\\\
// 3. Generic Interface
interface GenericInterface<T> {
  value: T
  getValue: () => T
}

// 4. Usage 1
const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value
  },
}

// 5. Usage 2
const genericNumber: GenericInterface<number> = {
  value: 100,
  getValue() {
    return this.value
  },
}
