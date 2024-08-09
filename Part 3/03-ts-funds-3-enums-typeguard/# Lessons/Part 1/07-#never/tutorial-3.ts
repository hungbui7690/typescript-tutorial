/*
  Type - "never"


**************************

  # exhaustive check


*/

enum Color {
  Red,
  Blue,
  // Green, // if we turn on this & 2. -> ts will show error at "unexpectedColor" -> it requires us to check all of the case
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'

    // with this -> it will show error
    default:
      let unexpectedColor: never = color // TS will check at build time and show error
      throw new Error(`Unexpected color value: ${unexpectedColor}`) // at runtime
  }
}

console.log(getColorName(Color.Red)) // Red
console.log(getColorName(Color.Blue)) // Blue
// console.log(getColorName(Color.Green)) // 2.
