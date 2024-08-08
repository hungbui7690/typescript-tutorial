/*
  NonNullable
  - NonNullable utility type lets you to create a new type by excluding null and undefined from a given type.


*/

type NullableString = string | null | undefined

type NonNullableString = NonNullable<NullableString> // type NonNullableString = string;

const str1: NullableString = null
const str2: NonNullableString = 'hello'
const str3: NonNullableString = null // Error: Type 'null' is not assignable to type 'string'.
