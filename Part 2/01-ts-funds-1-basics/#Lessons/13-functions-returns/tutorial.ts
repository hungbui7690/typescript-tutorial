/*
  Functions - Returns
  - In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support.

*/

// params
function checkPrice(price: number) {
  return price * 0.9
}

const result = checkPrice(100) // return type = number

// param & return
function calculateDiscount(price: number): number {
  // price.toUpperCase() // err > 'price' is not string
  const hasDiscount = true

  if (hasDiscount) {
    return price
    // return 'Discount Applied'; // err: return type is not number
  }
  return price * 0.9
}

const finalPrice = calculateDiscount(200)
console.log(finalPrice)
