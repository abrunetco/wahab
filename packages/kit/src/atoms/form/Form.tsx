import styl, { defaults } from "../../styled"
import { Box } from "../box/Box"

const inheritedFromBox = defaults(Box.styles, {})

export const Form = styl("form", inheritedFromBox)