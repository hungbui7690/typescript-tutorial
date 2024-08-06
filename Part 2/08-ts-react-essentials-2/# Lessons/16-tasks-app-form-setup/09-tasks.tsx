/*
  Challenge - Task Application - Form
  - Create a form with a single input.
  - Set up a controlled input.
  - Set up a form submit handler and ensure it checks for empty values.

*/

import { useState } from 'react'
import { type Task } from './task'
import Form from './components/Form'
import List from './components/List'

function Component() {
  const [tasks, setTask] = useState<Task[]>([])

  return (
    <section>
      <Form />
      <List />
    </section>
  )
}
export default Component
