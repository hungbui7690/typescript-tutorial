/*
  Why 

*/

// How Typescript solves the problems of dynamic types
// To fix the problem of referencing a property that doesn’t exist on an object, you do the following steps:

// First, define the “shape” of the product object using an interface. Note that you’ll learn about the interface in a later tutorial.
interface Product {
  id: number
  name: string
  price: number
}

// Second, explicitly use the Product type as the return type of the getProduct() function:
function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  }
}

// When you reference a property that doesn’t exist, the code editor will inform you immediately:
const product = getProduct(1)
console.log(`The product ${product.Name} costs $${product.price}`)
// And when you hover the mouse cursor over the error, you’ll see a hint that helps you to solve the issue

// To solve the problem of passing the arguments in the wrong order, you explicitly assign types to function parameters:
const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs $${price}.`)
}
// And when you pass the arguments of the wrong types to the showProduct() function, you’ll receive an error:
const productX = getProduct(1)
showProduct(product.price, product.name)

/*
  Summary

    JavaScript is dynamically typed, providing flexibility but also leading to many problems.
    TypeScript adds an optional type system to JavaScript to solve these problems.
*/
