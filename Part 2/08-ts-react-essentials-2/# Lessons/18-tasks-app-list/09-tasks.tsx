/*
  Challenge - Task Application - Toggle Task
  - In "index.tsx" 
    > create a "toggleTask" function that toggles "isCompleted".
    > Pass the function and list as props to "List".

  - In "List.tsx":
    - Set up the correct type for props.
    - Render the list.
    - Set up a checkbox in each item and add an "onChange" handler.
    - Invoke the "toggleTask" functionality.


*/
import { useState } from 'react'
import { type Task } from './task'
import Form from './components/Form'
import List from './components/List'

function Component() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  // (1)
  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, isCompleted: !task.isCompleted }
        return task
      })
    )
  }

  return (
    <section>
      <Form addTask={addTask} />

      {/* (2) also need to pass tasks */}
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  )
}
export default Component
