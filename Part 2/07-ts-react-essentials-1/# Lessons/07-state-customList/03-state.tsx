/*
  State

*/

import { useState } from 'react'

type Link = {
  id: number
  url: string
  text: string
}

///////////////////////
// *** if we remove the type > now, ts will infer the type based on data > and if we remove "text" property > type will become union
// const navLinks = [
//   { id: 1, url: 'https://reactjs.org', text: 'react docs' },
//   {
//     id: 3,
//     url: 'https://reacttraining.com',
//   },
// ]

const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    text: 'react training', // remove text property to see the error > must follow the type
  },
]

function Component() {
  const [text, setText] = useState('shakeAndBake')
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([])

  const [links, setLinks] = useState<Link[]>(navLinks) // *** this is a good use case for generic class

  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setLinks([...links, { id: 4, url: 'hello', someValue: 'hello' }]) // err
          setLinks([...links, { id: 4, url: 'hello', text: 'hello' }])
        }}
      >
        click me
      </button>
    </div>
  )
}
export default Component
