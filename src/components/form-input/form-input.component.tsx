import { FC, InputHTMLAttributes } from "react";

import { Label, Input, InputGroup } from "./form-input.styles";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const hasOtherProps = Boolean(
    otherProps.value &&
      Array.isArray(otherProps.value) &&
      otherProps.value.length > 0
  );

  return (
    <InputGroup>
      <Input {...otherProps} />
      {label && <Label shrink={hasOtherProps}>{label}</Label>}
    </InputGroup>
  );
};

export default FormInput;
