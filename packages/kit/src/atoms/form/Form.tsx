import styl, { defaults } from "../../styled"
import { Box } from "../box/Box"

export const inheritedFromBox = defaults(Box.styles, {})

export const Form = styl("form", inheritedFromBox)