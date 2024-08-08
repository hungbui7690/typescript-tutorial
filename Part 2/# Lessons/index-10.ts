/*
  ReturnType
  - ReturnType utility type lets you to extract the return type of a function type. It takes a function type as an argument and returns the value type that the function returns.


*/

function add(a: number, b: number): number {
  return a + b
}

type AddReturnType = ReturnType<typeof add> // type AddReturnType = number

function addStr(a: string, b: string): string {
  return a + b
}

type AddReturnType2 = ReturnType<typeof addStr> // type AddReturnType2 = string
