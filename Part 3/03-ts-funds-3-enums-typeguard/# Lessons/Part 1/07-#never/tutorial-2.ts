/*
  Type - "never"


*/

enum Color {
  Red,
  Blue,
  // Green, // 3. if we comment this -> 4. still not throw error
}

function getColorName(color: Color) {
  // 1. no Green + default case
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'

    // no default case
  }
}

// 2.
console.log(getColorName(Color.Red)) // Red
console.log(getColorName(Color.Blue)) // Blue
console.log(getColorName(Color.Green)) // 4. undefined -> but no error
