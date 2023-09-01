import { Label, Input, InputGroup } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputGroup>
      <Input {...otherProps} />
      {label && <Label shrink={otherProps.value.length}>{label}</Label>}
    </InputGroup>
  );
};

export default FormInput;
