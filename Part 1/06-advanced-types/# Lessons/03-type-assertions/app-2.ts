/*
  Type Assertions


*/

// Type assertion using the <> operator

// Besides the as keyword, you can use the <> operator to perform a type assertion. For example:
let input1 = <HTMLInputElement>document.querySelector('input[type="text"]') // Method 1
let input2 = document.querySelector<HTMLInputElement>('input[type="text"]') // Method 2: don't know why it returns null

console.log(input1.value)
console.log(input2.value)

/*
  The syntax for type assertion using the <> operator is as follows:

    let a: typeA;
    let b = <typeB>a
*/
