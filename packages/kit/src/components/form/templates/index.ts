import { TemplatesType } from "@rjsf/utils"
import ArrayFieldTemplate from "./ArrayFieldTemplate"
import ArrayFieldItemTemplate from "./ArrayFieldItemTemplate"
import BaseInputTemplate from "./BaseInputTemplate"
import DescriptionFieldTemplate from "./DescriptionFieldTemplate"
import ErrorListTemplate from "./ErrorListTemplate"
import FieldErrorTemplate from "./FieldErrorTemplate"
import FieldHelpTemplate from "./FieldHelpTemplate"
import ObjectFieldTemplate from "./ObjectFieldTemplate"
import TitleFieldTemplate from "./TitleFieldTemplate"
import UnsupportedFieldTemplate from "./UnsupportedFieldTemplate"
import WrapIfAdditionalTemplate from "./WrapIfAdditionalTemplate"
import FieldTemplate from "./FieldTemplate/FieldTemplate"
import SubmitButton from "./ButtonTemplates/SubmitButton"
import AddButton from "./ButtonTemplates/AddButton"
import { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } from "./ButtonTemplates/IconButton"

const ButtonTemplates: Partial<TemplatesType["ButtonTemplates"]> = {
  SubmitButton,
  AddButton,
  CopyButton,
  MoveDownButton,
  MoveUpButton,
  RemoveButton,
}

export {
  ArrayFieldTemplate,
  ArrayFieldItemTemplate,
  BaseInputTemplate,
  DescriptionFieldTemplate,
  ErrorListTemplate,
  FieldErrorTemplate,
  FieldHelpTemplate,
  ObjectFieldTemplate,
  TitleFieldTemplate,
  UnsupportedFieldTemplate,
  WrapIfAdditionalTemplate,
  FieldTemplate,
  ButtonTemplates
}