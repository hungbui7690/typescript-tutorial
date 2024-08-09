/*
  Enums - Gotcha : Reverse Mapping
  - In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. 
    -> This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.
  - In a string enum, TypeScript does not create a reverse mapping. 
    -> This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.


*****************************

  🎯 Object.values() -> convert to array 


*/

// Scenario 1
enum Status {
  Success = 200,
  Error = 500,
}
console.log(Status) // {200: 'Success', 500: 'Error', Success: 200, Error: 500} -> reverse mapping

// Loop through the values
console.log('******')
Object.values(Status).forEach((value) => {
  console.log(value) // Success -> Error -> 200 -> 500
})
console.log('******')
