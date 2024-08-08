/*
  never 
  - is used to represent a value that never occurs. Because of this, you cannot assign any value to a variable with a never type.

  - Use Case: function that never returns anything
    + throws error 
    + run inf. loop


*/

// 1. Typically, you use the never type to represent the return type of a function that always throws an error
function raiseError(message: string): never {
  throw new Error(message)
}

// 2. If you have a function that contains an indefinite loop, its return type should be never type. For example:
function forever(): never {
  while (true) {}
}
/*
  In this example, the type of the return type of the forever() function is never.

  Variables can also acquire the never type when you narrow its type by a type guard that can never be true.
*/

// 3. For example, without the never type, the following function causes an error because not all code paths return a value:
function fn(a: string | number): boolean {
  if (typeof a === 'string') {
    return true
  } else if (typeof a === 'number') {
    return false
  }
}
// Function lacks ending return statement and return type does not include 'undefined'.
// If the type of a is not a string or number, then the fn function returns undefined which is not boolean as indicated in the return type.

// 4. To make the code valid, you can throw an error inside the fn function:
function fnX(a: string | number): boolean {
  if (typeof a === 'string') {
    return true
  } else if (typeof a === 'number') {
    return false
  }
  throw new Error('Invalid type')
}

// 5. Alternatively, you can define a function whose return type is never and return its call within the fn function like this:
function raiseErrorX(msg: string): never {
  throw new Error(msg)
}
function fnZ(a: string | number): boolean {
  if (typeof a === 'string') {
    return true
  } else if (typeof a === 'number') {
    return false
  }
  return raiseErrorX('Invalid type')
}
/*
  The fn function takes an argument that can be either a string or a number and returns a boolean value. The code that falls back to the raiseError shouldn’t occur given the type constraint.


  But why use raiseErrorX?
  + This helps in future-proofing the function, if you add new types to the union type of the argument, the error handling will immediately signal that the new type needs to be considered in the if statement.
  + Additionally, including raiseError clearly communicates our intent that any other type of argument a is invalid and should not happen, making the code easier to maintain.


*/

/*
  never type vs. void type

    The following table highlights the key differences between the void and never types in TypeScript:

      Aspect	              void	                                                  never
      Definition	          void type represents the absence of a return value.	    never type represents a value that never occurs.
      Use Case	            Functions that do not return a value	                  Functions that never is completed normally (raise an exception or have an indefinite loop).
      Function Behavior	    Executes completely without returning a value	          Never executes completely (throws error/infinite loop)
      Return Value	        Can return undefined	                                  Cannot return anything
      Type Inference	      Used for functions that perform actions	                Used for unreachable code paths


  Summary
  - Use the never type to represent a value that never occurs.


*/
