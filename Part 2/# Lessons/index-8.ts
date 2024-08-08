/*
  Exclude
  - Exclude utility type allows you to create a new type by removing members of an union


*/

type NumberOrString = number | string
type OnlyNumber = Exclude<NumberOrString, string> // same as: type OnlyNumber = number;

const num: OnlyNumber = 5
const str: OnlyNumber = 'hello' // Error: Type '"hello"' is not assignable to type 'number'.

// You can even exclude multiple members of an union:
type NumberStringOrBoolean = number | string | boolean
type OnlyBoolean = Exclude<NumberStringOrBoolean, string | number> // same as:  type OnlyBoolean = boolean;
