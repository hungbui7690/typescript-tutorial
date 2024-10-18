import { createContext } from 'react'

// 1. no type, TS will yell when we setup "value" below
// const ThemeProviderContext = createContext(undefined)

// 2. <type> = type of "value"
const ThemeProviderContext = createContext<string | undefined>(undefined) //

// 3. children -> React.ReactNode -> as we learned from the props lesson
// export function ThemeProvider(props: { children: React.ReactNode }) {
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // 4. passing value
  return (
    <ThemeProviderContext.Provider value={'hello'}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
