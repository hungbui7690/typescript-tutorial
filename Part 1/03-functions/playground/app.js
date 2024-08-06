/*
  Functions
  - are the building blocks of readable, maintainable, and reusable code.
  - Like JavaScript, you use the function keyword to declare a function in TypeScript:

        function name(parameter: type, parameter:type,...): returnType {
          // do something
        }

  - Unlike JavaScript, TypeScript allows you to use type annotations in parameters and return the value of a function.

*/
// Let’s see the following add() function example:
function add(a, b) {
    return a + b;
}
/*
  In this example, the add() function accepts two parameters with the number type.

  When you call the add() function, the TypeScript compiler will check each argument passed to the function to ensure that they are numbers.

  In the add() function example, you can only pass numbers into it, not the values of other types.
*/
// The following code will result in an error because it passes two strings instead of two numbers into the add() function:
var sum = add('10', '20');
