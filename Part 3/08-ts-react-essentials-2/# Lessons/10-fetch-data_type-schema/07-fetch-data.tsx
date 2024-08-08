/*
  Fetch Data - Types & Schema
  - we will use zod > check data at runtime

  (1) create types.ts

  *** normally, we don't use zod too often 
    > we just create types based on the data 
    > if we want to work on something special > that's when we need to use zod

*/

import { useState, useEffect } from 'react'
import { type Tour, tourSchema } from './types' // (2)

const url = 'https://www.course-api.com/react-tours-project'

function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | null>(null)

  const [tours, setTours] = useState<Tour[]>([]) // (3)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`)
        }

        const rawData: Tour[] = await response.json() // (4)
        const result = tourSchema.array().safeParse(rawData) // (5)

        // (6)
        if (!result.success) {
          console.log(result.error.message)
          throw new Error(`Failed to parse tours`)
        } else setTours(result.data)
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'there was an error...'
        setIsError(message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <h3>Error: {isError}</h3>
  }

  return (
    <div>
      <h2 className='mb-1'>Tours</h2>
      {tours.map((tour) => {
        // (7)
        return (
          <p key={tour.id} className='mb-1'>
            {tour.name}
          </p>
        )
      })}
    </div>
  )
}
export default Component
