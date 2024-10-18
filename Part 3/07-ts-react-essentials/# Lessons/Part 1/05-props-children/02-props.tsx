/*
  Props - Children
  - Method 1:
    ~~ import { type PropsWithChildren } from 'react'

  - Method 2:
  ~~ children -> React.ReactNode


*/

// Method 1
// import { type PropsWithChildren } from 'react' // 1a.
// type ComponentProps = PropsWithChildren<{
//   name: string
//   id: number
// }> // 1b.

// Method 2
type ComponentProps = {
  name: string
  id: number
  children: React.ReactNode // 2a.
}

// 2b. extract "children"
function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>

      {/* 2c. */}
      {children}
    </div>
  )
}

export default Component
