/*
  Challenge - Discriminated Unions and exhaustive check using the "never" type
  - A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.
  
*/

/////////////////////////////////
// Starter
/////////////////////////////////
type IncrementAction = {
  amount: number
  timestamp: number
  user: string
}

type DecrementAction = {
  amount: number
  timestamp: number
  user: string
}

type Action = IncrementAction | DecrementAction

/*
  - Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

  - In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

  - Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

  - Use the reducer function in your application to handle actions and update the state.
*/

function reducer(state: number, action: Action) {}

const newState = reducer(15, {
  user: 'john',
  amount: 5,
  timestamp: 123456,
})

// *** we have 2 types, and how can we check for specific type? >> we can use typeof, instanceof, in... but in this case, the 2 types have the same structure >> this is when we need to use discriminated unions >> because we need unique literal value >> cont. in part 2
