/*
  main
    h2 
    form.form
      input.form-input
      button.btn
    ul.list
    button.test-btn


*/

const taskForm = document.querySelector('.form') as HTMLFormElement
const formInput = document.querySelector('.form-input') as HTMLInputElement
const taskListElement = document.querySelector('.list') as HTMLUListElement

type Task = {
  description: string
  isCompleted: boolean
}

const tasks: Task[] = loadTasks()

tasks.forEach(renderTask)

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTask(task: Task): void {
  tasks.push(task)
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description

  // 1. create checkbox
  const taskCheckbox = document.createElement('input')
  taskCheckbox.type = 'checkbox'
  taskCheckbox.checked = task.isCompleted

  // 2. toggle checkbox -> test in Application -> Local Storage
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted
    updateStorage()
  })

  // 3.
  taskElement.appendChild(taskCheckbox)

  taskListElement?.appendChild(taskElement)
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskDescription = formInput?.value

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }
    addTask(task)
    renderTask(task)
    updateStorage()

    formInput.value = ''
    return
  }
  alert('Please enter a task description')
})
