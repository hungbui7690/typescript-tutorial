/*
  Type - "never"
  - "never" is a type that represents the type of values that never occur.
    -> you CANNOT ASSIGN any value to a variable of type never.
  - TS will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.


*/

// 1.
// let someValue: never = 0 // err: since "never" cannot be assigned with any value

// 2. "never" can easily appear when if place after the if block -> if we cover all the conditions (like below)
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
