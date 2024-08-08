import { configureStore } from '@reduxjs/toolkit' // (1)
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// (2) this setup is because we use TS > hooks.ts
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
