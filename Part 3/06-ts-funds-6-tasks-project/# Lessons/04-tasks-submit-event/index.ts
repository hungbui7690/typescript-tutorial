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

// we don't use non-null assertion above -> then use optional chaining here
taskForm?.addEventListener('submit', (e) => {
  e.preventDefault() // hover -> event has the type of SubmitEvent

  const taskDescription = formInput?.value // since we don't have non null assertion above -> we need to use optional chaining here

  if (taskDescription) {
    // add task to list
    // render tasks
    // update local storage

    formInput.value = ''
    return
  }
  alert('Please enter a task description')
})
