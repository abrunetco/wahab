import React, { PropsWithChildren } from 'react'
import { Box } from "../../../atoms/box/Box"
import { Form } from '../../../atoms/form/Form'

export default function InternalFormWrapper(props: PropsWithChildren<{}>) {
  return (
    <Form bg="transparent" rounded="xs" {...props} padding={{ all: "m" }}>
      {props.children}
    </Form>
  )
}
