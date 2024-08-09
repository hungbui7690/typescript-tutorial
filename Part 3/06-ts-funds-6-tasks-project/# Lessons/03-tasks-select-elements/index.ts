/*
  main
    h2 
    form.form
      input.form-input
      button.btn
    ul.list
    button.test-btn


*/

const taskForm = document.querySelector('.form') as HTMLFormElement // we don't use non-null assertion here
const formInput = document.querySelector('.form-input') as HTMLInputElement
const taskListElement = document.querySelector('.list') as HTMLUListElement

// setup shape of our data -> we can use "interface" or "type alias"
type Task = {
  description: string
  isCompleted: boolean
}

const tasks: Task[] = []
