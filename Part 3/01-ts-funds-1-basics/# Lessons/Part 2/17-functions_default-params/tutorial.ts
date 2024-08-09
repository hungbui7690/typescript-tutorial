/*
  Functions - Default Param


*/

// default param -> penaltyPoints = 0
function calculateScore(initialScore: number, penaltyPoints: number = 0) {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100, 20)
console.log(scoreAfterPenalty) // Output: 80

let scoreWithoutPenalty = calculateScore(300)
console.log(scoreWithoutPenalty) // Output: 300
