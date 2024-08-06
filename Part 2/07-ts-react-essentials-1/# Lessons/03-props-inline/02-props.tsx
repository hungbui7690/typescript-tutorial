/*
  Props - Inline

  (1) App.tsx
    > passing props to Component
*/

/////////////////////
// (2a)
// function Component(props: { name: string; id: number }) {
//   return (
//     <div>
//       <h1>Name : {props.name}</h1>
//       <h1>ID : {props.id}</h1>
//     </div>
//   )
// }

/////////////////////
// (2a) extract > this is the "INLINE" way > we provide the type annotation here
function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  )
}

export default Component
