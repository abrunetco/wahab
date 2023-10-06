import React, { forwardRef } from "react"
import { Nav } from "@wahab/kit"
import { NavLink } from "@wahab/kit"
import styl, { defaults } from "../../styled"
import { Box } from "@wahab/kit"
import { SearchBar } from "@wahab/kit"


interface NavbarProps {
  
}

export const Navbar = forwardRef((props: NavbarProps, ref) => {
  return (
      <Nav
        padding={{ all: "s" }}
        align='center'
        justify='between'
        bg={{ v: 'body' }}
      >
        <Box>
          <NavLogo>logo</NavLogo>
        </Box>
        <Box>
          <NavLink padding={{ x: "s" }}>ss</NavLink>
          <NavLink padding={{ x: "s" }}>ss</NavLink>
          <NavLink padding={{ x: "s" }}>ss</NavLink>
          <NavLink padding={{ x: "s" }}>ss</NavLink>
        </Box>
        <Box>
          <SearchBar />
        </Box>
      </Nav>
  )
})

export const NavLogo: any = styl('a', defaults(Box.styles, {
 typo: "heading3",
 padding: { all: "xs" },
}))