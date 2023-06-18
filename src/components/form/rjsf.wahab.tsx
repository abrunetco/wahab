import React, { forwardRef, ComponentType, PropsWithChildren, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react"
import { withTheme, ThemeProps, getDefaultRegistry } from "@rjsf/core"
import { Box } from "../../atoms/box/Box"
import { ColorProp } from "../../styled/types"
import { Text } from "../../atoms/text/Text"
import _ from "lodash"

const defaultRegistry = getDefaultRegistry()

console.log("defaultRegistry", {
  ...defaultRegistry
})

const emptyComp: ComponentType = () => {
  return (
    <Box>Empty</Box>
  )
}

function withBoxWrapper<T> (name: string, color?: ColorProp, useOriginal = true): ComponentType<PropsWithChildren<T>> {
  const WrappedBox = (props: PropsWithChildren<T>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const OriginalComponent: ComponentType<PropsWithChildren<T>> = _.get(defaultRegistry, name, emptyComp)

    return (
      <Box border={color && { s: 1, c: color }}>
        <Text bg={color} padding={{ x: "s" }}>{name}</Text>
        <Box {...props} padding={{ all: "s" }}>
          {useOriginal ? (
            <OriginalComponent {...props}>{props.children}</OriginalComponent>
          ) : props.children}
        </Box>
      </Box>
    )
  }

  return WrappedBox
}

const emptyForwardedComp: ComponentType = forwardRef((props, ref) => {
  return (
    <Box ref={ref}>Empty</Box>
  )
})

function withForwardedBoxWrapper<T> (name: string, color?: ColorProp, useOriginal = true): ForwardRefExoticComponent<PropsWithoutRef<PropsWithChildren<T>> & RefAttributes<unknown>> {
  const WrappedBox = forwardRef((props: PropsWithChildren<T>, ref) => {
    // console.log("mkForwardedBoxWrapper", name, name in defaultRegistry.templates)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const OriginalComponent: ComponentType<PropsWithChildren<T>> = _.get(defaultRegistry, name, emptyForwardedComp)

    return (
      <Box border={color && { s: 1, c: color }}>
        <Text bg={color} padding={{ x: "s" }}>{name}</Text>
        <Box {...props} padding={{ all: "s" }}>
          {useOriginal ? (
            <OriginalComponent {...props} ref={ref}>{props.children}</OriginalComponent>
          ) : props.children}
        </Box>
      </Box>
    )
  })

  return WrappedBox
}

const theme: ThemeProps = {
  fields: {
    AnyOfField: withBoxWrapper("fields.AnyOfField", "active"), /// (this field coming from utils.fileds.AnyOfField)
    // ArrayField: withBoxWrapper("fields.ArrayField", "active"),
    // BooleanField: withBoxWrapper("fields.BooleanField", "active"),
    // NumberField: withBoxWrapper("fields.NumberField", "active"),
    // ObjectField: withBoxWrapper("fields.ObjectField", "active"),
    OneOfField: withBoxWrapper("fields.OneOfField", "active"), /// (this field coming from utils.fileds.OneOfField)
    // SchemaField: withBoxWrapper("fields.SchemaField", "active"),
    // StringField: withBoxWrapper("fields.StringField", "active"),
    // NullField: withBoxWrapper("fields.NullField", "active")
  },
  templates: {
    BaseInputTemplate: withForwardedBoxWrapper("templates.BaseInputTemplate", "danger"), // forwardRef
    DescriptionFieldTemplate: withBoxWrapper("templates.DescriptionFieldTemplate", "danger"),
    ArrayFieldTemplate: withBoxWrapper("templates.ArrayFieldTemplate", "danger"),
    // ArrayFieldDescriptionTemplate: withBoxWrapper("templates.ArrayFieldDescriptionTemplate", "danger"),
    ArrayFieldItemTemplate: withForwardedBoxWrapper("templates.ArrayFieldItemTemplate", "danger"), // forwardRef
    // ArrayFieldTitleTemplate: withBoxWrapper("templates.ArrayFieldTitleTemplate", "danger"),
    ErrorListTemplate: withBoxWrapper("templates.ErrorListTemplate", "danger"),
    FieldErrorTemplate: withBoxWrapper("templates.FieldErrorTemplate", "danger"),
    FieldHelpTemplate: withBoxWrapper("templates.FieldHelpTemplate", "danger"),
    FieldTemplate: withForwardedBoxWrapper("templates.FieldTemplate", "danger"), // forwardRef
    ObjectFieldTemplate: withBoxWrapper("templates.ObjectFieldTemplate", "danger"),
    TitleFieldTemplate: withBoxWrapper("templates.TitleFieldTemplate", "danger"),
    UnsupportedFieldTemplate: withBoxWrapper("templates.UnsupportedFieldTemplate", "danger"),
    WrapIfAdditionalTemplate: withForwardedBoxWrapper("templates.WrapIfAdditionalTemplate", "danger"), // forwardRef
    ButtonTemplates: {
      SubmitButton: withBoxWrapper("templates.ButtonTemplates.SubmitButton", "warn"),
      AddButton: withForwardedBoxWrapper("templates.ButtonTemplates.AddButton", "warn"), // forwardRef
      ////this button templates in iconTemplate.tsx and geerate inside that
      CopyButton: withForwardedBoxWrapper("templates.ButtonTemplates.CopyButton", "warn"), // forwardRef
      MoveDownButton: withForwardedBoxWrapper("templates.ButtonTemplates.MoveDownButton", "warn"), // forwardRef
      MoveUpButton: withForwardedBoxWrapper("templates.ButtonTemplates.MoveUpButton", "warn"), // forwardRef
      RemoveButton: withForwardedBoxWrapper("templates.ButtonTemplates.RemoveButton", "warn"), // forwardRef
    }
  },
  widgets: {
    // TextWidget: withBoxWrapper("widgets.TextWidget", "secondary"),
    AltDateWidget: withBoxWrapper("widgets.AltDateWidget", "secondary"),/// have div and label html tag
    // AltDateTimeWidget: withBoxWrapper("widgets.AltDateTimeWidget", "secondary"),
    CheckboxWidget: withBoxWrapper("widgets.CheckboxWidget", "secondary"), /// have div html tag
    CheckboxesWidget: withBoxWrapper("widgets.CheckboxesWidget", "secondary"), /// have div and label html tag
    // ColorWidget: withBoxWrapper("widgets.ColorWidget", "secondary"),
    // DateWidget: withBoxWrapper("widgets.DateWidget", "secondary"),
    // DateTimeWidget: withBoxWrapper("widgets.DateTimeWidget", "secondary"),
    // EmailWidget: withBoxWrapper("widgets.EmailWidget", "secondary"),
    FileWidget: withBoxWrapper("widgets.FileWidget", "secondary"), ///have img,a,ul,... html tag
    HiddenWidget: withBoxWrapper("widgets.HiddenWidget", "secondary"), ////have input tag
    // PasswordWidget: withBoxWrapper("widgets.PasswordWidget", "secondary"),
    RadioWidget: withBoxWrapper("widgets.RadioWidget", "secondary"), ///have div html tag
    RangeWidget: withBoxWrapper("widgets.RangeWidget", "secondary"), ///have div html tag
    SelectWidget: withBoxWrapper("widgets.SelectWidget", "secondary"), /// have select html tag
    TextareaWidget: withBoxWrapper("widgets.TextareaWidget", "secondary"), /// have textarea html tag
    // TimeWidget: withBoxWrapper("widgets.TimeWidget", "secondary"),
    // UpDownWidget: withBoxWrapper("widgets.UpDownWidget", "secondary"),
    // URLWidget: withBoxWrapper("widgets.URLWidget", "secondary")
  },
  _internalFormWrapper: withForwardedBoxWrapper("_internalFormWrapper", "primary", false)
}

const WahabForm = withTheme(theme)

export default WahabForm
