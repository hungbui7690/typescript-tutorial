/*
  for
  - The following shows the syntax of the TypeScript for loop statement:

        for(initialization; condition; expression) {
          // statement
        }

  - All three expressions in the for loop statement are optional. It means that you can use the for loop statement like this:

        for(;;) {
            // do something
        }

  - TypeScript allows you to omit the loop body completely as follows:

        for(initialization; condition; expression)

  - However, it is rarely used in practice because it makes the code more difficult to read and maintain.


*/

// optional block
// The following example shows the same output as the above example. However, the for doesn’t have the initialization block:
let i = 0
for (; i < 10; i++) {
  console.log(i)
}

// Like the initialization block, you can omit the condition block.
// However, you must escape the loop when a condition is met by using the if and break statements. Otherwise, you will create an infinite loop that causes the program to execute repeatedly until it is crashed.
for (let i = 0; ; i++) {
  console.log(i)
  if (i > 9) break
}

// The following example illustrates a for loop that omits all three blocks:
let j = 0
for (;;) {
  console.log(i)
  j++
  if (j > 9) break
}

/*
  How it works:

    First, declare a loop counter i and initialize it to 0 before entering the for.
    Then, in each loop iteration, output i to the console, increment it by one, and break out of the loop if i is greater than 9.
*/
