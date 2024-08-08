/*
  Tasks - Check Box

*/

const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const taskListElement = document.querySelector<HTMLUListElement>('.list')

type Task = {
  description: string
  isCompleted: boolean
}

const tasks: Task[] = loadTasks()

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

tasks.forEach((task) => renderTask(task))

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskDescription = formInput?.value
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }
    addTask(task) // add task to list
    renderTask(task) // render tasks

    updateStorage() // update local storage

    formInput.value = ''
    return
  }
  alert('Please enter a task description')
})

function addTask(task: Task): void {
  tasks.push(task)
  console.log(tasks)
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description

  // (1) checkbox
  const taskCheckbox = document.createElement('input')
  taskCheckbox.type = 'checkbox'
  taskCheckbox.checked = task.isCompleted

  // (3) toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    updateStorage()
  })

  taskElement.appendChild(taskCheckbox) // (2)

  taskListElement?.appendChild(taskElement)
}
