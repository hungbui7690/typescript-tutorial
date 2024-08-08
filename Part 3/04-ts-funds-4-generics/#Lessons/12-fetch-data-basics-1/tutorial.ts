/*
  Fetch Data
  - typically, we use React and Axios 
    > because React is good at infer the type 🚀🚀🚀

  - but first we need to learn fetch first
  - we won't set any state values

*/

const url = 'https://www.course-api.com/react-tours-project'

async function fetchData(url: string) {
  try {
    const response = await fetch(url)

    // Check if the request was successful > because fetch does not catch for 404 or similar err > it just show err when there is network err
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)
  }
}

fetchData(url)
