import { FontStyle } from "../types"

const GOLDEN_RATIO = 1.618033
const GOLDEN_FRICTION = 10
const golden = (n: number) => Math.round(Math.pow(GOLDEN_RATIO, n) * GOLDEN_FRICTION) / GOLDEN_FRICTION / 16

export interface Theme {
  size: number,
  bgName: keyof Theme['palette']
  palette: {
    body: string
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
    xxxs: number
    xxs: number
    xs: number
    s: number
    m: number
    l: number
    xl: number
    xxl: number
    xxxl: number
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
  borderSizes: {
    1: number
    2: number
    3: number
  }
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
    body: '#D8F9F0',
    black: '#17363B',
    white: '#FFFFFF',
    primary: '#17363B',
    secondary: '#12DB8B',
    active: '#0087F5',
    success: '#0C9C62',
    warn: '#FF6D00',
    danger: '#FF1616',
  },
  borderSizes: {
    1: 1,
    2: 2,
    3: 3,
  },
  spacing: {
    none: 0,
    xxxs: golden(1),
    xxs: golden(2),
    xs: golden(3),
    s: golden(4),
    m: golden(5),
    l: golden(6),
    xl: golden(7),
    xxl: golden(8),
    xxxl: golden(9),
  },
  round: {
    none: 0,
    xxs: 1,
    xs: 2,
    s: 3,
    m: 4,
    l: 5,
    xl: 6,
    xxl: 10,
    circle: 10000
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
      weight: 700,
      lineHeight: 5,
      decor: "upper"
    },
    heading2: {
      family: "SuisseIntl",
      size: 2,
      weight: 700,
      lineHeight: 4,
      decor: "start"
    },
    heading3: {
      family: "SuisseIntl",
      size: 1.5,
      weight: 500,
      lineHeight: 3,
      decor: "start"
    },
    default: {
      family: "SuisseIntl",
      size: 1,
      weight: 400,
      lineHeight: 2
    },
    note: {
      family: "SuisseIntl",
      size: .5,
      weight: 400,
      lineHeight: 1,
      decor: "lower"
    },
  },
}

export const dark: Theme = {
  ...light,
  bgName: "black",
  shadowColor: 'white',
  palette: {
    body: '#17363B',
    black: '#17363B',
    white: '#FFFFFF',
    primary: '#D8F9F0',
    secondary: '#12DB8B',
    active: '#0087F5',
    success: '#00ff97',
    warn: '#FF6D00',
    danger: '#FF1616',
  },
}