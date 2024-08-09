/*
  ZOD Library
  - https://zod.dev/
  - Error Handling in Zod: https://zod.dev/ERROR_HANDLING

  ~~ npm install zod


******************************

  - .safeParse -> If you don't want Zod to throw errors when validation fails, use .safeParse. This method returns an object containing either the successfully parsed data or a ZodError instance containing detailed information about the validation problems.


*/

// @ts-ignore
import { z } from 'zod' // 1.

const url = 'https://www.course-api.com/react-tours-project'

// 2. use zod to create schema -> id is string because get data from APIs
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
})

type Tour = z.infer<typeof tourSchema> // 3. extract the inferred type

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const rawData: Tour[] = await response.json() // 4a. get back raw data
    const result = tourSchema.array().safeParse(rawData) // 4b. parse raw data

    // 4c. safeParse does not throw error -> we need to throw error ourselves
    if (!result.success) {
      console.log(result.error)
      throw new Error(`Invalid data: ${result.error}`)
    }

    return result.data
  } catch (error) {
    let errMsg =
      error instanceof Error ? error.message : 'there was an error...'

    return []
  }
}

const tours = await fetchData(url)
tours.map((tour) => {
  console.log(tour.name)
})
