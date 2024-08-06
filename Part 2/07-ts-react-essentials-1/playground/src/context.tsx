import { createContext, useContext } from 'react'

/* (1) create context
    > if we don't have the type > TS will yell when we setup "value" at the Provider below
    > depends on the thing we pass in "value" > it will be the context type */
// const Context = createContext(undefined)
const ThemeProviderContext = createContext<string | undefined>(undefined)

// (2a) {children} == React.ReactNode > as we learned from the props lesson
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // (2b)
  return (
    <ThemeProviderContext.Provider value={'hello'}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// (3) go to 05-context-api
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
