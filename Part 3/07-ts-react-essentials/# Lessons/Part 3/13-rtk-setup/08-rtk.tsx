/*
  RTK
  - type RootState represents the type of the state stored in your Redux store. 
    > ReturnType is a utility type provided by TypeScript that can get the return type of a function. 
    > store.getState is a function that returns the current state stored in the Redux store. 
    > So ReturnType<typeof store.getState> is the type of the state returned by store.getState, which is the type of the state in your Redux store.

  - type AppDispatch represents the type of the dispatch function in your Redux store. 
    > store.dispatch is the function you use to dispatch actions in Redux. 
    > typeof store.dispatch gets the type of this function. So AppDispatch is the type of the dispatch function in your Redux store.

  - How to setup RTK vs TS:
    > https://redux-toolkit.js.org/usage/usage-with-typescript


    (1) create store.ts & hooks.ts

*/

function Component() {
  return (
    <div>
      <h2>Count: 0</h2>
      <h2>Status: Pending</h2>

      <div className='btn-container'>
        <button onClick={() => console.log('increment')} className='btn'>
          Increment
        </button>
        <button onClick={() => console.log('decrement')} className='btn'>
          Decrement
        </button>
        <button onClick={() => console.log('reset')} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => console.log('active')} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => console.log('inactive')}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  )
}
export default Component
