/*
  RTK
  - alternative: ZusStand
  - RTK setup with TS is a pain
    > but we can take it from project to projects

  *** think slice as a functionality & store is the entire state

    (1) create counterSlice.ts

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
