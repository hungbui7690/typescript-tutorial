import { createContext } from 'react'

// const Context = createContext(undefined) // no type, TS will yell when we setup "value" below
const ThemeProviderContext = createContext<string | undefined>(undefined) // (1) <type> = type of "value"

// (2a) {children} == React.ReactNode > as we learned from the props lesson
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // (2b) passing value
  return (
    <ThemeProviderContext.Provider value={'hello'}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
