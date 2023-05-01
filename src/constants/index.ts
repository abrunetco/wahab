import * as colors from './color';
import * as transitions from './transition';
import * as fonts from './font';
import * as lightness from './lightness';
import * as space from './space';

const C = {
  colors,
  transitions,
  fonts,
  lightness,
  space
};

export default C

export type Colors = typeof C.colors
export type ColorName = keyof Colors
export type Color = Colors[ColorName]

export type Fonts = typeof C.fonts
export type FontName = keyof Fonts
export type Font = Fonts[FontName]

export type Lightnesses = typeof C.lightness
export type LightnessName = keyof Lightnesses
export type Lightness = Lightnesses[LightnessName]

export type Spaces = typeof C.space
export type SpaceName = keyof Spaces
export type Space = Spaces[SpaceName]

export type Transitions = typeof C.transitions
export type TransitionName = keyof Transitions
export type Transition = Transitions[TransitionName]