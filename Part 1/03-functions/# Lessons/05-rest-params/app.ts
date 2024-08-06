/*
  Rest Parameters
  - A rest parameter allows a function to accept zero or more arguments of the specified type. In TypeScript, the rest parameters follow these rules:

      A function has only one rest parameter.
      The rest parameter appear last in the parameter list.
      The type of the rest parameter is an array type.


\\\\\\\\\\\\\\\\\\\\\
  Rest parameters with a single type
  - To declare a rest parameter, you prefix the parameter name with three dots (…) and use the array type as the type annotation:

      function fn(...rest: type[]) {
        //...
      }

*/

// The following example shows how to use the rest parameter:
function getTotal(...numbers: number[]): number {
  let total = 0
  numbers.forEach((num) => (total += num))
  return total
}
// In this example, the getTotal() calculates the total of numbers passed into it.

// Since the numbers parameter is a rest parameter, you can pass one or more numbers to calculate the total:
console.log(getTotal()) // 0
console.log(getTotal(10, 20)) // 30
console.log(getTotal(10, 20, 30)) // 60

/////////////////////////
// Rest parameters with multiple types
// TypeScript allows you to handle rest parameters with multiple types using union types. For example:
function combine(...args: (number | string)[]): [number, string] {
  let total = 0
  let str = ''
  args.forEach((arg) => {
    if (typeof arg === 'number') {
      total += arg
    } else if (typeof arg === 'string') {
      str += arg
    }
  })

  return [total, str]
}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year')
console.log({ total })
console.log({ str })

/*
  - In this example, we define a combine() function that takes a variable number of arguments using rest parameters which can be either numbers or strings:

      ...args: (number | string)[]

  - The function does two things:

      Sum up all the numbers
      Concatenates all the strings.

  - Then, it returns a tuple containing the total sum of the numbers and the concatenated string.

\\\\\\\\\\\\\\\\\\\

  Summary

    Use rest parameters to allow a function to accept a variable number of arguments with the same or different types.
    Use ...args type[] syntax to define rest parameters with the same type.
    Use ...args (type1 | type2 ) [] syntax to define rest parameters with different types.

*/
