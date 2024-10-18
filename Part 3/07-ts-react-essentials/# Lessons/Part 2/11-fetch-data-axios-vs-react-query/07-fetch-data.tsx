/*
  Fetch Data - Axios vs React Query
    (1) types.ts

  - Note: 
    > sometimes, when we works with Axios to fetch data, it returns Network Error though there's no error
    > it is because of the url
      + url = 'https://course-api.com/react-tours-project'
    > we should add "www."  
      + url = 'https://www.course-api.com/react-tours-project'

*/

import { fetchTours } from './types'
import { useQuery } from '@tanstack/react-query'

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  }) // (2) with react query, we don't need useEffect anymore

  if (isPending) return <h2>Loading...</h2>
  if (isError) return <h2>Error : {error.message} </h2>

  return (
    <div>
      <h2 className='mb-1'>Tours </h2>
      {tours.map((tour) => {
        return (
          <p className='mb-1' key={tour.id}>
            {tour.name}
          </p>
        )
      })}
    </div>
  )
}

export default Component
