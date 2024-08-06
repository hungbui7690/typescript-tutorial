/*
  Type Alias - Additional Info
  - we are not limit to use type alias for object 

*/

// Type alias for string | number
type StringOrNumber = string | number
let value: StringOrNumber
value = 'hello' // This is valid
value = 123 // This is also valid

// Type alias for theme
type Theme = 'light' | 'dark'
let theme: Theme
theme = 'light' // This is valid
theme = 'dark' // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t
}
setTheme('dark') // This will set the theme to 'dark'
