/*
  Why 

*/

// Understanding dynamic type in JavaScript
let box
box = 'hello'
box = 100
// The type of the box variable changes based on the value assigned to it.

// To find the type of the box variable at runtime, you use the typeof operator:
let boxX
console.log(typeof boxX) // undefined
boxX = 'Hello'
console.log(typeof boxX) // string
boxX = 100
console.log(typeof boxX) // number
/*
  As you can see, as soon as the value is assigned, the type of the variable changes.

  And you don’t need to explicitly tell JavaScript the type. JavaScript will automatically infer the type from the value.

  Dynamic types offer flexibility. However, they also lead to problems.
*/

// \\\\\\\\\\\\\\\\\\\\\\\\
// Problems with dynamic types
// Suppose you have a function that returns a product object based on an id:
function getProduct(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  }
}
// The following uses the getProduct() function to retrieve the product with id 1 and show its data:
let product = getProduct(1)
console.log(`The product ${product.Name} costs $${product.price}`) // The product undefined costs $99.5

/*
  - The issue with this code is that the product object doesn’t have the Name property. It has the name property with the first letter n in lowercase.

  - However, you can only know it until you run the script.
  
  - Referencing a property that doesn’t exist on the object is a common issue when working in JavaScript.
*/

// The following example defines a new function that outputs the product information to the Console:
const showProduct = (name, price) => {
  console.log(`The product ${name} costs $${price}.`)
}

// And the following uses the getProduct() and showProduct() functions:
product = getProduct(1)
showProduct(product.price, product.name) // The product 99.5 costs $Awesome Gadget 1
/*
  This time we pass the arguments in the wrong order to the showProduct() function. This is another common problem that you often have when working with JavaScript.

  This is why TypeScript comes into play.
*/
