/*
  Enums - Gotcha : Reverse Mapping
  - In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. 
    > This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

  - In a string enum, TypeScript does not create a reverse mapping. 
    > This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.

*/

///////////////////////////////
// Scenario 1
enum Status {
  Success = 200,
  Error = 500,
}
console.log(Status) // {200: 'Success', 500: 'Error', Success: 200, Error: 500} > reverse mapping

// loop through the values
console.log('******')
Object.values(Status).forEach((value) => {
  console.log(value) // Success > Error > 200 > 500
})
console.log('******')

///////////////////////////////
// Scenario 2
enum DataStatus {
  Success = 200,
  Error = 500,
}

console.log('#####')
Object.values(DataStatus).forEach((value) => {
  if (typeof value === 'number') console.log(value) // with this, we can log the values correctly
})
console.log('#####')

///////////////////////////////
// Scenario 3
enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = 'Value',
}

let numericEnumValue: NumericEnum = 1 // allowed
console.log(numericEnumValue) // 1

// let stringEnumValue: StringEnum = 'Value' // not allow > since it does not have "reverse mapping"
let stringEnumValue: StringEnum = StringEnum.Member // can only do this

///////////////////////////////
// Scenario 4: need to understand Scenario 3
enum OnlineStatus {
  Success = 200,
  Error = 'Error',
}

interface ServerResponse {
  result: OnlineStatus
  data: string[]
}

function getServerResponse(): ServerResponse {
  return {
    data: ['first item', 'second item'],
    result: 200, // we can use 200 here instead of "OnlineStatus.Success" > but if OnlineStatus.Success = 'Success' > then we cannot not put 'Success' here since it is string, and TS will not allow it
    // result: OnlineStatus.Success, // OnlineStatus.Success = 200
  }
}
