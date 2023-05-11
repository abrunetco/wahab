
type FFamilies = "SuisseIntl"
export type FontStyle = { family: FFamilies, size: number, weight: number, lineHeight: number }
export interface Theme {
  size: number,
  bgName: keyof Theme['palette']
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
  spacing: {
    none: number
    xxs: number
    xs: number
    s: number
    m: number
    l: number
    xl: number
    xxl: number
  }
  round: {
    none: number
    xxs: number
    xs: number
    s: number
    m: number
    l: number
    xl: number
    xxl: number
    circle: number
  }
  lightness: {
    lightest: number
    lighter: number
    light: number
    dark: number
    darker: number
    darkest: number
  },
  shadowColor: keyof Theme['palette']
  shadowSize: {
    none: number
    1: number
    2: number
    3: number
  },
  typography: {
    heading1: FontStyle
    heading2: FontStyle
    heading3: FontStyle
    default: FontStyle
    note: FontStyle
  }
}

export const light: Theme = {
  size: 16,
  bgName: 'white',
  shadowColor: 'black',
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
  spacing: {
    none: 0,
    xxs: .25,
    xs: .375,
    s: .5,
    m: .75,
    l: .875,
    xl: 1.25,
    xxl: 1.5,
  },
  round: {
    none: 1,
    xxs: 1,
    xs: 1,
    s: 1,
    m: 1,
    l: 1,
    xl: 1,
    xxl: 1,
    circle: 1
  },
  lightness: {
    lightest: -0.5,
    lighter: -0.25,
    light: -0.1,
    dark: 0.1,
    darker: 0.25,
    darkest: 0.5,
  },
  shadowSize: {
    none: 0,
    1: 1,
    2: 2,
    3: 3,
  },
  typography: {
    heading1: {
      family: "SuisseIntl",
      size: 4,
      weight: 100,
      lineHeight: 5
    },
    heading2: {
      family: "SuisseIntl",
      size: 2,
      weight: 100,
      lineHeight: 4
    },
    heading3: {
      family: "SuisseIntl",
      size: 1.5,
      weight: 100,
      lineHeight: 3
    },
    default: {
      family: "SuisseIntl",
      size: 1,
      weight: 100,
      lineHeight: 2
    },
    note: {
      family: "SuisseIntl",
      size: .5,
      weight: 100,
      lineHeight: 1
    },
  },
}

export const dark: Theme = {
  ...light,
  bgName: "black",
  shadowColor: 'white',
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
}