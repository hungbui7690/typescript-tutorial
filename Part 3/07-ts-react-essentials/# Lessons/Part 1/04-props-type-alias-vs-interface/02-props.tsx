/*
  Props - Type Alias/Interface
  - we can setup "type or interface"
  - at the params:
    -> we can use "props" or {name, id}


*/

// 1. Setup type alias
type ComponentProps = {
  name: string
  id: number
}

// 2. Use type alias here
function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  )
}

export default Component
