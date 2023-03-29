import React, { createContext, useState, useContext } from 'react'

import { IChildren } from '../utils/children.utils'

// Themes
import darkTheme from '../styles/themes/dark.theme'
import lightTheme from '../styles/themes/light.theme'

interface IThemeContext {
  toggleTheme(): void
  theme: ITheme
}

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

export const useThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: React.FC<IChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(darkTheme)

  const toggleTheme = () => {
    if (theme.title === 'darkTheme') {
      setTheme(lightTheme)
    } else {
      setTheme(darkTheme)
    }
  }

  return (
    <useThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </useThemeContext.Provider>
  )
}

export const useTheme = (): IThemeContext => {
  const context = useContext(useThemeContext)

  return context
}
