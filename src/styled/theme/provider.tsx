import React, { ReactNode } from 'react'

import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeHook,
} from 'styled-components'
import { Theme, light } from './theme'
import GlobalStyles from '../../global'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledThemeProvider theme={light}>
      <GlobalStyles/>
      {children}
    </StyledThemeProvider>
  )
}

export const useTheme = () => useThemeHook() as Theme
  