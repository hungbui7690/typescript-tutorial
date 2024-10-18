/*
  Challenge - Task Application - Setup
  - because we're working with TS > types is the first thing we need to create

    (1) create ./types.ts
        - Export a type named "Task" with the following properties:
          - "id: string"
          - "description: string"
          - "isCompleted: boolean"
    (2) create components/Form.tsx & List.tsx
    (3) in this file, import "Task" type  and set up a state value of type "Task[]".
    (4) Also, import and render "Form" and "List" in this file.
    (5) In "index.tsx", import "Task" type and set up a state value of type "Task[]".
    (6) Also, import and render "Form" and "List" in "index.tsx".

    
*/
import { useState } from 'react'
import { type Task } from './task'
import Form from './components/Form'
import List from './components/List'

function Component() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <section>
      <Form />
      <List />
    </section>
  )
}
export default Component
