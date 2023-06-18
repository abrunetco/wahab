import React from "react";
import Form from "@rjsf/bootstrap-4";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

export function JsonSchemaForm () {
  const schema: RJSFSchema = {
    title: "My Form",
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string", title: "Title", default: "A new task" },
      name: { type: "string"},
      done: { type: "boolean", title: "Done?", default: false },
    },
  };

  const log = (type: any) => console.log.bind(console, type);

  return (
    <Form
      schema={schema}
      validator={validator}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    />
  );
};
