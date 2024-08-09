/*
  Fetch Data
  - typically, we use React and Axios 
    -> because React is good at infer the type 🚀🚀🚀
  - but first we need to learn fetch first
  - we won't set any state values


*/

const url = 'https://www.course-api.com/react-tours-project'

async function fetchData(url: string) {
  try {
    // 1.
    const response = await fetch(url)

    // 2. Check if the request was successful -> because fetch does not catch for 404 or similar err -> it just show err when there is network err
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // 3.
    const data = await response.json()
    console.log(data)
  } catch (error) {
    // 4.
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)
  }
}

fetchData(url)
