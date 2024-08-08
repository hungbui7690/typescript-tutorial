/*
  RTK - Complete

*/

import { useAppSelector, useAppDispatch } from './hooks' // (1)
import { decrement, increment, reset, setStatus } from './counterSlice'

function Component() {
  const { count, status } = useAppSelector((state) => state.counter) // (2)
  const dispatch = useAppDispatch() // (3)

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className='btn-container'>
        {/* (4a) dispatch() */}
        <button onClick={() => dispatch(increment())} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        {/* (4b) */}
        <button onClick={() => dispatch(setStatus('active'))} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => dispatch(setStatus('inactive'))}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  )
}
export default Component
