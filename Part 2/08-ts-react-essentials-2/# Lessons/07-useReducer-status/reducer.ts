export type CounterState = {
  count: number
  status: string
}

export const initialState: CounterState = {
  count: 0,
  status: 'Pending...',
}

type UpdateCountAction = {
  type: 'increment' | 'decrement' | 'reset'
}
type SetStatusAction = {
  type: 'setStatus'
  payload: 'active' | 'inactive'
} // (1)

type CounterAction = UpdateCountAction | SetStatusAction // (2)

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { ...state, count: 0 }

    // (4) this one needs payload > 06-reducer.tsx
    case 'setStatus':
      return { ...state, status: action.payload }

    // default: // this is normal set up > but with this, if there are more actions > it will fail
    //   return state

    default: // (6) exhaustive check > with this, it will create err at build time when we add more actions above, but forget to add here
      const unhandledActionType: never = action
      throw new Error(
        `Unexpected action type: ${unhandledActionType}. Please double check the counter reducer.`
      )
  }
}
