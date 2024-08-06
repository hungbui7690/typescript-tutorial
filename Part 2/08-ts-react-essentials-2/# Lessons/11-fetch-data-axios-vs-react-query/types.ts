import { z } from 'zod'
import axios from 'axios'

const url = 'https://www.course-api.com/react-tours-project'

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // someValue: z.string(), // uncomment this will cause error
})

export type Tour = z.infer<typeof tourSchema>

// (1) async > return Promise
export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url)
  console.log(response)
  const result = tourSchema.array().safeParse(response.data)
  if (!result.success) {
    throw new Error('Parsing failed')
  }
  return result.data
}
