import React, { createContext, useState, useContext } from 'react'

// Utils
import { IChildren } from '../utils/children.utils'

// Themes
import darkTheme from '../styles/themes/dark.theme'
import lightTheme from '../styles/themes/light.theme'

interface ITheme {
  title: string

  colors: {
    primary: string
    secondary: string
    tertiary: string

    white: string
    black: string
    gray: string

    success: string
    info: string
    warning: string
  }
}

interface IThemeContext {
  toggleTheme: () => void
  theme: ITheme
}

export const ThemeContext = createContext<IThemeContext>({
  toggleTheme: () => {},
  theme: darkTheme,
})

export const ThemeProvider: React.FunctionComponent<IChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const savedTheme = localStorage.getItem('@financeboard:theme')

    return savedTheme ? JSON.parse(savedTheme) : darkTheme
  })

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.title === 'dark' ? lightTheme : darkTheme
    )
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): IThemeContext => useContext(ThemeContext)
