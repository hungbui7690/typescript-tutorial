/*
  Context
  - as we learned so far, we wrap the "context provider" on the App.tsx or in the main.tsx
    -> but here, we put everything in this file, so it's easy to follow


**************************

  1. context.tsx


*/

import { useTheme, ThemeProvider } from './context'

// 2. normally, we will wrap <ThemeProvider> in main.tsx or index.tsx -> this component is used to wrap Provider on <Component/>
function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

function Component() {
  const context = useTheme() // 3.
  console.log(context) // -> hello

  return (
    <div>
      <h2>random component</h2>
    </div>
  )
}
export default ParentComponent
