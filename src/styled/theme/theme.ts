
export interface Theme {
  size: number,
  palette: {
    black: string
    white: string
    primary: string
    secondary: string
    active: string
    success: string
    warn: string
    danger: string
  }
  space: {
    node: number
    xxxs: number
    xxs: number
    xs: number
    m: number
    xl: number
    xxl: number
    xxxl: number
  }
  lightness: {
    lightest: number
    lighter: number
    light: number
    dark: number
    darker: number
    darkest: number
  },
  fontSize: {
    small: number
    standard: number
    large: number
  }
}

export const light: Theme = {
  size: 16,
  palette: {
    black: '#000',
    white: '#fff',
    primary: '#0500ff',
    secondary: '#b600ff',
    active: '#009fff',
    success: '#00ff97',
    warn: '#faff00',
    danger: '#ff0000',
  },
  space: {
    node: 0,
    xxxs: 1,
    xxs: 3,
    xs: 5,
    m: 10,
    xl: 20,
    xxl: 40,
    xxxl: 100,
  },
  lightness: {
    lightest: -0.5,
    lighter: -0.25,
    light: -0.1,
    dark: 0.1,
    darker: 0.25,
    darkest: 0.5,
  },
  fontSize: {
    small: 0.75,
    standard: 1,
    large: 2
  }
}

export const dark: Theme = {
  size: 16,
  palette: {
    black: '#fff',
    white: '#000',
    primary: '#b600ff',
    secondary: '#0500ff',
    active: '#009fff',
    success: '#00ff97',
    warn: '#faff00',
    danger: '#ff0000',
  },
  space: {
    node: 0,
    xxxs: 1,
    xxs: 3,
    xs: 5,
    m: 10,
    xl: 20,
    xxl: 40,
    xxxl: 100,
  },
  lightness: {
    lightest: -0.5,
    lighter: -0.25,
    light: -0.1,
    dark: 0.1,
    darker: 0.25,
    darkest: 0.5,
  },
  fontSize: {
    small: 0.75,
    standard: 1,
    large: 2
  }
}