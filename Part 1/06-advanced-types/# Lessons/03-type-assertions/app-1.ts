/*
  Type Assertions
  - allows you to assign a new type to a value.
  - instruct the TypeScript compiler to treat a value as a specified type. 
  - use the <as> keyword or "< >" operator for type assertions.


*/

// # Type assertions using the <as> keyword

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1. The following selects the first input element on an HTML document using the querySelector() method:
let el = document.querySelector('input["type="text"]') // null | Element

console.log(el.value) // err: Property 'value' does not exist on type 'Element'.
/*
  - Since the returned type of the document.querySelector() method is the Element type, the following code causes a compile-time error:
    + The reason is that the value property doesn’t exist in the Element type. It only exists on the HTMLInputElement type.


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. To resolve this, you can instruct the TypeScript compiler to treat the type of the el element as HTMLInputElement by using the as keyword like this:
const elX = document.querySelector('input[type="text"]') as HTMLInputElement

const elY = document.querySelector('input[type="text"]')
const input = elY as HTMLInputElement

// Now, the input variable has the type HTMLInputElement. So accessing its value property won’t cause any error. The following code works:
console.log(input.value)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. Another way to assign the type HTMLInputElement to an Element object is when you access the property as follows:
let enteredText = (el as HTMLInputElement).value

// Note that the HTMLInputElement type extends the HTMLElement type that extends to the Element type.

/*
  The syntax for type assertion of a variable from typeA to typeB is as follows:

    let a: typeA
    let b = a as typeB


*/
