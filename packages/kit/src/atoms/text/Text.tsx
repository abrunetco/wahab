import styl, { defaults } from "../../styled"
import { Box } from "../box/Box"

const inheritedFromBox = defaults(Box.styles, {})

export const Span = styl("span", inheritedFromBox, { display: "inline" })
export const Paraph = styl("p", inheritedFromBox)