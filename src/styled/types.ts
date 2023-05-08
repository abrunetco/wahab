import { CSSProperties } from "react"
import { mixinMap, mappedProps } from "./maps"
import { Theme } from "./theme/theme"

export type Color = keyof Theme['palette']
export type Lightness = keyof Theme['lightness']

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