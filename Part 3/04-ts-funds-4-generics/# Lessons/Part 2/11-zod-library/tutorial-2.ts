/*
  ZOD Library
  - result.success
  - result.error


*/

// @ts-ignore
import { z } from 'zod'

const url = 'https://www.course-api.com/react-tours-project'

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.string(), // after add this -> error will be triggered -> result.success === false -> we check the err at run time -> not build time
})

type Tour = z.infer<typeof tourSchema>

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const rawData: Tour[] = await response.json()
    const result = tourSchema.array().safeParse(rawData)

    if (!result.success) {
      // console.log(result.error)
      throw new Error(`Invalid data: ${result.error}`)
    }

    return result.data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.log(errMsg)

    return []
  }
}

const tours = await fetchData(url)
tours.map((tour) => {
  console.log(tour.name)
})
