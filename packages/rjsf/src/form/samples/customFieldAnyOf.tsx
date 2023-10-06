import React from "react";
import { Label } from "@wahab/kit";
import { Box } from "@wahab/kit";
import { Container } from "@wahab/kit";
import { InputBase } from "@wahab/kit";
const UiField: React.FC<{
  schema?: any;
  idSchema: { $id: string };
  formData?: any;
  onChange: (...args: any[]) => void;
  [key: string]: any;
}> = ({ idSchema: { $id }, formData, onChange }) => {
  const changeHandlerFactory = (fieldName: string) => (event: any) => {
    onChange(formData ? { ...formData, [fieldName]: event.target.value } : { [fieldName]: event.target.value })
  }

  return (
    <>
      <Label typo="heading4">Location</Label>
      <Box flex>
        <Box padding="m">
          <Container
            flow="col"
            width={"50%"}
          >
            <Box>
              <Label htmlFor={`${$id}-city`}>
                City
              </Label>
              <InputBase
                id={`${$id}-city`}
                required={false}
                placeholder=""
                type="text"
                value={formData?.city || ""}
                onChange={changeHandlerFactory("city")}
              />
            </Box>
          </Container>
        </Box>
        <Box padding="m">
          <Container
            flow="col"
            width={"50%"}
          >
            <Box>
              <Label htmlFor={`${$id}-lat`}>
                Latitude
              </Label>
              <InputBase
                id={`${$id}-lat`}
                type="number"
                value={formData?.lat || 0}
                onChange={changeHandlerFactory("lat")}
              />
            </Box>
            <Box>
              <Label htmlFor={`${$id}-lon`}>
                Longitude
              </Label>
              <InputBase
                id={`${$id}-lon`}
                type="number"
                value={formData?.lon || 0}
                onChange={changeHandlerFactory("lon")}
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default {
  schema: {
    title: "Location",
    type: "object",
    anyOf: [
      {
        title: "City",
        properties: {
          city: {
            type: "string",
          },
        },
        required: ["city"],
      },
      {
        title: "Coordinates",
        properties: {
          lat: {
            type: "number",
          },
          lon: {
            type: "number",
          },
        },
        required: ["lat", "lon"],
      },
    ],
  },
  uiSchema: {
    "ui:field": UiField,
  },
  formData: {},
}
