/*
  Fetch Data - useEffect vs Fetch API
  - reference data fetching in typescript-tutorial

    Zod: https://zod.dev/
    React Query: https://tanstack.com/query/latest/docs/framework/react/overview
    Axios: https://axios-http.com/docs/intro


  > npm i zod axios @tanstack/react-query

*/

import { useState, useEffect } from 'react'

const url = 'https://www.course-api.com/react-tours-project'

function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false) // (1a)
  const [isError, setIsError] = useState<string | null>(null) // (1b) this will be the error string (not true / false)

  useEffect(() => {
    // (2)
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`)
        }

        const rawData = await response.json()
        console.log(rawData)
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
    </div>
  )
}
export default Component
