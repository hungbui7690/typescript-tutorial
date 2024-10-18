/*
  useReducer - Setup
  - alt: RTK, ZooStand

  (1) create reducer.ts

*/

import { useReducer } from 'react'
import { counterReducer, initialState } from './reducer'

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState) // (4)
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>
    </div>
  )
}

export default Component
