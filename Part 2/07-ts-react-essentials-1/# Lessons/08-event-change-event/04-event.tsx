/*
  Events
  - inline function infers object type

  - When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in your case, you're telling TypeScript exactly what kind of element the event is coming from. 
    > This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. 
    > For example, an HTMLInputElement has properties like value and checked that other elements don't have. 
    > By specifying the exact element type, TypeScript can help you avoid mistakes and write safer code.

  
  *** React.ChangeEvent<HTMLInputElement>

*/

import { useState } from 'react'

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  // (2) to know the type of "e" > hover on "e" at the textInput
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  return (
    <section>
      <h2>events example</h2>
      <form className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)} // *** hover on "e"
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange} // (1)
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  )
}

export default Component
