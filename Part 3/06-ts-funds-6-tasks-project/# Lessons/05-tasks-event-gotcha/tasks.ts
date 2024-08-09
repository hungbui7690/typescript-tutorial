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

// (1) when we use cb fn in addEventListener() > TS knows that "e" is SubmitEvent
// > but now, when we pass the ref like this, TS does not know what is the type of "e" > we need to use type annotation here
function createTask(e: SubmitEvent) {
  e.preventDefault()
  const taskDescription = formInput?.value

  if (taskDescription) {
    // add task to list
    // render tasks
    // update local storage

    formInput.value = ''
    console.log('abc')
    return
  }

  alert('Please enter a task description')
}

taskForm?.addEventListener('submit', createTask) // (2)
