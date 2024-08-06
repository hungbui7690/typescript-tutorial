/*
  array 

*/

// For example, the following declares an array of strings:
let skills: string[] = []

// And you can add one or more strings to the array:
skills[0] = 'Problem Solving'
skills[1] = 'Programming'

// or use the push() method:
skills.push('Software Design')

// The following declares a variable and assigns an array of strings to it:
let skillZ = ['Problem Solving', 'Software Design', 'Programming']

// In this example, TypeScript infers the skills array as an array of strings. It is equivalent to the following:
let skillX: string[]
skillX = ['Problem Solving', 'Software Design', 'Programming']

// Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to it. For example, the following will cause an error:
skillX.push(100) // err: Argument of type 'number' is not assignable to parameter of type 'string'.

// When you extract an element from the array, TypeScript can do type inference. For example:
let skill = skillX[0]
console.log(typeof skill)
/*
  In this example, we extract the first element of the skills array and assign it to the skill variable.

  Since an element in a string array is a string, TypeScript infers the type of the skill variable to string as shown in the output.
*/

////////////////////////////
// TypeScript array properties and methods

// TypeScript arrays can access the properties and methods of JavaScript. For example, the following uses the length property to get the number of elements in an array:
let series = [1, 2, 3]
console.log(series.length) // 3

// And you can use all the useful array methods such as forEach(), map(), reduce(), and filter(). For example:
let doubleIt = series.map((e) => e * 2)
console.log(doubleIt)

/////////////////////////////
// Storing values of mixed types

// The following illustrates how to declare an array that holds both strings and numbers:
let scores = ['Programming', 5, 'Software Design', 4]

// In this case, TypeScript infers the scores array as an array of string | number.
// It’s equivalent to the following:
let scoresX: (string | number)[]
scoresX = ['Programming', 5, 'Software Design', 4]

/*
  Summary

    In TypeScript, an array is an ordered list of values. An array can store a mixed type of values.
    To declare an array of a specific type, you use the let arr: type[] syntax.
*/
