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

// 1.
function addTask(task: Task): void {
  tasks.push(task)
  // console.log(tasks);
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskDescription = formInput?.value

  // 2.
  if (taskDescription) {
    // create task
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    }
    // add task to list
    addTask(task)
    console.log(tasks)

    // render tasks
    // update local storage

    // reset field
    formInput.value = ''

    return
  }
  alert('Please enter a task description')
})
