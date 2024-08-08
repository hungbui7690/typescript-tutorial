/*
  Extract Examples


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 2: Get a member of a discriminated union
// A discriminated union type is one where each member has a discriminant property. The discriminant property is a common property that can be used to discriminate between the other members. In the example above, the type property is used to discriminate between the different shapes.
type Shape =
  | {
      type: 'square'
      size: number
    }
  | {
      type: 'circle'
    }
  | {
      type: 'triangle'
    }

// We can extract a member of the discriminated union by using Extract like this:
type SquareShape = Extract<Shape, { type: 'square' }> // { type: 'square', size: number }

// We can also extract multiple members of a discriminated union:
type SquareAndCircleShape = Extract<
  Shape,
  { type: 'square' } | { type: 'circle' }
>
// { type: 'square' } | { type: 'circle' }

type SquareAndCircleShapeX = Extract<Shape, { type: 'square' | 'circle' }>
// {type: 'square'; size: number;} | { type: 'circle' }
