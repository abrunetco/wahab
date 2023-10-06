import React, { PropsWithChildren } from 'react'
import { Form } from '@wahab/kit'

export default function InternalFormWrapper(props: PropsWithChildren<{}>) {
  return (
    <Form bg="transparent" rounded="xs" {...props} padding={{ all: "m" }}>
      {props.children}
    </Form>
  )
}
