/*
  Enums - Gotcha : Reverse Mapping


*/

// Scenario 3
enum NumericEnum {
  Member = 1,
}
console.log(NumericEnum)

enum StringEnum {
  Member = 'Value',
}
console.log(StringEnum)

let numericEnumValue: NumericEnum = 1 // allowed -> since the NumericEnum.Member is a number -> we can use "reverse mapping"
console.log(numericEnumValue) // 1

// let stringEnumValue: StringEnum = 'Value' // not allow -> since StringEnum.Member is a string -> we cannot use "reverse mapping"
let stringEnumValue: StringEnum = StringEnum.Member // can only do this
