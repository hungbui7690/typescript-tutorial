import { createContext, useContext } from 'react'

const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
) // (2) we need to change the type from string to object

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // (1) instead of string, we pass an object
  return (
    <ThemeProviderContext.Provider value={{ name: 'alex' }}>
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
