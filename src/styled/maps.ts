import _ from 'lodash'
import * as mixins from './mixins'
import { SpecialArgTypes, Mapper, ColorProp, isIColor, Color, Lightness } from './types'
import ColorFactory from 'color'

export const mixinMap = {
  center: (t: boolean) => t && mixins.center
}

export const mappers: {
  [T in keyof SpecialArgTypes]: Mapper<T>
} = {
  size: (s, theme) => (typeof s === 'number' ? `${theme.size * s}px` : s),
  sizes: (ss, theme) => _.castArray(ss).map((s) => mappers.size(s, theme)).join(' '),
  color: (c, theme) => {
    const colorName: Color = isIColor(c) ? c.v : c
    const lightName: Lightness | undefined = isIColor(c) ? c.l : undefined
    const hexColor = ColorFactory(theme.palette[colorName])
    if (lightName) {
      if (theme.lightness[lightName] > 0) hexColor.darken(theme.lightness[lightName])
      else hexColor.lighten(theme.lightness[lightName])
    }
    return hexColor.hex()
  },
}

export const mappedProps /*: P*/ = {
  color: mappers.color,
  width: mappers.size,
  height: mappers.size,
  minWidth: mappers.size,
  maxWidth: mappers.size,
  minHeight: mappers.size,
  maxHeight: mappers.size,
  backgroundColor: mappers.color,
  borderColor: mappers.color
}