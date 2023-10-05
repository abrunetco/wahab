import React, { forwardRef } from "react"
import { Container } from "@wahab/kit"
import { Box } from "@wahab/kit"
import { Label } from "@wahab/kit"
import { InputText } from "@wahab/kit"
import { InputEmail } from "@wahab/kit"
import { InputImage } from "@wahab/kit"
import { InputNumber } from "@wahab/kit"
import { InputPassword } from "@wahab/kit"
import { BaseInputTemplateProps } from "@rjsf/utils"

interface FeedbackProp {
  text: string
  type: "danger" | "warning" | "success" | "info"
}

interface FieldProps extends BaseInputTemplateProps {
  type?: "text" | "image" | "password" | "email" | "number"
  label: string
  feedback?: FeedbackProp
  placeholder?: string
}

const Feedback = (props: FeedbackProp) => {
  return <Box color={props.type} typo="note"> {props.text} </Box>
}

export const Inputs = (props: FieldProps) => {
  if (props.type === "text") return <InputText {...props} />
  else if (props.type === "email") return <InputEmail {...props} />
  else if (props.type === "image") return <InputImage {...props} />
  else if (props.type === "number") return <InputNumber {...props} />
  else if (props.type === "password") return <InputPassword {...props} />
  else throw "invalid input type"
  }

export const Field = forwardRef((props: FieldProps, ref) => {
  return (
    <Container flow="col">
      {props.label &&
        <Box>
          <Label>
            {props.label}:
          </Label>
        </Box>
      }
      <Box>
        <Inputs {...props} ref={ref} />
        {props.feedback && <Feedback {...props.feedback} />}
      </Box>
    </Container>
  )
})