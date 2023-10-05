import { ComponentPropsWithoutRef } from "react"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"
import styled from "styled-components"

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  block: boolean
  disable: boolean
}

export const inputStyles = (props: InputProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.block && { width: "100%" },
    props.disable ? { disableStyles: true } : { inputFocus: true }
  ]
}

const InheritedFromBox = defaults(Box.styles, {
  border: { c: {v:"white", l:"darker"}, s: 1 },
  padding: { all: "xs" },
  rounded: { all: "xxs" },
  typo: "default",
  lvl: 1
})

export const InputBase = styl('input', InheritedFromBox, inputStyles)

const placeholder = "i am input ;)"

const TextInputBase = styled.input.attrs({ type: "text", placeholder: placeholder })``
export const InputText = styl(TextInputBase, InheritedFromBox, inputStyles)

const NumberInputBase = styled.input.attrs({ type: "number", placeholder: '0' })``
export const InputNumber = styl(NumberInputBase, InheritedFromBox, inputStyles)

const ImageInputBase = styled.input.attrs({ type: "image" })``
export const InputImage = styl(ImageInputBase, InheritedFromBox, inputStyles)

const EmailInputBase = styled.input.attrs({ type: "email" })``
export const InputEmail = styl(EmailInputBase, InheritedFromBox, inputStyles)

const PasswordInputBase = styled.input.attrs({ type: "password" })``
export const InputPassword = styl(PasswordInputBase, InheritedFromBox, inputStyles)