import { useState } from 'react'
import { type Task } from '../task'

const Form = () => {
  const [text, setText] = useState('') // (1a)

  // (2)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter a task')
      return
    }

    console.log(text)
    setText('')
  }

  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-input'
        value={text}
        onChange={(e) => setText(e.target.value)} // (1b)
      />
      <button className='btn'>Add Task</button>
    </form>
  )
}

export default Form
