/*
  Component Return
  - TypeScript infers JSX.Element, helps if no return


*******************************

  1. import to App.js
  2. 01-return.tsx


*******************************

  - it comes down to our ref 
    -> if we want to have the return type 
    -> we also don't need the return type as well


*/

// 1. TS infer return type -> hover over the function -> JSX.Element
// function Component() {
//   return (
//     <div>
//       <h2>React & Typescript</h2>
//     </div>
//   )
// }

// 2. Because we don't set return type -> we can return string, but not JSX -> no error in this case
// function Component() {
//   return 'hello'
// }

// 3. We should set the return type in order to prevent return bs thing
// function Component(): JSX.Element {
//   // return 'hello' // err
//   // return null

//   return (
//     <div>
//       <h2>React & Typescript</h2>
//     </div>
//   )
// }

// 4. Union Type
function Component(): JSX.Element | string | null {
  return (
    <div>
      <h2>React & Typescript</h2>
    </div>
  )

  return 'hello'
  return null
}

export default Component
