import _ from 'lodash'
import * as mixins from './mixins'
import { SpecialArgTypes, Mapper } from './types'

export const mixinMap = {
  center: (t: boolean) => t && mixins.center
}

export const mappers: {
  [T in keyof SpecialArgTypes]: Mapper<T>
} = {
  size: (s, theme) => (typeof s === 'number' ? `${theme.size * s}px` : s),
  sizes: (ss, theme) => _.castArray(ss).map((s) => mappers.size(s, theme)).join(' '),
  color: () => 'unset',
}

export const mappedProps /*: P*/ = {
  color: mappers.color,
  width: mappers.size,
  height: mappers.size,
  minWidth: mappers.size,
  maxWidth: mappers.size,
  minHeight: mappers.size,
  maxHeight: mappers.size,
}