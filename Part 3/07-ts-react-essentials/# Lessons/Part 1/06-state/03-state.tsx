/*
  State
  - typescript infers primitive types


**************************

  -> []                     -> never
  -> useState([])           -> never[]
  -> useState<string[]>([]) -> string[]


*/

import { useState } from 'react'

function Component() {
  const [text, setText] = useState('shakeAndBake') // TS infers the primitives -> string
  const [number, setNumber] = useState(1) // -> number
  const [list, setList] = useState<string[]>([]) // empty array -> never -> generic to prevent this -> string[]

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
