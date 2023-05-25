import _ from 'lodash'
import * as mixins from './mixins'
import { SpecialArgTypes, Mapper, isIColor, Color, Lightness, Typography } from './types'
import ColorFactory from 'color'
import { Theme } from './theme/theme'



export const mappers: {
  [T in keyof SpecialArgTypes]: Mapper<T>
} = {
  size: (s, theme) => (typeof s === 'number' ? `${theme.size * s}px` : s),
  sizes: (ss, theme) => _.castArray(ss).map((s) => mappers.size(s, theme)).join(' '),
  color: (c, theme) => {
    
    const colorName: Color = isIColor(c) ? c.v : c
    const lightName: Lightness | undefined = isIColor(c) ? c.l : undefined
    const alpha: Lightness | undefined = isIColor(c) ? c.a : undefined
    let hexColor = ColorFactory(theme.palette[colorName])
    if (lightName) {
      if (theme.lightness[lightName] > 0) hexColor = hexColor.darken(theme.lightness[lightName])
      else hexColor = hexColor.lighten(-1 * theme.lightness[lightName])
    }
    if (alpha) {
      hexColor = hexColor.alpha(theme.alpha[alpha])
    }
    return hexColor.hexa()
  },
  space: (s, theme) => {
    return `${theme.size * theme.spacing[s]}px`
  },
  spacing: (s, theme) => {
    let spaces: Array<keyof Theme['spacing']> = ["none", "none", "none", "none"]
    if (s.all) spaces = [s.all, s.all, s.all, s.all]
    if (s.x) spaces = [spaces[0], s.x, spaces[2], s.x]
    if (s.y) spaces = [s.y, spaces[1], s.y, spaces[3]]
    if (s.s) spaces = [spaces[0], spaces[1], spaces[2], s.s]
    if (s.e) spaces = [spaces[0], s.e, spaces[2], spaces[3]]
    if (s.t) spaces = [s.t, spaces[1], spaces[2], spaces[3]]
    if (s.b) spaces = [spaces[0], spaces[1], s.b, spaces[3]]
    return _.map(spaces, s => `${theme.size * theme.spacing[s]}px`).join(' ')
  },
  round: (r, theme) => {
    let rounds: Array<keyof Theme['round']> = ["none", "none", "none", "none"]
    if (r.all) rounds = [r.all, r.all, r.all, r.all]
    if (r.st) rounds = [r.st, rounds[1], rounds[2], rounds[3]]
    if (r.et) rounds = [rounds[0], r.et, rounds[2], rounds[3]]
    if (r.eb) rounds = [rounds[0], rounds[1], r.eb, rounds[3]]
    if (r.sb) rounds = [rounds[0], rounds[1], rounds[2], r.sb]
    if (r.s) rounds = [r.s, rounds[1], rounds[2], r.s]
    if (r.t) rounds = [r.t, r.t, rounds[2], rounds[3]]
    if (r.e) rounds = [rounds[0], r.e, r.e, rounds[3]]
    if (r.b) rounds = [rounds[0], rounds[1], r.b, r.b]
    return _.map(rounds, r => `${theme.size * theme.round[r]}px`).join(' ')
  },
  shadow: (sh, theme) => {
    const size = `${theme.shadowSize[sh]}px`
    const blur = `${theme.shadowSize[sh] + 1}px`
    const color = ColorFactory(theme.palette[theme.shadowColor]).alpha(0.5).hexa()
    return `${size} ${size} ${blur} ${color}`
  },
  border: (b, theme) => {
    let color = mappers.color(b.c, theme)
    let size = theme.borderSizes[b.s] + 'px'
    return `${size} solid ${color}`
  },
}

export const mixinMap = {
  center: (t: boolean) => t && mixins.center,
  hoverStyles: (t: boolean) => t && mixins.hoverStyles,
  inputFocus: (t: boolean) => t && mixins.inputFocus,
  disableStyles: (t: boolean) => t && mixins.disableStyles,
  autoColor: (t: boolean) => t && mixins.autoColor,
  thumbnailStyle: (t: boolean) => t && mixins.thumbnailStyle,
  typo: (t: Typography) => t && mixins.fontStyles(t)
}

export const mappedProps /*: P*/ = {
  width: mappers.size,
  height: mappers.size,
  minWidth: mappers.size,
  maxWidth: mappers.size,
  minHeight: mappers.size,
  maxHeight: mappers.size,
  flexBasis: mappers.size,
  color: mappers.color,
  backgroundColor: mappers.color,
  borderColor: mappers.color,
  padding: mappers.spacing,
  gap: mappers.space,
  borderRadius: mappers.round,
  boxShadow: mappers.shadow,
  borderRight: mappers.border,
  borderLeft: mappers.border,
  borderTop: mappers.border,
  borderBottom: mappers.border,
}