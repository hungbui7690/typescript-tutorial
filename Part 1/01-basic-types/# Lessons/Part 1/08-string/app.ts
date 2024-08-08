/*
  String


*/

// 1. Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals:
let firstName: string = 'John'
let title: string = 'Web Developer'

// 2. TypeScript also supports template strings that use the backtick (`) to surround characters.
// The template strings allow you to create multi-line strings and provide the string interpolation features.
// The following example shows how to create multi-line string using the backtick (`):
let description = `This TypeScript string can 
                    span multiple 
                    lines
`

// 3. String interpolations allow you to embed the variables into the string like this:
let firstNameX: string = `John`
let titleX: string = `Web Developer`
let profile: string = `I'm ${firstNameX}. 
                        I'm a ${titleX}`
console.log(profile)
