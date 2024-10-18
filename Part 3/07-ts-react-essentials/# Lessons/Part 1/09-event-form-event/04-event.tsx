/*
  Events - Form Events
  - The FormData API is a web technology that allows developers to easily construct and manage sets of key/value pairs representing form fields and their values. 
  - It is commonly used to send form data, including files, from a client (such as a web browser) to a server in a format that can be easily processed. 
  - The FormData API provides a way to programmatically create and manipulate form data, making it useful for AJAX requests and handling file uploads in web applications.


*******************************

  🎫 controlled inputs: inputs that have onChange


*******************************

  - React.ChangeEvent<HTMLInputElement>
  - React.FormEvent<HTMLFormElement>


*******************************

  Method 1:
  - const formData = new FormData(e.currentTarget) 
    -> if we use <e.currentTarget> -> it works

  Method 2:
  - const formData = new FormData(e.target) 
    -> but if we use <e.target> -> it won't work
  - const formData = new FormData(e.target as HTMLFormElement)
    -> need to use <type-assertion> if we use "e.target"


*******************************

  const data = Object.fromEntries(formData)
  -> fromEntries() -> NOT entries()


*******************************

  - if we want to use FormData API -> inputs must have "name" attribute
    -> that's what we use to get data from 


*/

import { useState } from 'react'

// 1.
type Person = {
  name: string
}

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // a.

    const formData = new FormData(e.currentTarget) // b.
    const data = Object.fromEntries(formData)
    console.log(data)

    // const text = formData.get('text') // it shows err
    const text = formData.get('text') as string // c. we know that this is string

    const person: Person = { name: text } // 2.
  }

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  )
}
export default Component
