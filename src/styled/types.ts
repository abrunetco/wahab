import { CSSProperties } from "react"
import { mixinMap, mappedProps } from "./maps"
import { Theme } from "./theme/theme"


export type Space = {
  all?: keyof Theme['spacing']
  s?: keyof Theme['spacing']
  e?: keyof Theme['spacing']
  t?: keyof Theme['spacing']
  b?: keyof Theme['spacing']
  x?: keyof Theme['spacing']
  y?: keyof Theme['spacing']
}

export type Round = {
  all?: keyof Theme['spacing']
  st?: keyof Theme['spacing']
  et?: keyof Theme['spacing']
  eb?: keyof Theme['spacing']
  sb?: keyof Theme['spacing']
  s?: keyof Theme['spacing']
  e?: keyof Theme['spacing']
  t?: keyof Theme['spacing']
  b?: keyof Theme['spacing']
}

export type Shadow = keyof Theme["shadowSize"]

export type Color = keyof Theme['palette']
export type Lightness = keyof Theme['lightness']

export type Typography = keyof Theme['typography']

interface IColor {
  v: Color
  l: Lightness
}

export function isIColor(c: ColorProp): c is IColor {
  return typeof c === 'object' && 'v' in c
}

export type ColorProp = Color | IColor
export type Size = number | string

export type SpecialArgTypes = {
  size: Size
  sizes: Size[] | Size
  color: ColorProp
  spacing: Space
  round: Round
  shadow: Shadow
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

export interface StyleSystemProps extends StyleSystemPropsBase {}

export type StyleSystemSheet =
  | StyleSystemProps
  | (StyleSystemProps | StyleSystemSheet | Falsy)[]
  | Falsy

export type Falsy = false | 0 | '' | null | undefined

export type GetSheetProps<T> = T extends (props: infer P) => StyleSystemSheet ? P : {}

export type UTI<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any
  ? R
  : never

export type MergeSheets<A> = A extends any[] ? UTI<GetSheetProps<A[number]>> : GetSheetProps<A>

export type FunctionSheet<T extends any = any> =
  | StyleSystemSheet
  | ((props: T) => StyleSystemSheet)