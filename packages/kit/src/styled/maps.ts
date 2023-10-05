import _ from "_"
import * as mixins from "./mixins"
import { SpecialArgTypes, Mapper, isIColor, Typography, ExtendedStyleSystemSheet, isISpace, isSpaceNotion, isIRound, isRoundNotion, isColorNotion, IColor, Size, Space, Round } from "./types"
import ColorFactory from "color"
import { Theme } from "./theme/theme"
import { css } from "styled-components"
import { systemSheet } from "./utils"

export const mappers: {
  [T in keyof SpecialArgTypes]: Mapper<T>
} = {
  size: (s, theme) => (typeof s === "number" ? `${theme.size * s}px` : s),
  sizes: (ss, theme) => _.castArray(ss).map((s: Size) => mappers.size(s, theme)).join(" "),
  color: (c, theme) => {

    if (!isIColor(c)) {
      if (isColorNotion(c)) {
        const [v, l, a] = c.split(':')
        c = { v, l, a } as IColor
      } else {
        c = { v: c }
      }
    }

    if (c.v === 'transparent') return 'transparent'
    let hexColor = ColorFactory(theme.palette[c.v])

    if (c.l) {
      if (theme.lightness[c.l] > 0) hexColor = hexColor.darken(theme.lightness[c.l])
      else hexColor = hexColor.lighten(-1 * theme.lightness[c.l])
    }
    if (c.a) {
      hexColor = hexColor.alpha(theme.alpha[c.a])
    }

    if (!hexColor.hexa) {
      console.warn("[missing hexColor.hexa]", hexColor, c);
    }
    
    
    return hexColor.hexa()
  },
  space: (s, theme) => {
    return `${theme.size * theme.spacing[s]}px`
  },
  spacing: (s, theme) => {
    let spaces: Array<keyof Theme["spacing"]> = ["none", "none", "none", "none"]

    if (!isISpace(s)) {
      if (isSpaceNotion(s)) {
        const [k = 'all', v = 'none'] = s.split(':')
        s = { [k]: v }
      } else {
        s = { all: s }
      }
    }

    if (s.all) spaces = [s.all, s.all, s.all, s.all]
    if (s.x) spaces = [spaces[0], s.x, spaces[2], s.x]
    if (s.y) spaces = [s.y, spaces[1], s.y, spaces[3]]
    if (s.s) spaces = [spaces[0], spaces[1], spaces[2], s.s]
    if (s.e) spaces = [spaces[0], s.e, spaces[2], spaces[3]]
    if (s.t) spaces = [s.t, spaces[1], spaces[2], spaces[3]]
    if (s.b) spaces = [spaces[0], spaces[1], s.b, spaces[3]]

    return _.map(spaces, (s: Space) => `${theme.size * theme.spacing[s]}px`).join(" ")
  },
  round: (r, theme) => {
    let rounds: Array<keyof Theme["round"]> = ["none", "none", "none", "none"]

    if (!isIRound(r)) {
      if (isRoundNotion(r)) {
        const [k = 'all', v = 'none'] = r.split(':')
        r = { [k]: v }
      } else {
        r = { all: r }
      }
    }

    if (r.all) rounds = [r.all, r.all, r.all, r.all]
    if (r.st) rounds = [r.st, rounds[1], rounds[2], rounds[3]]
    if (r.et) rounds = [rounds[0], r.et, rounds[2], rounds[3]]
    if (r.eb) rounds = [rounds[0], rounds[1], r.eb, rounds[3]]
    if (r.sb) rounds = [rounds[0], rounds[1], rounds[2], r.sb]
    if (r.s) rounds = [r.s, rounds[1], rounds[2], r.s]
    if (r.t) rounds = [r.t, r.t, rounds[2], rounds[3]]
    if (r.e) rounds = [rounds[0], r.e, r.e, rounds[3]]
    if (r.b) rounds = [rounds[0], rounds[1], r.b, r.b]

    return _.map(rounds, (r: Round) => `${theme.size * theme.round[r]}px`).join(" ")
  },
  shadow: (sh, theme) => {
    const size = `${theme.shadowSize[sh]}px`
    const blur = `${theme.shadowSize[sh] + 1}px`
    const color = ColorFactory(theme.palette[theme.shadowColor]).alpha(0.5).hexa()

    return `${size} ${size} ${blur} ${color}`
  },
  border: (b, theme) => {
    const color = mappers.color(b.c, theme)
    const size = theme.borderSizes[b.s] + "px"

    return `${size} solid ${color}`
  },
}

export const mixinMap = {
  center: (t: boolean) => t && mixins.center,
  stretch: (t: boolean) => t && mixins.stretch,
  hoverStyles: (t: boolean) => t && mixins.hoverStyles,
  inputFocus: (t: boolean) => t && mixins.inputFocus,
  disableStyles: (t: boolean) => t && mixins.disableStyles,
  autoColor: (t: boolean) => t && mixins.autoColor,
  thumbnailStyle: (t: boolean) => t && mixins.thumbnailStyle,
  typo: (t: Typography) => t && mixins.fontStyles(t),
  hide: (t: boolean) => t && mixins.hidden,
  extend: (ss: ExtendedStyleSystemSheet[]) => ss.map(s => css`
    & ${s.select} {
      ${systemSheet(s.sheet)}
    }
  `),
} as const

export const mappedProps /*: P*/ = {
  width: mappers.size,
  height: mappers.size,
  minWidth: mappers.size,
  maxWidth: mappers.size,
  minHeight: mappers.size,
  maxHeight: mappers.size,
  flexBasis: mappers.size,
  color: mappers.color,
  fill: mappers.color,
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