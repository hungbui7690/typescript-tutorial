/*
  Context
  - as we learned so far, we wrap the context provider on the App or in the main.tsx
    > but here, we put everything in this file, so it's easy to follow

*/

import { useTheme, ThemeProvider } from './context'

// (2) this component is used to wrap Provider on <Component/>
function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

function Component() {
  const context = useTheme() // (3)
  console.log(context)

  return (
    <div>
      <h2>random component</h2>
    </div>
  )
}
export default ParentComponent
