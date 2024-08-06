/*
  Props - Children
  - React.ReactNode
  - {type PropsWithChildren}
*/

//////////////////////
// Method 1
// import { type PropsWithChildren } from 'react' // 1a
// // 1b
// type ComponentProps = PropsWithChildren<{
//   name: string
//   id: number
// }>

//////////////////////
// Method 2
type ComponentProps = {
  name: string
  id: number
  children: React.ReactNode // (2a)
}

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {/* (2b) */}
      {children}
    </div>
  )
}

export default Component
