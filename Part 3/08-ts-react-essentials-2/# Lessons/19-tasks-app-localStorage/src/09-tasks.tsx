/*
  Local Storage
  - Incorporate LocalStorage into the application.


*/
import { useEffect, useState } from 'react'
import { type Task } from './task'
import Form from './components/Form'
import List from './components/List'

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
} // (1) Load tasks from localStorage

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
} // (2)

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks()) // (3)

  const addTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, isCompleted: !task.isCompleted }
        return task
      })
    )
  }

  useEffect(() => {
    updateStorage(tasks)
  }, [tasks]) // (4)

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  )
}
export default Component
