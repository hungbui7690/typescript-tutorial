/*
  Awaited and ReturnType combined
  - Here's an example of using ReturnType and Awaited together:


*/

async function fetchData(): Promise<string> {
  // fetch data from API and return a string
  // return Promise.resolve('hello')

  return new Promise((resolve) => {
    resolve('Hello')
  })
}

type ResolvedResult = Awaited<ReturnType<typeof fetchData>>
// type ResolvedResult = string

// In this example, we define an async function that returns a Promise of a string (Promise<string>). We then use ReturnType to extract the return type of fetchData and pass it as an argument to Awaited to unwrap the promised's resolved type.
