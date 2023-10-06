import React from "react";
import { Text } from "@wahab/kit";
import { Icon } from "@wahab/kit";
import { Box } from "@wahab/kit";

export type LabelProps = {
  label?: string;
  required?: boolean;
  id?: string;
};

/** Renders a label for a field
 *
 * @param props - The `LabelProps` for this component
 */
export default function Label(props: LabelProps) {
  const { label, required, id } = props;
  if (!label) {
    return null;
  }
  return (
    <label htmlFor={id}>
      <Box typo="boldText" flex>
        {label}
        {required && 
        <Text center width={1} className='required'>
          <Icon name="VDraft"/>
        </Text>
        }
      </Box>
    </label>
  );
}

/// to do i can't use Label atom in this file abbas please fix it