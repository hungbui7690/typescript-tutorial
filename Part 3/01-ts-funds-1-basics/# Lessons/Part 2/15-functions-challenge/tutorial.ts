/*
  Functions - Challenge


*/

// 1. Create a new array of names
const names: string[] = ['John', 'Jane', 'Jim', 'Jill']

// 2. Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
function isNameInList(name: string): boolean {
  return names.includes(name)
}

// 3. Use this function to check if various names are in your array and log the results.
isNameInList(names[0])
// isNameInList(1) // error
