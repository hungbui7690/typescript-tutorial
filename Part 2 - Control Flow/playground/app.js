/*
  never
  - is used to represent a value that never occurs. Because of this, you cannot assign any value to a variable with a never type.

*/
// Typically, you use the never type to represent the return type of a function that always throws an error
function raiseError(message) {
    throw new Error(message);
}
// If you have a function that contains an indefinite loop, its return type should be never type. For example:
function forever() {
    while (true) { }
}
/*
  In this example, the type of the return type of the forever() function is never.

  Variables can also acquire the never type when you narrow its type by a type guard that can never be true.
*/
// For example, without the never type, the following function causes an error because not all code paths return a value:
function fn(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
} // Function lacks ending return statement and return type does not include 'undefined'.
