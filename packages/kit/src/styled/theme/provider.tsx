import React, { ReactNode } from "react"

import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeHook,
} from "styled-components"
import { Theme, light } from "./theme"
import GlobalStyles from "../../global"

export function ThemeProvider ({ children, theme }: { children: ReactNode, theme: Theme }) {
  return (
    <StyledThemeProvider theme={theme ?? light}>
      <GlobalStyles/>
      {children}
    </StyledThemeProvider>
  )
}

export function ThemeProviderWithBootstrap ({ children, theme }: { children: ReactNode, theme: Theme }) {
  if (theme.name === "bs") {
    return (
      <StyledThemeProvider theme={theme ?? light}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
        {children}
      </StyledThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export const useTheme = () => useThemeHook() as Theme
