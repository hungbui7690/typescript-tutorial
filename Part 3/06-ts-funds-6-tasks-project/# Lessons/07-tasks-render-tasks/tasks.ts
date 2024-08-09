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

const tasks: Task[] = []

function addTask(task: Task): void {
  tasks.push(task)
}

// (1) Render Task
function renderTask(task: Task): void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description
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
    renderTask(task) // (2) render tasks

    // update local storage

    formInput.value = ''
    return
  }
  alert('Please enter a task description')
})
