/*
  Component Return
  - TypeScript infers JSX.Element, helps if no return


  *** 01-return.tsx
  *** import to App.js

  - it comes down to our ref 
    > if we want to have the return type 
    > we also don't need the return type as well

*/

//////////////////////////
// (1) TS infer return type > hover over the function > JSX.Element
// function Component() {
//   return (
//     <div>
//       <h2>React & Typescript</h2>
//     </div>
//   )
// }

//////////////////////////
// (2) no error in this case > because we don't set return type
// function Component() {
//   return 'hello'
// }

//////////////////////////
// (3) we should set the return type in order to prevent return bs thing
// function Component(): JSX.Element {
//   // return 'hello' // err
//   // return null

//   return (
//     <div>
//       <h2>React & Typescript</h2>
//     </div>
//   )
// }

//////////////////////////
// (4) union
function Component(): JSX.Element | string | null {
  return 'hello'
  return null

  return (
    <div>
      <h2>React & Typescript</h2>
    </div>
  )
}

export default Component
