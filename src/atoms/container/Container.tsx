import styl from "../../styled";
import { Theme } from "../../styled/theme/theme";
import { ColorProp, StyleSystemSheet } from "../../styled/types";
import { Size } from "../box/Box";

export interface ContainerProps {
  width?: Size
  height?: Size
  bg?: ColorProp
}

const staticContainerProps: StyleSystemSheet = {
  display: 'block',
  center: true,
}

export const ContainerStyles = (props: ContainerProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.height && { height: props.height },
    props.width && { width: props.width },
    props.bg ? { backgroundColor: props.bg } : { backgroundColor: props.theme.bgName },
  ]
}


export const Container = styl('div', ContainerStyles, staticContainerProps)