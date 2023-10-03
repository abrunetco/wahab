import React, { forwardRef } from "react"
import { InputText } from "../../atoms/input/Input"
import { Button } from "../../atoms/button/Button"
import { Icon } from "../../atoms/icon"
import { Box } from "../../atoms/box/Box"
import { Container } from "../../atoms/container/Container"
import { Paraph } from "../../atoms/text/Text"
interface SearchBarProps {
  text?: string
}

export const SearchBar = forwardRef((props: SearchBarProps, ref) => {
  return (
    <Container bg={"transparent"}>
      <Box center padding="xs" width="100%">
        <InputText 
          height={2.5}
          width="100%"
          bg="white"
          rounded={{
            s:"xxs" 
          }}
          border={{
            s: 1,
            c: {
              v: "white",
              l: "dark"
            },
          }}
        />
        <Button
          center
          bg="white"
          border={{
            s: 0
          }}
          lvl="1"
          minWidth={2.5}
          height={2.5}
          rounded={{
            e:"xxs"            
          }}
        >
          {props.text ? <Paraph>{props.text}</Paraph> : <Icon name="Search" />}
        </Button>
      </Box>
    </Container>
  )
})