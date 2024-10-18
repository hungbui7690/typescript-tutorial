import { z } from 'zod'
import axios from 'axios'
const url = 'https://course-api.com/react-tours-project'

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
  // someValue: z.string(), // uncomment this will cause error
})

export type Tour = z.infer<typeof tourSchema> // (1)
