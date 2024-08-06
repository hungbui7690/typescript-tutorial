/*
  Functions - Optional Params
  - In TypeScript, a default parameter value is an alternative to an optional parameter. 
    > When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

  - However, there's a key difference between a parameter with a default value and an optional parameter. 
    > If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. 
    > But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined.


  *** a function with optional parameters must work when arguments are not included

*/

// optional param
function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100, 20)
console.log(priceAfterDiscount) // 80

let priceWithoutDiscount = calculatePrice(300) // *** NO 2nd param > NO DISCOUNT
console.log(priceWithoutDiscount) // 300
