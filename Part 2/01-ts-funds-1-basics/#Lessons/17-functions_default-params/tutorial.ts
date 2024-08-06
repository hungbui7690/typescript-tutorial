/*
  Functions - Default Param
  - In TypeScript, a default parameter value is an alternative to an optional parameter. 
    > When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter.

  - However, there's a key difference between a parameter with a default value and an optional parameter. 
    > If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. 
    > But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined.

  a function with optional parameters must work when they are not supplied

*/

// default param > penaltyPoints = 0
function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 20)
console.log(scoreAfterPenalty) // Output: 80

let scoreWithoutPenalty = calculateScore(300)
console.log(scoreWithoutPenalty) // Output: 300
