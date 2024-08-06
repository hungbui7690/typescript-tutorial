/*
  Props - Type Alias / Interface
  - we can setup "type or interface"
  - at the params:
    > we can use "props" or {name, id}

*/

type ComponentProps = {
  name: string
  id: number
} // type alias

// usage
function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  )
}

export default Component
