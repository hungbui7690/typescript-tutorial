/*
  State
  - typescript infers primitive types


  - by default:
    > [] is type never
    > useState([]): this has type of "never"
  - to fix: 
    > useState<string[]>([])

*/

import { useState } from 'react'

function Component() {
  const [text, setText] = useState('shakeAndBake') // TS infers the primitives > text + setText has type of string
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([]) // empty array > type = "never" > we use generic to prevent this

  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setText(1) // err
          // setNumber('hello') // err
          // setList([1, 3]) // err
          setList(['hello', 'world'])
        }}
      >
        click me
      </button>
    </div>
  )
}
export default Component
