import { CSSProperties } from "react"
import { mixinMap, mappedProps } from "./maps"
import { Theme } from "./theme/theme"
import { type } from "os"

type FFamilies = "SuisseIntl"
type FDecor = "upper" | "lower" | "start"
type FWeight = 400 | 500 | 700
export type FontStyle = { family: FFamilies, size: number, weight: FWeight, lineHeight: number, decor?: FDecor }
export type BoldStyle = { family: FFamilies, weight: FWeight }

export type IAlign = "top" | "bottom" | "center"
export type IJistify = "start" | "end" | "center" | "between" | "around"

export type OverFlow = "auto" | "hidden" | "scroll"

export type Space = keyof Theme["spacing"]
export type Round = keyof Theme["round"]

export type Shadow = keyof Theme["shadowSize"]
export type Color = (keyof Theme["palette"]) | "transparent"
export type Lightness = keyof Theme["lightness"]
export type Alpha = keyof Theme["alpha"]
export type Typography = keyof Theme["typography"]
export type BorderSize = keyof Theme["borderSizes"]

export interface IColor {
  v: Color
  l?: Lightness
  a?: Alpha
}

type ColorNotion = `${Color}:${Lightness | undefined}:${Alpha | undefined}`
export type ColorProp = Color | IColor | ColorNotion
export type Size = number | string

export interface IBorder {
  s: BorderSize
  c: ColorProp
  mode?: keyof ISpace
}

export interface ISpace {
  all?: Space
  s?: Space
  e?: Space
  t?: Space
  b?: Space
  x?: Space
  y?: Space
}

type SpaceNotion = `${keyof ISpace}:${Space}`

export type SpaceProp = ISpace | Space | SpaceNotion

export interface IRound {
  all?: Round
  st?: Round
  et?: Round
  eb?: Round
  sb?: Round
  s?: Round
  e?: Round
  t?: Round
  b?: Round
}

type RoundNotion = `${keyof IRound}:${Round}`

export type RoundProp = IRound | Round | RoundNotion

export function isIColor (c: ColorProp): c is IColor {
  return typeof c === "object" && "v" in c
}

export function isISpace (c: SpaceProp): c is ISpace {
  return typeof c === "object" && Object.keys(c).length > 0
}

export function isIRound (c: RoundProp): c is IRound {
  return typeof c === "object" && Object.keys(c).length > 0
}

export function isColorNotion (c: ColorProp): c is ColorNotion {
  return typeof c === "string" && c.indexOf(':') > 0
}

export function isSpaceNotion (c: SpaceProp): c is SpaceNotion {
  return typeof c === "string" && c.indexOf(':') > 0
}

export function isRoundNotion (c: RoundProp): c is RoundNotion {
  return typeof c === "string" && c.indexOf(':') > 0
}

export type SpecialArgTypes = {
  size: Size
  sizes: Size[] | Size
  shadow: Shadow
  color: ColorProp
  // spacing: ISpace
  spacing: SpaceProp
  space: Space
  round: RoundProp
  border: IBorder
}

export type Mixins = typeof mixinMap
export type MixinParams = {
  [P in keyof typeof mixinMap]: Parameters<Mixins[P]>[0]
}

export type MappedProps = {
  [P in keyof typeof mappedProps]: Parameters<typeof mappedProps[P]>[0]
}

export type Mapper<T extends keyof SpecialArgTypes> = (
  v: SpecialArgTypes[T],
  theme: Theme
) => any

export type StyleSystemPropsBase = Omit<
  Omit<CSSProperties, keyof MappedProps>,
  keyof MixinParams
> &
  Partial<MappedProps> &
  Partial<MixinParams>

export type StyleSystemProps = StyleSystemPropsBase

export interface ExtendedStyleSystemSheet {
  select: string
  sheet: StyleSystemSheet
}

export type StyleSystemSheet =
  | StyleSystemProps
  | (StyleSystemProps | StyleSystemSheet | Falsy)[]
  | Falsy

export type Falsy = false | 0 | "" | null | undefined

export type GetSheetProps<T> = T extends (props: infer P) => StyleSystemSheet ? P : unknown

export type UTI<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any
  ? R
  : never

export type MergeSheets<A> = A extends any[] ? UTI<GetSheetProps<A[number]>> : GetSheetProps<A>

export type FunctionSheet<T extends any = any> =
  | StyleSystemSheet
  | ((props: T) => StyleSystemSheet)

export type Dictionary<T, K extends string = string> = {
    [key in K]: T
  }