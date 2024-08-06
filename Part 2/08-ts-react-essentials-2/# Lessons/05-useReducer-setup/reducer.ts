export type CounterState = {
  count: number
  status: string
} // (1)

export const initialState: CounterState = {
  count: 0,
  status: 'Pending...',
} // (2)

export const counterReducer = (
  state: CounterState,
  action: any
): CounterState => {
  return state
} // (3)
