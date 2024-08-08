/*
  Extract
  - The opposite to Exclude is Extract utility type that allows you to pick a or multiple members from an union:


*/

type NumberOrString = number | string | boolean
type OnlyNumber = Extract<NumberOrString, number> // same as:  type OnlyNumber = number;
