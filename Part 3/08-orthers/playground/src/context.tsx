import { createContext, useState, useContext } from 'react'

type Theme = 'light' | 'dark' | 'system' // 1.

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
} // 4.

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
) // 5. ThemeProviderState

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
} // 6. 05-context-api

// prettier-ignore
export function ThemeProvider({ children, defaultTheme = 'system'}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme) // 2. Theme -> not ThemeProvideState

  // 3. value -> error
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
