/*
  Parameters
  - The Parameters utility type lets you extract the type of parameters from a function.


*/

function add(a: number, b: string, c: boolean): string {
  return a + b
}

type AddReturnType = Parameters<typeof add> // type AddReturnType = [a: number, b: string, c:boolean];
