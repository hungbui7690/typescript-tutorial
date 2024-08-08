/*
  ZOD Library
  - npm install zod


  - https://zod.dev/
    > Error Handling in Zod: https://zod.dev/ERROR_HANDLING

*/

import { z } from 'zod' // (1)

const url = 'https://www.course-api.com/react-tours-project'

// (2) use zod to create schema
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
})

type Tour = z.infer<typeof tourSchema> // (3) extract the inferred type

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const rawData: Tour[] = await response.json() // (4a)
    const result = tourSchema.array().safeParse(rawData) // (4b)

    // (4c) safeParse() throw the err to catch block > we need to catch it ourselves
    if (!result.success) {
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
