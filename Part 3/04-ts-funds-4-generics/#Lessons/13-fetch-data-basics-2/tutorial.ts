/*
  Fetch Data

*/

const url = 'https://www.course-api.com/react-tours-project' // can mess up with the url to see 404 err

async function fetchData(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)
    return []
  }
}

const tours = await fetchData(url) // the problem here is tours = any >> because ts doesn't know what we're getting back

// problem appears when we try to iterate over the tours
// tours.map((tour) => {
//   console.log(tour.name)
// })

// to fix, we need to use "any" > but it's NOT GOOD
// when working with TS, we need to provide the shape of the data >> we will do in the next challenge
tours.map((tour: any) => {
  console.log(tour.name)
})

////////////////////////////
// return empty array
// throw error in catch block
// we are not setting state values in this function
