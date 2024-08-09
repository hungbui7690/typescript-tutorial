/*
  Enums - Gotcha : Reverse Mapping


*/

// \\\\\\\\\\\\\\\\\\\\\\
// Scenario 2
enum DataStatus {
  Success = 200,
  Error = 500,
}
console.log(DataStatus)

console.log('#####')
Object.values(DataStatus).forEach((value) => {
  if (typeof value === 'number') console.log(value) // with this, we can log the values correctly
})
console.log('#####')
