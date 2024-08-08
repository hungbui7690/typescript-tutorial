/*
  Extract Examples


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 1
type Animal = 'cat' | 'dog' | 'bird' | 'fish'

// We can extract a member of union by using Extract. The first argument is the full union, and the second argument is the member of the union that we want to get.
type OnlyCat = Extract<Animal, 'cat'> // 'cat'

// We can even get multiple members from an union by using Extract. Here is how:
type ExtractType = Extract<Animal, 'cat' | 'dog'> // 'cat' | 'dog

// Even if we pass a value to Extract that doesn't exist in the union, Typescript will return the values that exists in the union.
type ExtractTypeX = Extract<Animal, 'cat' | 'dog' | 'tiger'> // 'cat' | 'dog'
