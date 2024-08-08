/*
  Type - "never"
  - "never" is a type that represents the type of values that never occur.
    > you CANNOT ASSIGN any value to a variable of type never.

  - TS will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

*/

// let someValue: never = 0 // err: since "never" cannot be assigned with any value

///////////////////////////////
// "never" can easily appear when if place after the if block > if we cover all the conditions (like below)
type Theme = 'light' | 'dark'

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme')
    return
  }
  if (theme === 'dark') {
    console.log('dark theme')
    return
  }
  theme // theme is "never" > because it can never have a value that is not 'light' or 'dark' (we covered all the cases)
}

////////////////////////////////////
////////////////////////////////////
// enum Color {
//   Red,
//   Blue,
//   Green, // (c) add this
// }

// // (a)
// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'Red'
//     case Color.Blue:
//       return 'Blue' // *** no default case
//   }
// }

// // (b)
// console.log(getColorName(Color.Red)) // Red
// console.log(getColorName(Color.Blue)) // Blue
// console.log(getColorName(Color.Green)) // (d) undefined > but no error

////////////////////////////////////
// exhaustive check
enum Color {
  Red,
  Blue,
  // Green, // if we turn on this >> ts will show error at "unexpectedColor" > it requires us to check all of the case
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'

    // setup "default case"
    default:
      let unexpectedColor: never = color // TS will check at build time
      throw new Error(`Unexpected color value: ${unexpectedColor}`) // at runtime
  }
}

console.log(getColorName(Color.Red)) // Red
console.log(getColorName(Color.Blue)) // Blue
// console.log(getColorName(Color.Green)) // Green
