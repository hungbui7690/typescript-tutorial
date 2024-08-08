/*
  Enum
  - An enum is a group of named constant values. Enum stands for enumerated type.

  - To define an enum, you follow these steps:

      First, use the enum keyword followed by the name of the enum.
      Then, define constant values for the enum.
*/

// 1. Enums are a way of giving friendly names to sets of numeric values. They can make code more readable and less error-prone.
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green

// 2. By default, Red is 0, Green is 1, and so on. You can also manually set values.
enum ColorX {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let cX: Color = Color.Green
