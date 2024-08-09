/*
  Fetch Data - Gotcha


*/

const url = 'https://www.course-api.com/react-tours-project'

type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
  something: boolean // 1. what if we add new stuff here
}

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Tour[] = await response.json()
    console.log(data)
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)

    return []
  }
}

const tours = await fetchData(url)

tours.map((tour) => {
  console.log(tour.something) // 2. returns "undefined" -> TS does not complain, and we can still select it
})

// TS can check for the issue at build time -> but at runtime, there's no way for TS to check for the result > in the next lesson, we will use a library called Zod to help us check at runtime
