import { BoldStyle, Color, FontStyle } from "../types"

const GOLDEN_RATIO = 1.618033
const GOLDEN_FRICTION = 10

function golden (n: number) {
  return Math.round((GOLDEN_RATIO**n) * GOLDEN_FRICTION) / GOLDEN_FRICTION / 16
}

export interface Theme {
  name: string
  size: number
  bgName: Color
  defaultBtnBgName: Color
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
  alpha: {
    lightest: number
    lighter: number
    light: number
  },
  borderSizes: {
    0: number
    1: number
    2: number
    3: number
  }
  shadowColor: keyof Theme["palette"]
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
    heading4: FontStyle
    heading5: FontStyle
    heading6: FontStyle
    default: FontStyle
    note: FontStyle
    bold: FontStyle
    boldText: BoldStyle
  }
}

export const light: Theme = {
  name: "light",
  size: 16,
  bgName: "body",
  defaultBtnBgName: "secondary",
  shadowColor: "black",
  palette: {
    body: "#b0f3e1",
    black: "#17363B",
    white: "#FFFFFF",
    primary: "#17363B",
    secondary: "#12DB8B",
    active: "#0087F5",
    success: "#0C9C62",
    warn: "#FF6D00",
    danger: "#FF1616",
  },
  borderSizes: {
    0: 0,
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
    xxs: .3,
    xs: .6,
    s: 1,
    m: 2,
    l: 3,
    xl: 4,
    xxl: 5,
    circle: 1000,
  },
  lightness: {
    lightest: -0.5,
    lighter: -0.25,
    light: -0.1,
    dark: 0.1,
    darker: 0.25,
    darkest: 0.5,
  },
  alpha: {
    light: 0.5,
    lighter: 0.25,
    lightest: 0.1,
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
    heading4: {
      family: "SuisseIntl",
      size: 1.3,
      weight: 500,
      lineHeight: 3,
      decor: "start"
    },
    heading5: {
      family: "SuisseIntl",
      size: 1.2,
      weight: 500,
      lineHeight: 3,
      decor: "start"
    },
    heading6: {
      family: "SuisseIntl",
      size: 1.1,
      weight: 500,
      lineHeight: 3,
      decor: "start"
    },
    default: {
      family: "SuisseIntl",
      size: .9,
      weight: 400,
      lineHeight: 1.2
    },
    note: {
      family: "SuisseIntl",
      size: .5,
      weight: 400,
      lineHeight: 1,
      decor: "lower"
    },
    bold: {
      family: "SuisseIntl",
      size: 1,
      weight: 700,
      lineHeight: 1,
      decor: "start"
    },
    boldText: {
      family: "SuisseIntl",
      weight: 700,
    },
  },
}

export const dark: Theme = {
  ...light,
  name: "dark",
  bgName: "black",
  shadowColor: "white",
  palette: {
    body: "#17363B",
    black: "#17363B",
    white: "#FFFFFF",
    primary: "#D8F9F0",
    secondary: "#12DB8B",
    active: "#0087F5",
    success: "#00ff97",
    warn: "#FF6D00",
    danger: "#FF1616",
  },
  lightness: {
    lightest: 0.5,
    lighter: 0.25,
    light: 0.1,
    dark: -0.1,
    darker: -0.25,
    darkest: -0.5,
  },
}