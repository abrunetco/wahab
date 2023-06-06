import React, { forwardRef, useEffect } from "react";
import { Container } from "../../atoms/container/Container";
import { Box } from "../../atoms/box/Box";
import { Label } from "../../atoms/labelInput/LabelInput";
import { InputText } from "../../atoms/input/Input";
import { InputEmail } from "../../atoms/input/Input";
import { InputImage } from "../../atoms/input/Input";
import { InputNumber } from "../../atoms/input/Input";
import { InputPassword } from "../../atoms/input/Input";
import { Text } from "../../atoms/text/Text";

interface FeedbackProp {
  text: string
  type: 'danger' | 'warning' | 'success' | 'info'
}

interface FeildProps {
  type?: 'text' | 'image' | 'password' | 'email' | 'number'
  label: string
  feedback?: FeedbackProp
}

const Feedback = (props: FeedbackProp) => {
  return <Box color={props.type} typo="note"> {props.text} </Box>
}

const Inputs = forwardRef((props: FeildProps, ref) => {
  if (props.type === 'text') return <InputText {...props} ref={ref} />
  else if (props.type === 'email') return <InputEmail {...props} ref={ref} />
  else if (props.type === 'image') return <InputImage {...props} ref={ref} />
  else if (props.type === 'number') return <InputNumber {...props} ref={ref} />
  else if (props.type === 'password') return <InputPassword {...props} ref={ref} />
  else throw 'invalid input type'
})


export const Feild = forwardRef((props: FeildProps, ref) => {
  return (
    <Container flow='col'>
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