/*
  Challenge - Fetch Data
  - setup type and provide correct return type


*****************************
  
  - const tours = await fetchData(url) -> using await outside -> need to convert this file into a module 
    -> "module": "ESNext"


*/

const url = 'https://www.course-api.com/react-tours-project'

// 1. Define a type for the data you're fetching -> go to the url to understand the data to create type
type Tour = {
  id: string
  name: string
  info: string
  image: string
  price: string
}

// 2. setup return type
async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Tour[] = await response.json() // 3.
    console.log(data)
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)
    return []
  }
}

// 4,
const tours = await fetchData(url)

// this time, we don't need to use "any" here, since TS knows that "tours" has the type of Tour[]
tours.map((tour) => {
  console.log(tour.name)
})

export default tours
