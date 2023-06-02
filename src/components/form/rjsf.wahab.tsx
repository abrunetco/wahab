import React from "react"
// import Form from "@rjsf/core"
import { withTheme, ThemeProps, } from "@rjsf/core"
import { Box } from "../../atoms/box/Box"
import { ColorProp } from "../../styled/types"
import { Text } from "../../atoms/text/Text"

function withBoxWrapper (name: string, color?: ColorProp) {
  const WrappedBox = (props: React.PropsWithChildren) => {
    console.log("mkBoxWrapper", name, props)

    return (
      <Box border={color && { s: 1, c: color }}>
        <Text bg={color} padding={{x: "s"}}>{name}</Text>
        <Box {...props} padding={{ all: "s" }}>
          {props.children}
        </Box>
      </Box>
    )
  }

  return WrappedBox
}

const theme: ThemeProps = {
  // fields: {
  //   NumberField: withBoxWrapper("F:NumberField", "danger"),
  //   TitleField: withBoxWrapper("F:TitleField", "danger"),
  //   StringField: withBoxWrapper("F:StringField", "danger"),
  //   BooleanField: withBoxWrapper("F:BooleanField", "danger"),
  // },
  // templates: {
  //   BaseInputTemplate: withBoxWrapper("T:BaseInputTemplate", "danger"),
  //   DescriptionFieldTemplate: withBoxWrapper("T:DescriptionFieldTemplate", "danger"),
  // },
  // widgets: {
  //   TextWidget: withBoxWrapper("W:TextWidget", "danger"),
  // },
  _internalFormWrapper: withBoxWrapper("inner", "danger")
}

const WahabForm = withTheme(theme)

export default WahabForm
