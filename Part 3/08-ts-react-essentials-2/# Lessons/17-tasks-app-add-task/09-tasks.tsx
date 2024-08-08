/*
  Challenge - Task Application - Add Task
  - In "index.tsx", create an "addTask" function that adds a new task to the list.
  - Pass "addTask" as a prop to "Form".
  - In "Form", set up the correct type and invoke "addTask" if the input has a value.

  *** Test by Using React Dev Tool
  
*/
import { useState } from 'react'
import { type Task } from './task'
import Form from './components/Form'
import List from './components/List'

function Component() {
  const [tasks, setTasks] = useState<Task[]>([])

  // (1a)
  const addTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  return (
    <section>
      {/* (1b) */}
      <Form addTask={addTask} />
      <List />
    </section>
  )
}
export default Component
