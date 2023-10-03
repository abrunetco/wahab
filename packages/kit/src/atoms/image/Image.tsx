import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ImageProps {
  thumbnail: boolean
  cover: boolean
}

export const ImageStyles = (props: ImageProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.thumbnail && { thumbnailStyle: true },
    props.cover && { objectFit: "cover" }
  ]
}

export const InheritedFromBox = defaults(Box.styles, {

})

export const Image = styl("img", InheritedFromBox, ImageStyles)