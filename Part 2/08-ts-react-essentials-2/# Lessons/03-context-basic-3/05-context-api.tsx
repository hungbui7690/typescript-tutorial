/*
  Context

  (1) context.tsx

*/

import { useTheme, ThemeProvider } from './context'

function ParentComponent() {
  // return <Component /> // (3) turn on this line will show the error we setup in useTheme()

  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

function Component() {
  const context = useTheme()
  console.log(context)

  return (
    <div>
      <h2>random component</h2>
    </div>
  )
}
export default ParentComponent
