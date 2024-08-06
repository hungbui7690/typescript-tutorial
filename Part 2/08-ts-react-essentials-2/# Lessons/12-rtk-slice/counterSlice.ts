import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' // *** this is the type we will use in RTK

type CounterStatus = 'active' | 'inactive' | 'pending...' // (1)

type CounterState = {
  count: number
  status: CounterStatus
} // (2)

const initialState: CounterState = {
  count: 0,
  status: 'pending...',
} // (3)

// (4)
export const counterSlice = createSlice({
  name: 'counter',
  initialState, // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },

    // *** when we set the status, we need to provide the value ('active' | 'inactive' | 'pending...')
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload
    },
  },
})

export const { increment, decrement, reset, setStatus } = counterSlice.actions // (6)

export default counterSlice.reducer // (5)
