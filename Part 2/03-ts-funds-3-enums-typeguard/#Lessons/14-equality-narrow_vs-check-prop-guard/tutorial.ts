/*
  Challenge - Equality Narrowing (method 1)
  - In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

/////////////////////////////

  Challenge - check for property (method 2)
  - The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.
    > It checks if a property or method exists on an object. 
    > If it exists, TypeScript will narrow the type to the one that has this property.

*/

type Dog = { type: 'dog'; name: string; bark: () => void }
type Cat = { type: 'cat'; name: string; meow: () => void }
type Animal = Dog | Cat

/*
  - Define a function named makeSound that takes one parameter animal of type Animal.
  - Inside the function, use an if statement to check if animal.type is 'dog'.
  - If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. 
    > In this case, call the bark method of animal.
  - If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. 
    > In this case, call the meow method of animal.
  - Now you can call the makeSound function with an Animal as the argument. 
    > The function will call the appropriate method (bark or meow) depending on the type of the animal.
*/

///////////////////////////
// Method 1: equality narrowing
function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark()
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow()
  }
}

///////////////////////////
// Method 2: check for property
function makeSound2(animal: Animal) {
  // ## use 'in'
  if ('bark' in animal) {
    animal.bark()
  } else {
    animal.meow()
  }
}

///////////////////////////
const bic: Cat = {
  type: 'cat',
  name: 'bic',
  meow() {
    console.log('Meow!!')
  },
}
makeSound(bic)
