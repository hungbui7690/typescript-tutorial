export type CounterState = {
  count: number
  status: string
}

type UpdateCountAction = {
  type: 'increment' | 'decrement' | 'reset'
} // (1) literal

type CounterAction = UpdateCountAction // (2) next lesson, we will know why we need this

export const initialState: CounterState = {
  count: 0,
  status: 'Pending...',
}

export const counterReducer = (
  state: CounterState,
  action: CounterAction // (3a)
): CounterState => {
  // (3b)
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }
    default:
      return state
  }
}
